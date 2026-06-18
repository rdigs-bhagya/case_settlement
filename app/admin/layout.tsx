"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import {
  ADMIN_TOKEN_STORAGE_KEY,
  clearAdminSession,
  isAdminSessionValid,
} from "@/lib/admin-auth"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const validateSession = () => {
      const token = localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)

      if (!isAdminSessionValid(token)) {
        clearAdminSession()
        setIsAuthorized(false)
        router.push("/")
        return
      }

      setIsAuthorized(true)
    }

    validateSession()

    const validationInterval = window.setInterval(validateSession, 30000)

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === ADMIN_TOKEN_STORAGE_KEY) {
        validateSession()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.clearInterval(validationInterval)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [router])

  if (!isAuthorized) {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
