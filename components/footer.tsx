import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-[#A7D3C4] border-t border-[#299470]/20">
      <div className="container pt-16">
        <div className="flex flex-col md:flex-row gap-12 overflow-hidden justify-between">

          <div className="flex gap-7">
            <div className="mb-4">
              <Logo className="w-[150] " />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#303030] ">About & Brand</h3>
              <p className="text-base text-[#303030]   mb-2">Now Medical Clinic</p>
              <p className="text-base text-[#303030]  ">Open 7 Days • Until 11:00 PM<br/> Real Family Doctors | Walk-Ins Welcome</p>
              <div className="my-4">
                <p className="text-base text-[#303030]   mb-2">Address</p>
                <p className="text-base text-[#303030]  ">2520 23 St NE #19, Calgary, AB T2E 8L2</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-base text-[#303030]   mb-2">Contact us</p>
                  <a href="tel:+15873918188" className="text-base text-[#303030]   hover:text-[#299470] hover:underline flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    587-391-8188
                  </a>
                </div>

                <div>
                  <a href="tel:+15873877254" className="text-base text-[#303030]   hover:text-[#299470]  hover:underline flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    587-387-7254
                  </a>
                </div>

                <div>
                  <a
                    href="mailto:clinic@nowmedical.ca"
                    className="text-base text-[#303030]   hover:text-[#299470] hover:underline flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    clinic@nowmedical.ca
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-[#303030]   mb-2">Hours</p>
                <p className="text-base text-[#303030]  ">7:30 AM — 11:00 PM (Weekends &<br/> Holidays Included)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#303030] ">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/" className="text-[#303030] hover:text-[#299470]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/walk-in-clinic-calgary" className="text-[#303030] hover:text-[#299470]">
                  Walk-In Clinic Calgary
                </Link>
              </li>
              <li>
                <Link href="/urgent-care-calgary" className="text-[#303030] hover:text-[#299470]">
                  Urgent Care Calgary
                </Link>
              </li>
              <li>
                <Link href="/late-night-clinic" className="text-[#303030] hover:text-[#299470]">
                  Late-Night Clinic
                </Link>
              </li>
              <li>
                <Link href="/24-hour-walk-in-clinic-calgary" className="text-[#303030] hover:text-[#299470]">
                  24-Hour / Extended Hours
                </Link>
              </li>
              <li>
                <Link href="/walk-in-clinic-weekends" className="text-[#303030] hover:text-[#299470]">
                  Weekend & Holiday Clinic
                </Link>
              </li>
              <li>
                <Link href="/drivers-medical-calgary" className="text-[#303030] hover:text-[#299470]">
                  Driver's Medical Exams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#303030] ">Patient Resources</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/about" className="text-[#303030] hover:text-[#299470]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/best-walk-in-clinic-calgary" className="text-[#303030] hover:text-[#299470]">
                  Why Choose Us (4.8★)
                </Link>
              </li>
              <li>
                <Link href="/patient-experience" className="text-[#303030] hover:text-[#299470]">
                  Patient Experience
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-[#303030] hover:text-[#299470]">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#303030] hover:text-[#299470]">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#303030] hover:text-[#299470]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#303030] hover:text-[#299470]">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#303030] ">Reviews & Trust</h3>
            <ul className="space-y-2 text-base mb-6">
              <li>
                <Link href="/reviews" className="text-[#303030] hover:text-[#299470]">
                  Read Reviews
                </Link>
              </li>
            </ul>


          </div>
        </div>

        <div className="flex items-center gap-4 justify-end mt-[10px] ">
              <span className="text-base text-[#303030]  ">follow us:</span>
              <div className="flex items-center gap-[10px] ">
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <span className="sr-only">Pinterest</span>
                  <img src='/images/landing/map_footer.svg' alt="" />                  
                </a>
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <img src='/images/landing/fackbook_footer.svg' alt="" />                  
                </a>
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <img src='/images/landing/insta_footer.svg' alt="" />                  
                </a>
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <img src='/images/landing/youtube_footer.svg' alt="" />                  
                </a>
              </div>
            </div>
        <div className="mt-[9px] border-t border-[#83C1AC]">

          <div className="text-center py-[27px] ">
            <p className="text-sm font-medium text-[#6E6E6E]  ">Copyright. All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


