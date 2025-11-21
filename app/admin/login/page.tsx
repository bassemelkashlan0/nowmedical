"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { API_BASE_URL } from "@/lib/api-config"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        if (response.status === 401) {
          const errorData = await response.json().catch(() => ({}))
          setError(errorData.message || "Invalid credentials")
        } else {
          setError(`Server error: ${response.status}`)
        }
        return
      }

      const data = await response.json()

      if (data.success) {
        // Store token in localStorage for Authorization header
        if (data.token) {
          localStorage.setItem("admin_token", data.token)
        }
        // Store admin role in localStorage
        if (data.admin?.role) {
          localStorage.setItem("admin_role", data.admin.role)
        }
        router.push("/admin/dashboard")
      } else {
        setError(data.message || "Invalid credentials")
      }
    } catch (err: any) {
      console.error("Login error:", err)
      if (err.message?.includes("Failed to fetch") || err.message?.includes("CORS")) {
        setError("Cannot connect to server. Make sure backend is running on port 5000.")
      } else {
        setError("An error occurred. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F9F4] p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  disabled={loading}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                {error}
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-[#299470] hover:bg-[#2D7B6F]"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="mt-4 text-xs text-muted-foreground text-center">
            First time? Register an admin account first.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

