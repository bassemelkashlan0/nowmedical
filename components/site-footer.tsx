import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-accent/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About & Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
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
            <h3 className="mb-2 font-semibold">About & Brand</h3>
            <p className="mb-2 text-sm text-muted-foreground">Now Medical Clinic</p>
            <p className="mb-2 text-sm text-muted-foreground">Open 7 Days • Until 11:00 PM</p>
            <p className="mb-2 text-sm text-muted-foreground">Real Family Doctors | Walk-Ins Welcome</p>
            <div className="mt-4">
              <p className="mb-1 text-sm font-medium">Address</p>
              <p className="text-sm text-muted-foreground">2520 23 St NE #19, Calgary, AB T2E 8L2</p>
            </div>
            <div className="mt-4">
              <p className="mb-1 text-sm font-medium">Contact us</p>
              <p className="text-sm text-muted-foreground">📞 587-391-8188</p>
              <p className="text-sm text-muted-foreground">📠 587-387-7254</p>
              <p className="text-sm text-muted-foreground">✉️ clinic@nowmedical.ca</p>
            </div>
            <div className="mt-4">
              <p className="mb-1 text-sm font-medium">Hours</p>
              <p className="text-sm text-muted-foreground">7:30 AM – 11:00 PM (Weekends & Holidays Included)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/walk-in-clinic"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Walk-In Clinic Calgary
                </Link>
              </li>
              <li>
                <Link
                  href="/urgent-care-calgary"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Urgent Care Calgary
                </Link>
              </li>
              <li>
                <Link href="/late-night-clinic" className="text-muted-foreground transition-colors hover:text-primary">
                  24-Hour Walk-In Clinic
                </Link>
              </li>
              <li>
                <Link
                  href="/walk-in-clinicweekends"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Weekend Walk-In Clinic
                </Link>
              </li>
              <li>
                <Link
                  href="/family-doctors-accepting-new-patients"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Family Doctors Accepting New Patients
                </Link>
              </li>
              <li>
                <Link
                  href="/female-family-doctor-calgary"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Female Family Doctor Calgary
                </Link>
              </li>
              <li>
                <Link
                  href="/drivers-medical-calgary"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Driver's Medical Calgary
                </Link>
              </li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Patient Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/meet-our-doctors" className="text-muted-foreground transition-colors hover:text-primary">
                  Meet Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/patient-experience" className="text-muted-foreground transition-colors hover:text-primary">
                  Patient Experience
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Reviews & Trust */}
          <div>
            <h3 className="mb-4 font-semibold">Reviews & Trust</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/best-walk-in-clinic-calgary"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Read Reviews
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">follow us</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
