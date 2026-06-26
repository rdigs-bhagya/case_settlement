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
          fetch(`${baseUrl}/contact/data`, { headers }),
          fetch(`${baseUrl}/claims/data`, { headers }),
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
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">Overview of your claims management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Contacts Card */}
        <Card className="border-t-4 border-t-[#3099D5] shadow-md shadow-[#3099D5]/10 rounded-xl bg-white transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-gray-700 uppercase tracking-wide">Total Contact Forms</CardTitle>
            <div className="w-10 h-10 rounded-full bg-[#E6F3FB] flex items-center justify-center">
              <Users className="h-5 w-5 text-[#3099D5]" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-3xl font-bold text-gray-300 animate-pulse">...</div>
            ) : (
              <>
                <div className="text-4xl font-extrabold text-gray-900">{stats.totalContacts}</div>
                <p className="text-sm text-gray-500 mt-2 font-medium">Submitted contact inquiries</p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Total Claims Card */}
        <Card className="border-t-4 border-t-[#3099D5] shadow-md shadow-[#3099D5]/10 rounded-xl bg-white transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-gray-700 uppercase tracking-wide">Total Claims Forms</CardTitle>
            <div className="w-10 h-10 rounded-full bg-[#E6F3FB] flex items-center justify-center">
              <FileStack className="h-5 w-5 text-[#3099D5]" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-3xl font-bold text-gray-300 animate-pulse">...</div>
            ) : (
              <>
                <div className="text-4xl font-extrabold text-gray-900">{stats.totalClaims}</div>
                <p className="text-sm text-gray-500 mt-2 font-medium">Submitted claim requests</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 border-none shadow-md shadow-gray-200/50 rounded-xl bg-white">
        <CardHeader className="bg-gray-50/50 border-b border-gray-100 rounded-t-xl">
          <CardTitle className="text-gray-900">Quick Access</CardTitle>
          <CardDescription className="text-gray-500">Navigate to view detailed information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-[#3099D5]"></div>
            Use the sidebar to navigate between Contact Forms and Claims Forms pages
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-[#3099D5]"></div>
            Click on any row to view full details
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-[#3099D5]"></div>
            Use pagination controls to display 15 or 20 records per page
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
