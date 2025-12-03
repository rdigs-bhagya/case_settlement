"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button as MUIButton,
} from "@mui/material";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Trash2, Download } from "lucide-react";
import { ContactDetailModal } from "@/components/contact-detail-modal";

interface Contact {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  caseType: string;
  createdAt?: string;
  // optional clientDetails retained if present
  clientDetails?: any;
}

export default function ContactsPage() {
  // Data + UI state
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  // Delete dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  // Bulk download filters
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [latestCount, setLatestCount] = useState<number>(10);

  // Fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://case-9w55.onrender.com/contact");
        const data = await response.json();

        let contactsList = Array.isArray(data)
          ? data
          : data?.data && Array.isArray(data.data)
            ? data.data
            : data?.contacts && Array.isArray(data.contacts)
              ? data.contacts
              : [];

        // If server returns oldest-first, reverse to show newest first
        const sortedList = contactsList.reverse();
        setContacts(sortedList);
        setFilteredContacts(sortedList);
      } catch (error) {
        console.error("[v0] Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Filtering by searchTerm
  useEffect(() => {
    const filtered = contacts.filter(
      (contact) =>
        (contact.firstName || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (contact.lastName || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (contact.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (contact.caseType || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [searchTerm, contacts]);

  // Pagination calculations
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredContacts.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.max(1, Math.ceil(filteredContacts.length / recordsPerPage));

  // Delete flow
  const handleOpenDeleteDialog = (contact: Contact) => {
    setContactToDelete(contact);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setContactToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (!contactToDelete?._id) return;
    const id = contactToDelete._id;
    setDeleting(id);

    try {
      const response = await fetch(
        `https://case-9w55.onrender.com/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
        setFilteredContacts((prev) => prev.filter((c) => c._id !== id));
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("[v0] Error deleting contact:", error);
    } finally {
      setDeleting(null);
      handleCloseDialog();
    }
  };

  // ------------------------
  // PDF helpers (dynamic import of jspdf)
  // ------------------------

  async function downloadSinglePDF(contact: Contact) {
    try {
      const jsPDF = (await import("jspdf")).default;
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text("Contact Details", 10, 14);
      let y = 26;

      const addLine = (label: string, value: any) => {
        doc.setFontSize(11);
        // Wrap long message lines by splitting if necessary
        const text = `${label}: ${value ?? "N/A"}`;
        const split = doc.splitTextToSize(text, 180);
        doc.text(split, 10, y);
        y += (split.length + 0.5) * 6; // advance y based on lines
      };

      addLine("First Name", contact.firstName);
      addLine("Last Name", contact.lastName);
      addLine("Email", contact.email);
      addLine("Phone", contact.phone);
      addLine("Case Type", contact.caseType);
      addLine("Consent", (contact as any).consent ? "Yes" : "No");
      addLine("Message", contact.message);

      if ((contact as any).clientDetails) {
        y += 4;
        doc.setFontSize(14);
        doc.text("Client Details", 10, y);
        y += 8;
        const cd = (contact as any).clientDetails;
        addLine("IP Address", cd.ipAddress);
        addLine("Browser", cd.browser);
        addLine("OS", cd.os);
        addLine("Device", cd.device);

        if (cd.location) {
          y += 4;
          doc.setFontSize(13);
          doc.text("Location", 10, y);
          y += 8;
          addLine("Country", cd.location.country);
          addLine("Region", cd.location.region);
          addLine("City", cd.location.city);
          addLine("Timezone", cd.location.timezone);
          addLine("Coordinates", cd.location.ll ? cd.location.ll.join(", ") : "N/A");
        }
      }

      if (contact.createdAt) {
        addLine("Submitted At", new Date(contact.createdAt).toLocaleString());
      }

      const fileName = `Contact-${contact.firstName || "NA"}-${contact.lastName || "NA"}.pdf`;
      doc.save(fileName);
    } catch (err) {
      console.error("Error generating PDF", err);
      alert("Failed to create PDF. Check console for details.");
    }
  }

  async function downloadBulkPDF(list: Contact[], filename = "Contacts-Report.pdf") {
  try {
    const jsPDF = (await import("jspdf")).default;
    const doc = new jsPDF();

    let y = 20;

    const newPage = () => {
      doc.addPage();
      y = 20;
    };

    const heading = (text: string) => {
      doc.setFontSize(16);
      doc.setFont("Helvetica", "bold");
      doc.text(text, 10, y);
      y += 10;
    };

    const addLine = (label: string, value: any) => {
      doc.setFontSize(11);
      doc.setFont("Helvetica", "normal");
      const finalText = `${label}: ${value ?? "N/A"}`;
      const wrapped = doc.splitTextToSize(finalText, 180);

      if (y + wrapped.length * 7 > 280) newPage();
      doc.text(wrapped, 10, y);
      y += wrapped.length * 7;
    };

    heading("Contacts Report");

    list.forEach((contact, index) => {
      if (y > 260) newPage();

      // Lead Title
      doc.setFontSize(14);
      doc.setFont("Helvetica", "bold");
      doc.text(`Lead ${index + 1}`, 10, y);
      y += 10;

      // Main Details
      addLine("First Name", contact.firstName);
      addLine("Last Name", contact.lastName);
      addLine("Email", contact.email);
      addLine("Phone", contact.phone);
      addLine("Case Type", contact.caseType);
      addLine("Consent", (contact as any).consent ? "Yes" : "No");
      addLine("Message", contact.message);

      // Client Details
      if (contact.clientDetails) {
        const cd = contact.clientDetails;

        y += 6;
        doc.setFontSize(13);
        doc.setFont("Helvetica", "bold");
        doc.text("Client Details", 10, y);
        y += 8;

        addLine("IP Address", cd.ipAddress);
        addLine("Browser", cd.browser);
        addLine("OS", cd.os);
        addLine("Device", cd.device);

        if (cd.location) {
          y += 4;
          doc.setFontSize(13);
          doc.setFont("Helvetica", "bold");
          doc.text("Location", 10, y);
          y += 8;

          addLine("Country", cd.location.country);
          addLine("Region", cd.location.region);
          addLine("City", cd.location.city);
          addLine("Timezone", cd.location.timezone);
          addLine(
            "Coordinates",
            cd.location.ll ? cd.location.ll.join(", ") : "N/A"
          );
        }
      }

      // Submitted At
      addLine(
        "Submitted At",
        contact.createdAt
          ? new Date(contact.createdAt).toLocaleString()
          : "N/A"
      );

      // Divider Line
      y += 5;
      doc.setDrawColor(180);
      doc.line(10, y, 200, y);
      y += 12;
    });

    doc.save(filename);
  } catch (err) {
    console.error("PDF error", err);
    alert("Bulk PDF failed to generate");
  }
}


  // Bulk actions triggered by UI
  const handleDownloadAll = () => {
    downloadBulkPDF(filteredContacts, "Contacts-All.pdf");
  };

  const handleDownloadLatestN = () => {
    const list = filteredContacts.slice(0, latestCount);
    downloadBulkPDF(list, `Contacts-Latest-${latestCount}.pdf`);
  };

  const handleDownloadByDateRange = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    // include end date full day
    end.setHours(23, 59, 59, 999);

    const list = filteredContacts.filter((c) => {
      if (!c.createdAt) return false;
      const d = new Date(c.createdAt);
      return d >= start && d <= end;
    });

    if (list.length === 0) {
      alert("No contacts found in the selected date range.");
      return;
    }

    downloadBulkPDF(list, `Contacts-${startDate}-to-${endDate}.pdf`);
  };

  // Render
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Forms</h1>
          <p className="text-muted-foreground mt-2">
            Manage all submitted contact inquiries
          </p>
        </div>

        <div className="flex gap-3 items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by name, email, or case type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Loading contacts...</p>
        </Card>
      ) : (
        <>
          {/* Actions: bulk download & filters */}
          <Card className="mb-6 p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-2 items-center">
                <Button onClick={handleDownloadAll}>Download All Leads</Button>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={latestCount}
                    onChange={(e) => setLatestCount(Number(e.target.value))}
                    className="w-20 px-2 py-1 border rounded-md"
                  />
                  <Button onClick={handleDownloadLatestN}>
                    Download Latest
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-2 py-1 border rounded-md"
                  />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-2 py-1 border rounded-md"
                  />
                  <Button onClick={handleDownloadByDateRange}>
                    Download by Date
                  </Button>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                Showing {filteredContacts.length} result(s)
              </div>
            </div>
          </Card>

          {/* Table */}
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">S.No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Case Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {currentRecords.length > 0 ? (
                  currentRecords.map((contact, index) => (
                    <TableRow key={contact._id || index}>
                      <TableCell>{indexOfFirstRecord + index + 1}</TableCell>
                      <TableCell>
                        {contact.firstName} {contact.lastName}
                      </TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phone}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {contact.caseType}
                        </span>
                      </TableCell>
                      <TableCell>
                        {contact.createdAt
                          ? new Date(contact.createdAt).toLocaleDateString()
                          : "N/A"}
                      </TableCell>

                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedContact(contact)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => downloadSinglePDF(contact)}
                            title="Download single PDF"
                          >
                            <Download className="w-4 h-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleOpenDeleteDialog(contact)}
                            disabled={deleting === contact._id}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No contacts found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>

          {/* Pagination */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredContacts.length === 0 ? 0 : indexOfFirstRecord + 1} to{" "}
                {Math.min(indexOfLastRecord, filteredContacts.length)} of{" "}
                {filteredContacts.length} contacts
              </p>

              <div className="flex gap-2 items-center">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Button>

                <span className="flex items-center px-3 text-sm">
                  Page {currentPage} of {totalPages}
                </span>

                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>

                <span className="text-sm text-muted-foreground flex items-center ml-4">
                  Records per page:
                </span>

                <select
                  value={recordsPerPage}
                  onChange={(e) => {
                    setRecordsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-3 py-1 border border-border rounded-md text-sm bg-background"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Detail modal */}
      {selectedContact && (
        <ContactDetailModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}

      {/* Delete confirmation dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete{" "}
            <strong>
              {contactToDelete?.firstName} {contactToDelete?.lastName}
            </strong>
            ? This action cannot be undone.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <MUIButton onClick={handleCloseDialog} color="primary">
            Cancel
          </MUIButton>

          <MUIButton
            onClick={handleConfirmDelete}
            color="error"
            disabled={deleting === contactToDelete?._id}
          >
            {deleting === contactToDelete?._id ? "Deleting..." : "Delete"}
          </MUIButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
