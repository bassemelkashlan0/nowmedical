"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { Logo } from "@/components/logo"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent 
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#EAF4F1] backdrop-blur supports-[backdrop-filter]:bg-[#EAF4F1]">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-3 py-2">
                Walk-In Clinic <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[220px]">
              <DropdownMenuItem asChild>
                <Link href="/walk-in">Walk-In Clinic Calgary</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/urgent-care">Urgent Care Calgary</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/late-night-clinic">24-Hour / Open Late Clinic</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/weekend-holiday">Late-Night Clinic</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/weekend-holiday">Weekend & Holiday Clinic</Link>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  Near Major Hospitals
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="min-w-[220px]">
                  <DropdownMenuItem asChild>
                    <Link href="/near-hospital/peter-lougheed">Peter Lougheed Hospital</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/near-hospital/foothills">Foothills Hospital</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/near-hospital/rockyview">Rockyview Hospital</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/near-hospital/alberta-childrens">Alberta Children's Hospital</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/near-hospital/south-health">South Health Campus</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/near-hospital/sheldon-chumir">Sheldon M. Chumir Health Centre</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-3 py-2">
                Family Doctor <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[260px]">
              <DropdownMenuItem asChild>
                <Link href="/family-doctors">Family Doctors Accepting New Patients</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/doctors">Female Family Doctor Calgary</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/doctors">Meet Our Doctors</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-3 py-2">
                Services <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/services">All Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services#flu-shots">Flu Shots</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services#prescriptions">Prescription Renewals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services#forms">Medical Forms / Sick Notes</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/reviews" className="text-sm font-medium px-3 py-2 transition-colors hover:text-[#299470]">
            Reviews
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:flex bg-[#299470] hover:bg-[#2D7B6F] text-white">
            <Link href="/contact">
              Contact Us
              <ChevronDown className="ml-1 h-4 w-4" />
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
                <Link href="/walk-in" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Walk-In Clinic
                </Link>
                <Link href="/family-doctors" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Family Doctor
                </Link>
                <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/reviews" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
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
