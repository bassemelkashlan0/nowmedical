"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full border-b bg-[#EAF4F1] backdrop-blur supports-[backdrop-filter]:bg-[#EAF4F1]/95 shadow-sm" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
      <div className="container flex h-16 sm:h-20 md:h-[81px] items-center justify-between px-4 sm:px-6 relative">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Logo className="w-[100px] sm:w-[120px] md:w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 xl:gap-2">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm xl:text-base text-[#242121] font-normal transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-2 xl:px-3 py-2">
                Walk-In Clinic <ChevronDown className="h-3 w-3 xl:h-4 xl:w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[240px]">
              <DropdownMenuItem asChild>
                <Link href="/walk-in-clinic-calgary" className={pathname === '/walk-in-clinic-calgary' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Walk-In Clinic Calgary
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/urgent-care-calgary" className={pathname === '/urgent-care-calgary' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Urgent Care Calgary
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/late-night-clinic" className={pathname === '/late-night-clinic' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Late-Night Clinic
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/24-hour-walk-in-clinic-calgary" className={pathname === '/24-hour-walk-in-clinic-calgary' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  24-Hour / Extended Hours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/walk-in-clinic-weekends" className={pathname === '/walk-in-clinic-weekends' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Weekend & Holiday Clinic
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  Near Major Hospitals
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="min-w-[280px]">
                  <DropdownMenuItem asChild>
                    <Link href="/hospital-peter-lougheed" className={pathname === '/walk-in-clinic-near-peter-lougheed-hospital' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                      Near Peter Lougheed Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-foothills-hospital" className={pathname === '/walk-in-clinic-near-foothills-hospital' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                      Near Foothills Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-rockyview-hospital" className={pathname === '/walk-in-clinic-near-rockyview-hospital' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                      Near Rockyview Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-alberta-childrens-hospital" className={pathname === '/walk-in-clinic-near-alberta-childrens-hospital' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                      Near Alberta Children's Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-south-health-campus" className={pathname === '/walk-in-clinic-near-south-health-campus' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                      Near South Health Campus
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-sheldon-m-chumir-health-centre" className={pathname === '/walk-in-clinic-near-sheldon-m-chumir-health-centre' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                      Near Sheldon M. Chumir Centre
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm xl:text-base text-[#242121] font-normal transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-2 xl:px-3 py-2">
                Family Doctor <ChevronDown className="h-3 w-3 xl:h-4 xl:w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[260px]">
              <DropdownMenuItem asChild>
                <Link href="/family-doctors-accepting-new-patients" className={pathname === '/family-doctors-accepting-new-patients' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Family Doctors Accepting New Patients
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/female-family-doctor-calgary" className={pathname === '/female-family-doctor-calgary' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Female Family Doctor Calgary
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/meet-our-doctors" className={pathname === '/meet-our-doctors' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Meet Our Doctors
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm xl:text-base text-[#242121] font-normal transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-2 xl:px-3 py-2">
                Services <ChevronDown className="h-3 w-3 xl:h-4 xl:w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[220px]">
              <DropdownMenuItem asChild>
                <Link href="/all-services" className={pathname === '/all-services' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  All Services
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/drivers-medical-exams-in-calgary" className={pathname === '/drivers-medical-exams-in-calgary' ? 'bg-[#299470]/10 text-[#242121] font-normal' : ''}>
                  Driver's Medical Exams
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/all-services#flu-shots">Flu Shots & Vaccines</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/all-services#prescriptions">Prescription Renewals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/all-services#forms">Medical Forms / Sick Notes</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="flex items-center gap-1 text-sm xl:text-base text-[#242121] font-normal transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-2 xl:px-3 py-2">
            <Link href='/reviews' >
              Reviews
            </Link>
          </button>

        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild className="hidden md:flex w-full text-sm xl:text-lg xl:w-[173px] bg-[#299470] hover:bg-[#2D7B6F] text-white px-3 xl:px-4">
            <Link href="/contact" >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 !h-4 !w-4 xl:!h-[20px] xl:!w-[20px] flex-shrink-0 block text-white"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4 sm:p-6">
              <nav className="flex flex-col gap-4">
                <div className="border-b pb-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Walk-In Clinic</p>
                  <Link href="/walk-in-clinic-calgary" className={`block py-1 text-sm ${pathname === '/walk-in-clinic-calgary' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Walk-In Clinic Calgary
                  </Link>
                  <Link href="/urgent-care-calgary" className={`block py-1 text-sm ${pathname === '/urgent-care-calgary' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Urgent Care
                  </Link>
                  <Link href="/late-night-clinic" className={`block py-1 text-sm ${pathname === '/late-night-clinic' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Late-Night Clinic
                  </Link>
                  <Link href="/walk-in-clinic-weekends" className={`block py-1 text-sm ${pathname === '/walk-in-clinic-weekends' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Weekend Clinic
                  </Link>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Family Doctor</p>
                  <Link href="/family-doctors-accepting-new-patients" className={`block py-1 text-sm ${pathname === '/family-doctors-accepting-new-patients' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Accepting New Patients
                  </Link>
                  <Link href="/female-family-doctor-calgary" className={`block py-1 text-sm ${pathname === '/female-family-doctor-calgary' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Female Family Doctor
                  </Link>
                  <Link href="/meet-our-doctors" className={`block py-1 text-sm ${pathname === '/meet-our-doctors' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Meet Our Doctors
                  </Link>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                  <Link href="/all-services" className={`block py-1 text-sm ${pathname === '/services' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    All Services
                  </Link>
                  <Link href="/drivers-medical-calgary" className={`block py-1 text-sm ${pathname === '/drivers-medical-calgary' ? 'text-[#299470] font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Driver's Medical
                  </Link>
                </div>
                <Link href="/best-walk-in-clinic-calgary" className={`text-sm font-medium ${pathname === '/best-walk-in-clinic-calgary' ? 'text-[#299470] font-bold' : ''}`} onClick={() => setIsOpen(false)}>
                  Why Choose Us
                </Link>
                <Link href="/reviews" className={`text-sm font-medium ${pathname === '/reviews' ? 'text-[#299470] font-bold' : ''}`} onClick={() => setIsOpen(false)}>
                  Reviews
                </Link>
                <Link href="/faq" className={`text-sm font-medium ${pathname === '/faq' ? 'text-[#299470] font-bold' : ''}`} onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
                <Link href="/contact" className="block w-full mt-2" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#299470] hover:bg-[#2D7B6F] text-white">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
