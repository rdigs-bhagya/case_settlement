"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <p className="mt-2 text-muted-foreground">Manage your legal claims submissions</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Contact Forms Card */}
          <Link href="/admin/contacts">
            <Card className="cursor-pointer transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">📧 Contact Forms</CardTitle>
                <CardDescription>View and manage contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Manage all contact form data from your website visitors and potential clients.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  View Submissions
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Service Forms Card */}
          <Link href="/admin/services">
            <Card className="cursor-pointer transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">📋 Service Requests</CardTitle>
                <CardDescription>View and manage service request forms</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Track all service requests including case types, client information, and details.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  View Requests
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
