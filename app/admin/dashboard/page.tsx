"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileStack } from "lucide-react"

interface DashboardStats {
  totalContacts: number
  totalClaims: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({ totalContacts: 0, totalClaims: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken")
        const headers = { Authorization: `Bearer ${token}` }
        const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL || "https://g8l8qu2ccf.execute-api.us-east-1.amazonaws.com/dev";

        const [contactsRes, claimsRes] = await Promise.all([
          fetch(`${baseUrl}/contact`, { headers }),
          fetch(`${baseUrl}/claims`, { headers }),
        ])

        const contactsData = await contactsRes.json()
        const claimsData = await claimsRes.json()

        setStats({
          totalContacts: Array.isArray(contactsData) ? contactsData.length : contactsData?.length || 0,
          totalClaims: Array.isArray(claimsData) ? claimsData.length : claimsData?.length || 0,
        })
      } catch (error) {
        console.error("[v0] Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Overview of your claims management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Contacts Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contact Forms</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-2xl font-bold text-muted-foreground">Loading...</div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.totalContacts}</div>
                <p className="text-xs text-muted-foreground mt-1">Submitted contact inquiries</p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Total Claims Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Claims Forms</CardTitle>
            <FileStack className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-2xl font-bold text-muted-foreground">Loading...</div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.totalClaims}</div>
                <p className="text-xs text-muted-foreground mt-1">Submitted claim requests</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Quick Access</CardTitle>
          <CardDescription>Navigate to view detailed information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            • Use the sidebar to navigate between Contact Forms and Claims Forms pages
          </p>
          <p className="text-sm text-muted-foreground">• Click on any row to view full details</p>
          <p className="text-sm text-muted-foreground">
            • Use pagination controls to display 15 or 20 records per page
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
