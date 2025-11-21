"use client"

import * as React from "react"
import {
  Home,
  LogOut,
  Users,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { API_BASE_URL } from "@/lib/api-config"

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
    adminOnly: true, // Only show to admin users
  },
]

// Helper function to decode JWT token and get role
const getAdminRole = (): string | null => {
  if (typeof window === "undefined") return null
  
  // First try to get from localStorage
  const storedRole = localStorage.getItem("admin_role")
  if (storedRole) {
    return storedRole
  }
  
  // Fallback: decode JWT token
  const token = localStorage.getItem("admin_token")
  if (!token) return null
  
  try {
    // JWT token has 3 parts: header.payload.signature
    const parts = token.split(".")
    if (parts.length !== 3) return null
    
    // Decode the payload (base64)
    const payload = JSON.parse(atob(parts[1]))
    return payload.role || null
  } catch (error) {
    console.error("Error decoding token:", error)
    return null
  }
}

export function AppSidebar({ variant }: { variant?: "sidebar" | "floating" | "inset" }) {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Check if user is admin
    const role = getAdminRole()
    setIsAdmin(role === "admin")
    setIsLoading(false)
  }, [])

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("admin_token")
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        credentials: "include",
      })
      localStorage.removeItem("admin_token")
      localStorage.removeItem("admin_role")
      router.push("/admin/login")
    } catch (error) {
      console.error("Error logging out:", error)
      localStorage.removeItem("admin_token")
      localStorage.removeItem("admin_role")
      router.push("/admin/login")
    }
  }

  return (
    <Sidebar variant={variant}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#299470]">
            <span className="text-sm font-bold text-white">NM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Admin Panel</span>
            <span className="text-xs text-muted-foreground">Now Medical</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {!isLoading && isAdmin && (
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

