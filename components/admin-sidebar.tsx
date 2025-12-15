"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Mail, FileText, LogOut } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/")
  }

  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-2xl font-bold text-sidebar-primary">Legal Admin</h2>
        <p className="text-sm text-sidebar-accent-foreground">Claims Management</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link href="/admin/dashboard">
          <Button variant={isActive("/admin/dashboard") ? "default" : "ghost"} className="w-full justify-start">
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Dashboard
          </Button>
        </Link>

        <Link href="/admin/contacts">
          <Button variant={isActive("/admin/contacts") ? "default" : "ghost"} className="w-full justify-start">
            <Mail className="w-5 h-5 mr-2" />
            Contact Forms
          </Button>
        </Link>

        <Link href="/admin/claims">
          <Button variant={isActive("/admin/claims") ? "default" : "ghost"} className="w-full justify-start">
            <FileText className="w-5 h-5 mr-2" /> 
            Claims Forms
          </Button>
        </Link>

        <Link href="/admin/send-mail">
          <Button variant={isActive("/admin/send-mail") ? "default" : "ghost"} className="w-full justify-start">
            <FileText className="w-5 h-5 mr-2" /> 
            Send Mail
          </Button>
        </Link>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start text-destructive bg-transparent"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
