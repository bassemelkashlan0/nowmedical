import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-[#A7D3C4] border-t border-[#299470]/20">
      <div className="container pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6">
        <div className=" flex flex-col lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6  lg:gap-12">

          {/* About & Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-7">
              <div className="mb-4 sm:mb-0 flex-shrink-0">
                <Logo className="w-[120px] sm:w-[150px]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#303030]">About & Brand</h3>
                <p className="text-sm sm:text-base text-[#303030] mb-2">Now Medical Clinic</p>
                <p className="text-sm sm:text-base text-[#303030] mb-2 sm:mb-0">Open 7 Days • Until 11:00 PM<br/> Real Family Doctors | Walk-Ins Welcome</p>
                <div className="my-4">
                  <p className="text-sm sm:text-base text-[#303030] mb-2">Address</p>
                  <p className="text-sm sm:text-base text-[#303030]">2520 23 St NE #19, Calgary, AB T2E 8L2</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-sm sm:text-base text-[#303030] mb-2">Contact us</p>
                    <a href="tel:+15873918188" className="text-sm sm:text-base text-[#303030] hover:text-[#299470] hover:underline flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span className="break-all">587-391-8188</span>
                    </a>
                  </div>

                  <div>
                    <a href="tel:+15873877254" className="text-sm sm:text-base text-[#303030] hover:text-[#299470] hover:underline flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span className="break-all">587-387-7254</span>
                    </a>
                  </div>

                  <div>
                    <a
                      href="mailto:clinic@nowmedical.ca"
                      className="text-sm sm:text-base text-[#303030] hover:text-[#299470] hover:underline flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <span className="break-all">clinic@nowmedical.ca</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm sm:text-base text-[#303030] mb-2">Hours</p>
                  <p className="text-sm sm:text-base text-[#303030]">7:30 AM — 11:00 PM (Weekends &<br/> Holidays Included)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#303030]">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/walk-in-clinic-calgary" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Walk-In Clinic Calgary
                </Link>
              </li>
              <li>
                <Link href="/urgent-care-calgary" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Urgent Care Calgary
                </Link>
              </li>
              <li>
                <Link href="/late-night-clinic" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Late-Night Clinic
                </Link>
              </li>
              <li>
                <Link href="/24-hour-walk-in-clinic-calgary" className="text-[#303030] hover:text-[#299470] transition-colors">
                  24-Hour / Extended Hours
                </Link>
              </li>
              <li>
                <Link href="/walk-in-clinic-weekends" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Weekend & Holiday Clinic
                </Link>
              </li>
              <li>
                <Link href="/drivers-medical-exams-in-calgary" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Driver's Medical Exams
                </Link>
              </li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#303030]">Patient Resources</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/about" className="text-[#303030] hover:text-[#299470] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/walk-in-clinic-calgary" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Why Choose Us (4.8★)
                </Link>
              </li>
              <li>
                <Link href="/patient-experience" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Patient Experience
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/all-services" className="text-[#303030] hover:text-[#299470] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#303030] hover:text-[#299470] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Reviews & Trust */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#303030]">Reviews & Trust</h3>
            <ul className="space-y-2 text-sm sm:text-base mb-4 sm:mb-6">
              <li>
                <Link href="/reviews" className="text-[#303030] hover:text-[#299470] transition-colors">
                  Read Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
          <span className="text-sm sm:text-base text-[#303030]">follow us:</span>
          <div className="flex items-center gap-2 sm:gap-[10px]">
            <a href="#" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="Pinterest">
              <span className="sr-only">Pinterest</span>
              <img src='/images/landing/map_footer.svg' alt="Pinterest" className="w-6 h-6 sm:w-auto sm:h-auto" />
            </a>
            <a href="#" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="Facebook">
              <img src='/images/landing/fackbook_footer.svg' alt="Facebook" className="w-6 h-6 sm:w-auto sm:h-auto" />
            </a>
            <a href="#" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="Instagram">
              <img src='/images/landing/insta_footer.svg' alt="Instagram" className="w-6 h-6 sm:w-auto sm:h-auto" />
            </a>
            <a href="#" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="YouTube">
              <img src='/images/landing/youtube_footer.svg' alt="YouTube" className="w-6 h-6 sm:w-auto sm:h-auto" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 sm:mt-6 md:mt-9 border-t border-[#83C1AC]">
          <div className="text-center py-4 sm:py-6 md:py-[27px]">
            <p className="text-xs sm:text-sm font-medium text-[#6E6E6E]">Copyright. All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


