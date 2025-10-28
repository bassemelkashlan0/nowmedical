import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-[#C8E6E0] border-t border-[#299470]/20">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo className="h-8 w-auto" />
            </div>
            <h3 className="font-bold text-sm mb-2">About & Brand</h3>
            <p className="text-sm text-muted-foreground mb-2">Now Medical Clinic</p>
            <p className="text-sm text-muted-foreground mb-2">Open 7 Days • Until 11:00 PM</p>
            <p className="text-sm text-muted-foreground mb-2">Real Family Doctors | Walk-Ins Welcome</p>
            <div className="mt-4">
              <p className="text-sm font-semibold mb-1">Address</p>
              <p className="text-sm text-muted-foreground">2520 23 St NE #19, Calgary, AB T2E 8L2</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#299470]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/walk-in" className="text-muted-foreground hover:text-[#299470]">
                  Walk-In Clinic Calgary
                </Link>
              </li>
              <li>
                <Link href="/urgent-care" className="text-muted-foreground hover:text-[#299470]">
                  Urgent Care Calgary
                </Link>
              </li>
              <li>
                <Link href="/family-doctor" className="text-muted-foreground hover:text-[#299470]">
                  24-Hour Walk-In Clinic
                </Link>
              </li>
              <li>
                <Link href="/weekend" className="text-muted-foreground hover:text-[#299470]">
                  Weekend Walk-In Clinic
                </Link>
              </li>
              <li>
                <Link href="/family-doctors" className="text-muted-foreground hover:text-[#299470]">
                  Family Doctors Accepting New Patients
                </Link>
              </li>
              <li>
                <Link href="/female-doctor" className="text-muted-foreground hover:text-[#299470]">
                  Female Family Doctor Calgary
                </Link>
              </li>
              <li>
                <Link href="/drivers-medical" className="text-muted-foreground hover:text-[#299470]">
                  Driver's Medical Calgary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Patient Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-[#299470]">
                  Meet Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/patients" className="text-muted-foreground hover:text-[#299470]">
                  Patient Experience
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-[#299470]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-[#299470]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#299470]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#299470]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-[#299470]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-[#299470]">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Reviews & Trust</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-[#299470]">
                  Read Reviews
                </Link>
              </li>
            </ul>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">Contact us</p>
                <a href="tel:+15873918188" className="text-sm text-[#299470] hover:underline flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  587-391-8188
                </a>
              </div>

              <div>
                <a href="tel:+15873877254" className="text-sm text-[#299470] hover:underline flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  587-387-7254
                </a>
              </div>

              <div>
                <a
                  href="mailto:clinic@nowmedical.ca"
                  className="text-sm text-[#299470] hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  clinic@nowmedical.ca
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Hours</p>
              <p className="text-sm text-muted-foreground">7:30 AM — 11:00 PM (Weekends & Holidays Included)</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#299470]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">Copyright. All right reserved</p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">follow us:</span>
              <div className="flex items-center gap-3">
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#299470] hover:text-[#2D7B6F]">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
