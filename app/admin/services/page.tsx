"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search } from "lucide-react"

// Dummy service request data
const dummyServices = [
  {
    id: 1,
    clientName: "John Doe",
    email: "john@example.com",
    phone: "555-0101",
    caseType: "Personal Injury",
    description: "Car accident resulting in back injury. Seeking compensation.",
    budget: "$15,000 - $25,000",
    date: "2024-11-10",
    priority: "High",
  },
  {
    id: 2,
    clientName: "Sarah Smith",
    email: "sarah@example.com",
    phone: "555-0102",
    caseType: "Employment Law",
    description: "Workplace discrimination case requiring legal representation.",
    budget: "$5,000 - $10,000",
    date: "2024-11-09",
    priority: "Medium",
  },
  {
    id: 3,
    clientName: "Michael Johnson",
    email: "michael@example.com",
    phone: "555-0103",
    caseType: "Contract Dispute",
    description: "Business contract breach dispute with supplier.",
    budget: "$10,000 - $20,000",
    date: "2024-11-08",
    priority: "High",
  },
  {
    id: 4,
    clientName: "Emily Brown",
    email: "emily@example.com",
    phone: "555-0104",
    caseType: "Real Estate",
    description: "Property boundary dispute and title clarification needed.",
    budget: "$3,000 - $8,000",
    date: "2024-11-07",
    priority: "Low",
  },
  {
    id: 5,
    clientName: "David Lee",
    email: "david@example.com",
    phone: "555-0105",
    caseType: "Family Law",
    description: "Divorce proceedings with custody considerations.",
    budget: "$20,000+",
    date: "2024-11-06",
    priority: "High",
  },
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedService, setSelectedService] = useState<(typeof dummyServices)[0] | null>(null)

  // Filter services based on search
  const filteredServices = dummyServices.filter(
    (service) =>
      service.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.caseType.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Service Requests</h1>
              <p className="text-sm text-muted-foreground">{dummyServices.length} total requests</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {!selectedService ? (
          <Card>
            <CardHeader>
              <CardTitle>All Service Requests</CardTitle>
              <CardDescription>Search and view all service request submissions</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Search Bar */}
              <div className="mb-6 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by client name, email, or case type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client Name</TableHead>
                      <TableHead>Case Type</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredServices.length > 0 ? (
                      filteredServices.map((service) => (
                        <TableRow key={service.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{service.clientName}</TableCell>
                          <TableCell className="text-sm">{service.caseType}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{service.budget}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityColor(
                                service.priority,
                              )}`}
                            >
                              {service.priority}
                            </span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{service.date}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => setSelectedService(service)}>
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No services found matching your search.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* View Detail */
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{selectedService.clientName}</CardTitle>
                  <CardDescription>Service request details</CardDescription>
                </div>
                <Button variant="outline" onClick={() => setSelectedService(null)}>
                  Back to List
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Client Name</p>
                  <p className="mt-1 text-foreground">{selectedService.clientName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="mt-1 text-foreground">{selectedService.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="mt-1 text-foreground">{selectedService.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date</p>
                  <p className="mt-1 text-foreground">{selectedService.date}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Case Type</p>
                  <p className="mt-1 text-foreground">{selectedService.caseType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Budget</p>
                  <p className="mt-1 text-foreground">{selectedService.budget}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Priority</p>
                <p className="mt-1">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityColor(
                      selectedService.priority,
                    )}`}
                  >
                    {selectedService.priority}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Description</p>
                <p className="mt-2 rounded-md bg-muted p-4 text-foreground">{selectedService.description}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
