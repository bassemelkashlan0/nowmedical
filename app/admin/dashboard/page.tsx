"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LogOut, RefreshCw } from "lucide-react"
import { API_BASE_URL } from "@/lib/api-config"

export default function AdminDashboardPage() {
  const [status, setStatus] = useState<{ isActive: boolean; lastUpdated?: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const router = useRouter()

  const getAuthHeaders = () => {
    const token = localStorage.getItem("admin_token")
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    }
  }

  useEffect(() => {
    fetchStatus()
  }, [])

  const fetchStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/status/admin`, {
        headers: getAuthHeaders(),
        credentials: "include",
      })
      if (response.status === 401) {
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
        return
      }
      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error("Error fetching status:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (isActive: boolean) => {
    setUpdating(true)
    try {
      const response = await fetch(`${API_BASE_URL}/status/admin`, {
        method: "PUT",
        headers: getAuthHeaders(),
        credentials: "include",
        body: JSON.stringify({ isActive }),
      })

      if (response.status === 401) {
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
        return
      }

      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error("Error updating status:", error)
    } finally {
      setUpdating(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        headers: getAuthHeaders(),
        credentials: "include",
      })
      localStorage.removeItem("admin_token")
      router.push("/admin/login")
    } catch (error) {
      console.error("Error logging out:", error)
      localStorage.removeItem("admin_token")
      router.push("/admin/login")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1F9F4]">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F1F9F4] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#299470]">Admin Dashboard</h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-[#299470] text-[#299470]"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Walk-in Live Status</CardTitle>
            <CardDescription>
              Manage the walk-in clinic status displayed on the website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <Label htmlFor="status-toggle" className="text-lg font-semibold">
                  Clinic Status
                </Label>
                <p className="text-sm text-muted-foreground">
                  {status?.isActive ? "Currently showing as OPEN" : "Currently showing as CLOSED"}
                </p>
                {status?.lastUpdated && (
                  <p className="text-xs text-muted-foreground">
                    Last updated: {new Date(status.lastUpdated).toLocaleString()}
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="status-toggle" className="cursor-pointer">
                  {status?.isActive ? "Active" : "Inactive"}
                </Label>
                <Switch
                  id="status-toggle"
                  checked={status?.isActive ?? false}
                  onCheckedChange={handleStatusChange}
                  disabled={updating}
                />
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Status Preview</h3>
              <div className={`rounded-lg p-4 ${status?.isActive ? "bg-[#A7D3C4]" : "bg-red-200"}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    status?.isActive ? "bg-[#4DA688]" : "bg-red-400"
                  }`}>
                    <div
                      className={`h-5 w-5 rounded-full ${
                        status?.isActive
                          ? "bg-[#195A44] animate-pulse"
                          : "bg-red-600"
                      }`}
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-lg text-[#050505]">
                      Walk-in Live Status
                    </span>
                    <p className="text-sm text-[#050505]">
                      Walk-in is {status?.isActive ? "OPEN NOW" : "CLOSED"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={fetchStatus}
              variant="outline"
              className="w-full"
              disabled={updating}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Status
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

