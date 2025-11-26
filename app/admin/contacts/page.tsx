"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button as MUIButton,
} from "@mui/material"; // ✅ Import Material UI components

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
import { Eye, Trash2 } from "lucide-react";
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
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [deleting, setDeleting] = useState<string | null>(null);

  // ✅ New dialog states
  const [openDialog, setOpenDialog] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);

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

  // ✅ Filtering logic
  useEffect(() => {
    const filtered = contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.caseType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [searchTerm, contacts]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredContacts.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredContacts.length / recordsPerPage);

  // ✅ Open confirmation dialog
  const handleOpenDeleteDialog = (contact: Contact) => {
    setContactToDelete(contact);
    setOpenDialog(true);
  };

  // ✅ Close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setContactToDelete(null);
  };

  // ✅ Confirm delete
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

  return (
    <div className="p-8">
      {/* ✅ Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Forms</h1>
          <p className="text-muted-foreground mt-2">
            Manage all submitted contact inquiries
          </p>
        </div>

        {/* ✅ Search Input */}
        {/* <input
          type="text"
          placeholder="Search by name, email, or case type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
      </div>

      {loading ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Loading contacts...</p>
        </Card>
      ) : (
        <>
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


            {/* <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </Button>
          </div> */}

          {/* ✅ Delete Confirmation Dialog */}
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
                {deleting === contactToDelete?._id
                  ? "Deleting..."
                  : "Delete"}
              </MUIButton>
            </DialogActions>
          </Dialog>
          {/* ✅ Pagination Info */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, filteredContacts.length)} of{" "}
                {filteredContacts.length} contacts
              </p>
              <div className="flex gap-2">
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
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <span className="text-sm text-muted-foreground flex items-center">
                Records per page:
              </span>
              <select
                value={recordsPerPage}
                onChange={(e) => {
                  setRecordsPerPage(Number(e.target.value))
                  setCurrentPage(1)
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
        </>
      )}

      {selectedContact && (
        <ContactDetailModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
}
