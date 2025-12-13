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
    <header className="sticky top-0 left-0 right-0 z-50 w-full border-0 bg-[#EAF4F1] backdrop-blur supports-[backdrop-filter]:bg-[#EAF4F1]/95 shadow-sm" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
      <div className="container flex h-16 sm:h-20 md:h-[81px] items-center justify-between px-4 sm:px-6 relative">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Logo className="w-[100px] sm:w-[120px] md:w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden text-[#242121] lg:flex items-center gap-1 xl:gap-2">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm xl:text-base text-[#242121] font-normal transition-colors hover:text-[#299470] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#299470] rounded-sm px-2 xl:px-3 py-2">
                Walk-In Clinic <ChevronDown className="h-3 w-3 xl:h-4 xl:w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[240px] text-[#242121] bg-white border-0">
              <DropdownMenuItem asChild>
                <Link href="/walk-in-clinic" className={pathname === '/walk-in-clinic' ? 'bg-[#299470]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                  Walk-In Clinic Calgary
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/urgent-care-calgary" className={pathname === '/urgent-care-calgary' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                  Urgent Care Calgary
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/late-night-clinic" className={pathname === '/late-night-clinic' ? 'bg-[#299470]/10 hover:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ' text-[#242121] hover:bg-[#f5f5f5]/10 foces:bg-[#f5f5f5]/10'}>
                  Late-Night Clinic
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/24-hour-walk-in-clinic-calgary" className={pathname === '/24-hour-walk-in-clinic-calgary' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                  24-Hour / Extended Hours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/walk-in-clinic-weekends" className={pathname === '/walk-in-clinic-weekends' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                  Weekend & Holiday Clinic
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  Near Major Hospitals
                </DropdownMenuSubTrigger> 
                <DropdownMenuSubContent className="min-w-[280px] text-[#242121] bg-white border-0">
                  <DropdownMenuItem asChild>
                    <Link href="/hospital-peter-lougheed" className={pathname === '/walk-in-clinicnear-peter-lougheed-hospital' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                      Near Peter Lougheed Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-foothills-hospital" className={pathname === '/walk-in-clinic-near-foothills-hospital' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                      Near Foothills Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-rockyview-hospital" className={pathname === '/walk-in-clinic-near-rockyview-hospital' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                      Near Rockyview Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-alberta-childrens-hospital" className={pathname === '/walk-in-clinic-near-alberta-childrens-hospital' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                      Near Alberta Children's Hospital
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-south-health-campus" className={pathname === '/walk-in-clinic-near-south-health-campus' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                      Near South Health Campus
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/walk-in-clinic-near-sheldon-Childrens-health-centre" className={pathname === '/walk-in-clinic-near-sheldon-Childrens-health-centre' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                      Near Sheldon Children's Health Centre
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/hospital-wait-times" className={pathname === '/hospital-wait-times' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                      Hospital Wait Times
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
            <DropdownMenuContent align="start" className="min-w-[260px] text-[#242121] bg-white border-0">
              <DropdownMenuItem asChild>
                <Link href="/family-doctors-accepting-new-patients" className={pathname === '/family-doctors-accepting-new-patients' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                  Family Doctors Accepting New Patients
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/female-family-doctor-calgary" className={pathname === '/female-family-doctor-calgary' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
                  Female Family Doctor Calgary
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/meet-our-doctors" className={pathname === '/meet-our-doctors' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 text-[#242121] font-normal text-[#242121]' : ''}>
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
            <DropdownMenuContent align="start" className="min-w-[220px] text-[#242121] bg-white border-0">
              <DropdownMenuItem asChild>
                <Link href="/services" className={pathname === '/services' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/10 hover:text-[#242121] text-[#242121] font-normal text-[#242121]' : ''}>
                  All Services
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/driver-medical-exam" className={pathname === '/driver-medical-exam' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/10 hover:text-[#242121] text-[#242121] font-normal text-[#242121] text-[#242121]' : ''}>
                  Driver's Medical Exams
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services#flu-shots" className={pathname === '/services#flu-shots' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/10 hover:text-[#242121] text-[#242121] font-normal text-[#242121] text-[#242121]' : ''}>Flu Shots & Vaccines</Link>
                </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <Link href="/services#prescriptions" className={pathname === '/services#prescriptions' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/10 hover:text-[#242121] text-[#242121] font-normal text-[#242121] text-[#242121]' : 'text-[#242121]'}>Prescription Renewals</Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <Link href="/services#forms" className={pathname === '/services#forms' ? 'bg-[#299470]/10 focus:bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/10 hover:text-[#242121] text-[#242121] font-normal text-[#242121] text-[#242121]' : 'text-[#242121]'}>Medical Forms / Sick Notes</Link> 
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
          <Button asChild className="hidden lg:flex w-full text-sm xl:text-lg xl:w-[190px] bg-[#299470] hover:bg-[#2D7B6F] text-white px-3 xl:px-4">
            <Link href="tel:587-391-8188" className="text-center "  >
              <img src="/icons/btn_phone-outline-icon.svg" alt="" className="w-5 h-5" />

              Call 587-391-8188

            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-12 w-12 sm:h-10 sm:w-10 text-[#242121]">
                <img src="/icons/bars-menu.svg" alt="" className="w-10 h-10" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4 sm:p-6 flex flex-col overflow-hidden bg-white">
              <nav className="flex flex-col gap-4 overflow-y-auto flex-1 pr-2 -mr-2">
                <div className="border-b pb-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Walk-In Clinic</p>
                  <Link href="/walk-in-clinic" className={`block py-1 text-sm text-[#299470] ${pathname === '/walk-in-clinic' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Walk-In Clinic Calgary
                  </Link>
                  <Link href="/urgent-care-calgary" className={`block py-1 text-sm text-[#299470] ${pathname === '/urgent-care-calgary' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Urgent Care
                  </Link>
                  <Link href="/late-night-clinic" className={`block py-1 text-sm text-[#299470] ${pathname === '/late-night-clinic' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Late-Night Clinic
                  </Link>
                  <Link href="/24-hour-walk-in-clinic-calgary" className={`block py-1 text-sm text-[#299470] ${pathname === '/24-hour-walk-in-clinic-calgary' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    24-Hour / Extended Hours
                  </Link>
                  <Link href="/walk-in-clinic-weekends" className={`block py-1 text-sm text-[#299470] ${pathname === '/walk-in-clinic-weekends' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Weekend Clinic
                  </Link>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Near Major Hospitals</p>
                  <Link href="/hospital-peter-lougheed" className={`block py-1 text-sm text-[#299470] ${pathname === '/hospital-peter-lougheed' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Near Peter Lougheed Hospital
                  </Link>
                  <Link href="/walk-in-clinic-near-foothills-hospital" className={`block py-1 text-sm text-[#299470] ${pathname === '/walk-in-clinic-near-foothills-hospital' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Near Foothills Hospital
                  </Link>
                  <Link href="/walk-in-clinic-near-rockyview-hospital" className={`block py-1 text-sm text-[#299470] ${pathname === '/walk-in-clinic-near-rockyview-hospital' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Near Rockyview Hospital
                  </Link>
                  <Link href="/walk-in-clinic-near-alberta-childrens-hospital" className={`block py-1 text-sm text-[#299470] ${pathname === '/walk-in-clinic-near-alberta-childrens-hospital' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Near Alberta Children's Hospital
                  </Link>
                  <Link href="/walk-in-clinic-near-south-health-campus" className={`block py-1 text-sm text-[#299470] ${pathname === '/walk-in-clinic-near-south-health-campus' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Near South Health Campus
                  </Link>
                  <Link href="/walk-in-clinic-near-sheldon-Childrens-health-centre" className={`block py-1 text-sm text-[#299470] ${pathname === '/walk-in-clinic-near-sheldon-Childrens-health-centre' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Near Sheldon Children's Health Centre
                  </Link>
                  <Link href="/hospital-wait-times" className={`block py-1 text-sm text-[#299470] ${pathname === '/hospital-wait-times' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Hospital Wait Times
                  </Link>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Family Doctor</p>
                  <Link href="/family-doctors-accepting-new-patients" className={`block py-1 text-sm text-[#299470] ${pathname === '/family-doctors-accepting-new-patients' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Accepting New Patients
                  </Link>
                  <Link href="/female-family-doctor-calgary" className={`block py-1 text-sm text-[#299470] ${pathname === '/female-family-doctor-calgary' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Female Family Doctor
                  </Link>
                  <Link href="/meet-our-doctors" className={`block py-1 text-sm text-[#299470] ${pathname === '/meet-our-doctors' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Meet Our Doctors
                  </Link>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                  <Link href="/services" className={`block py-1 text-sm text-[#299470] ${pathname === '/services' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    All Services
                  </Link>
                  <Link href="/driver-medical-exam" className={`block py-1 text-sm text-[#299470] ${pathname === '/driver-medical-exam' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Driver's Medical Exams
                  </Link>
                  <Link href="/services#flu-shots" className={`block py-1 text-sm text-[#299470] ${pathname === '/services#flu-shots' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Flu Shots & Vaccines
                  </Link>
                  <Link href="/services#prescriptions" className={`block py-1 text-sm text-[#299470] ${pathname === '/services#prescriptions' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Prescription Renewals
                  </Link>
                  <Link href="/services#forms" className={`block py-1 text-sm text-[#299470] ${pathname === '/services#forms' ? ' font-semibold' : ''}`} onClick={() => setIsOpen(false)}>
                    Medical Forms / Sick Notes
                  </Link>
                </div>
                <Link href="/reviews" className={`text-sm font-medium text-[#299470] ${pathname === '/reviews' ? ' font-bold' : ''}`} onClick={() => setIsOpen(false)}>
                  Reviews
                </Link>
                <Link href="/faq" className={`text-sm font-medium text-[#299470] ${pathname === '/faq' ? ' font-bold' : ''}`} onClick={() => setIsOpen(false)}>
                  FAQ
                </Link> 
                <Link href="/contact" className="block w-full mt-2" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#299470] hover:bg-[#2D7B6F] text-white">
                    <Link href="tel:587-391-8188" className=" flex gap-2 items-center ">
                    <img src="/icons/btn_phone-outline-icon.svg" alt="" className="w-5 h-5" />

                      Call 587-391-8188
                    </Link>
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
