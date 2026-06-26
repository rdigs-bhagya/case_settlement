"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  ADMIN_TOKEN_STORAGE_KEY,
  createAdminSession,
} from "@/lib/admin-auth"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const loginUrl = process.env.NEXT_PUBLIC_ADMIN_LOGIN_URL || "https://g8l8qu2ccf.execute-api.us-east-1.amazonaws.com/dev/auth/login";
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, createAdminSession(data.token))
        router.push("/admin/dashboard")
      } else {
        setError("Invalid email or password")
        setLoading(false)
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#E6F3FB]">
      <Card className="w-full max-w-md p-8 shadow-[0_10px_40px_rgba(48,153,213,0.15)] border-t-4 border-t-[#3099D5] rounded-xl bg-white">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F3FB] text-[#3099D5] mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Claims</h1>
          <p className="text-gray-500">Secure Admin Access</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Username/Email</label>
            <Input type="text" placeholder="rdigs" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-destructive text-sm">{error}</p>}

          <Button type="submit" disabled={loading} className="w-full bg-[#3099D5] hover:bg-[#257ba9] text-white shadow-lg shadow-[#3099D5]/30 transition-all rounded-lg py-6 text-md">
            {loading ? "Logging in..." : "Login to Dashboard"}
          </Button>
        </form>
      </Card>
    </div>
  )
}
