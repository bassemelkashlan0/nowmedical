"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Loader2 } from "lucide-react"
import { API_BASE_URL } from "@/lib/api-config"

type User = {
  id: string
  username: string
  createdAt: string
  updatedAt: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [formLoading, setFormLoading] = useState(false)
  const [error, setError] = useState("")
  const [accessDenied, setAccessDenied] = useState(false)
  const router = useRouter()

  const getAuthHeaders = () => {
    const token = localStorage.getItem("admin_token")
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    }
  }

  useEffect(() => {
    // Check if user is authenticated before fetching
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
      return
    }
    fetchUsers()
  }, [router])

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/users`, {
        headers: getAuthHeaders(),
        credentials: "include",
      })
      
      if (response.status === 401) {
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
        return
      }

      // Handle 403 Forbidden - user is authenticated but not admin
      if (response.status === 403) {
        localStorage.removeItem("admin_token")
        setError("Access denied. Admin role required.")
        setAccessDenied(true)
        setTimeout(() => {
          router.push("/admin/dashboard")
        }, 3000)
        setLoading(false)
        return
      }

      if (!response.ok) {
        throw new Error("Failed to fetch users")
      }

      const data = await response.json()
      if (data.success) {
        setUsers(data.users || [])
      }
    } catch (error) {
      console.error("Error fetching users:", error)
      setError("Failed to load users")
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = async () => {
    if (!formData.username || !formData.password) {
      setError("Username and password are required")
      return
    }

    setFormLoading(true)
    setError("")

    try {
      const response = await fetch(`${API_BASE_URL}/auth/users`, {
        method: "POST",
        headers: getAuthHeaders(),
        credentials: "include",
        body: JSON.stringify(formData),
      })

      if (response.status === 401) {
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
        return
      }

      // Handle 403 Forbidden - user is authenticated but not admin
      if (response.status === 403) {
        setError("Access denied. Admin role required.")
        localStorage.removeItem("admin_token")
        setTimeout(() => {
          router.push("/admin/dashboard")
        }, 2000)
        return
      }

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Failed to create user")
        return
      }

      if (data.success) {
        setIsAddDialogOpen(false)
        setFormData({ username: "", password: "" })
        fetchUsers()
      }
    } catch (error: any) {
      setError(error.message || "Failed to create user")
    } finally {
      setFormLoading(false)
    }
  }

  const handleEditUser = async () => {
    if (!selectedUser) return

    if (!formData.username) {
      setError("Username is required")
      return
    }

    setFormLoading(true)
    setError("")

    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/${selectedUser.id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        credentials: "include",
        body: JSON.stringify({
          username: formData.username,
          ...(formData.password && { password: formData.password }),
        }),
      })

      if (response.status === 401) {
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
        return
      }

      // Handle 403 Forbidden - user is authenticated but not admin
      if (response.status === 403) {
        setError("Access denied. Admin role required.")
        localStorage.removeItem("admin_token")
        setTimeout(() => {
          router.push("/admin/dashboard")
        }, 2000)
        return
      }

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Failed to update user")
        return
      }

      if (data.success) {
        setIsEditDialogOpen(false)
        setSelectedUser(null)
        setFormData({ username: "", password: "" })
        fetchUsers()
      }
    } catch (error: any) {
      setError(error.message || "Failed to update user")
    } finally {
      setFormLoading(false)
    }
  }

  const handleDeleteUser = async () => {
    if (!selectedUser) return

    setFormLoading(true)
    setError("")

    try {
      const response = await fetch(`${API_BASE_URL}/auth/users/${selectedUser.id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
        credentials: "include",
      })

      if (response.status === 401) {
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
        return
      }

      // Handle 403 Forbidden - user is authenticated but not admin
      if (response.status === 403) {
        setError("Access denied. Admin role required.")
        localStorage.removeItem("admin_token")
        setTimeout(() => {
          router.push("/admin/dashboard")
        }, 2000)
        return
      }

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Failed to delete user")
        return
      }

      if (data.success) {
        setIsDeleteDialogOpen(false)
        setSelectedUser(null)
        fetchUsers()
      }
    } catch (error: any) {
      setError(error.message || "Failed to delete user")
    } finally {
      setFormLoading(false)
    }
  }

  const openEditDialog = (user: User) => {
    setSelectedUser(user)
    setFormData({ username: user.username, password: "" })
    setError("")
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = (user: User) => {
    setSelectedUser(user)
    setError("")
    setIsDeleteDialogOpen(true)
  }

  const openAddDialog = () => {
    setFormData({ username: "", password: "" })
    setError("")
    setIsAddDialogOpen(true)
  }

  if (loading) {
    return (
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <Header />
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
              <p>Loading...</p>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  }

  if (accessDenied) {
    return (
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <Header />
          <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-red-600">Access Denied</CardTitle>
                <CardDescription>
                  You do not have permission to access this page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
                  <p className="font-semibold mb-2">Admin role required</p>
                  <p className="text-sm">
                    Only users with admin privileges can access the Users Management page.
                    Redirecting to dashboard...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Users Management</CardTitle>
                    <CardDescription>
                      Manage admin users - add, edit, or delete users
                    </CardDescription>
                  </div>
                  <Button onClick={openAddDialog}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
                    {error}
                  </div>
                )}
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Updated At</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                            No users found
                          </TableCell>
                        </TableRow>
                      ) : (
                        users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.username}</TableCell>
                            <TableCell>
                              {new Date(user.createdAt).toLocaleString()}
                            </TableCell>
                            <TableCell>
                              {new Date(user.updatedAt).toLocaleString()}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => openEditDialog(user)}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => openDeleteDialog(user)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>

      {/* Add User Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Create a new admin user account
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="add-username">Username</Label>
              <Input
                id="add-username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="add-password">Password</Label>
              <Input
                id="add-password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter password"
              />
            </div>
            {error && (
              <div className="text-sm text-red-600">{error}</div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsAddDialogOpen(false)
                setError("")
              }}
              disabled={formLoading}
            >
              Cancel
            </Button>
            <Button onClick={handleAddUser} disabled={formLoading}>
              {formLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create User"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user information. Leave password empty to keep current password.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-username">Username</Label>
              <Input
                id="edit-username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-password">New Password (optional)</Label>
              <Input
                id="edit-password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Leave empty to keep current password"
              />
            </div>
            {error && (
              <div className="text-sm text-red-600">{error}</div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsEditDialogOpen(false)
                setSelectedUser(null)
                setError("")
              }}
              disabled={formLoading}
            >
              Cancel
            </Button>
            <Button onClick={handleEditUser} disabled={formLoading}>
              {formLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update User"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete User Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user{" "}
              <strong>{selectedUser?.username}</strong>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          {error && (
            <div className="text-sm text-red-600 p-3 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel disabled={formLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteUser}
              disabled={formLoading}
              className="bg-red-600 hover:bg-red-700"
            >
              {formLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  )
}

