"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Mail, FileText, LogOut } from "lucide-react"
import { clearAdminSession } from "@/lib/admin-auth"

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    clearAdminSession()
    router.push("/")
  }

  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-64 bg-white text-gray-800 border-r border-gray-200 h-screen sticky top-0 flex flex-col shadow-sm">
      <div className="p-6 border-b border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#3099D5] flex items-center justify-center shadow-lg shadow-[#3099D5]/30">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Legal Admin</h2>
          <p className="text-xs text-gray-500 font-medium">Claims Management</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-3">
        <Link href="/admin/dashboard" className="block w-full">
          <Button variant="ghost" className={`w-full justify-start h-12 ${isActive("/admin/dashboard") ? "bg-[#3099D5] text-white hover:bg-[#257ba9] shadow-md shadow-[#3099D5]/20" : "hover:bg-[#E6F3FB] hover:text-[#3099D5] text-gray-600"}`}>
            <LayoutDashboard className="w-5 h-5 mr-3" />
            <span className="font-medium text-[15px]">Dashboard</span>
          </Button>
        </Link>

        <Link href="/admin/contacts" className="block w-full">
          <Button variant="ghost" className={`w-full justify-start h-12 ${isActive("/admin/contacts") ? "bg-[#3099D5] text-white hover:bg-[#257ba9] shadow-md shadow-[#3099D5]/20" : "hover:bg-[#E6F3FB] hover:text-[#3099D5] text-gray-600"}`}>
            <Mail className="w-5 h-5 mr-3" />
            <span className="font-medium text-[15px]">Contact Forms</span>
          </Button>
        </Link>

        <Link href="/admin/claims" className="block w-full">
          <Button variant="ghost" className={`w-full justify-start h-12 ${isActive("/admin/claims") ? "bg-[#3099D5] text-white hover:bg-[#257ba9] shadow-md shadow-[#3099D5]/20" : "hover:bg-[#E6F3FB] hover:text-[#3099D5] text-gray-600"}`}>
            <FileText className="w-5 h-5 mr-3" /> 
            <span className="font-medium text-[15px]">Claims Forms</span>
          </Button>
        </Link>

        {/* <Link href="/admin/send-mail">
          <Button variant={isActive("/admin/send-mail") ? "default" : "ghost"} className="w-full justify-start">
            <FileText className="w-5 h-5 mr-2" /> 
            Send Mail
          </Button>
        </Link> */}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700 h-12"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium text-[15px]">Logout</span>
        </Button>
      </div>
    </aside>
  )
}
