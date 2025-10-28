"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-primary">Now</span>
              <span className="text-xs text-muted-foreground">MEDICAL CLINIC</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Walk-In Clinic <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/walk-in-clinic-calgary">Walk-In Clinic Calgary</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/urgent-care-calgary">Urgent Care Calgary</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/late-night-clinic">Late-Night Clinic</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/walk-in-clinic-weekends">Weekend & Holiday</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Family Doctor <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/family-doctors-accepting-new-patients">Accepting New Patients</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/female-family-doctor-calgary">Female Family Doctor</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/meet-our-doctors">Meet Our Doctors</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/services">All Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/drivers-medical-calgary">Driver's Medical</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/patient-experience" className="text-sm font-medium transition-colors hover:text-primary">
            Reviews
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:flex">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/walk-in-clinic-calgary" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Walk-In Clinic
                </Link>
                <Link
                  href="/family-doctors-accepting-new-patients"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Family Doctor
                </Link>
                <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/patient-experience" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Reviews
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
