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
                <Link href="/" className="flex items-center gap-2">
                  <Logo className="w-[120px] sm:w-[150px]" />
                </Link>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#303030]">About & Brand</h3>
                <p className="text-sm sm:text-base text-[#303030] mb-2">Now Medical Clinic</p>
                <p className="text-sm sm:text-base text-[#303030] mb-2 sm:mb-0">Open 7 Days • Until 11:00 PM<br /> Real Family Doctors | Walk-Ins Welcome</p>
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
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M429.684,163.714V78.711L350.958,0h-4.916h-179.11v148.673c-12.768-10.612-29.068-17.136-46.961-17.136   h-16.586c-20.396-0.015-38.776,8.324-51.953,21.734C38.239,166.674,30.162,185.2,30.17,205.55v221.216   c0.008,47.015,38.219,85.218,85.235,85.234h281.192c47.015-0.016,85.219-38.219,85.234-85.234V242.262   C481.816,206.972,460.298,176.651,429.684,163.714z M190.676,23.743h150.451l1.213,1.213V87.8h62.859l0.742,0.742v69.027   c-3.068-0.34-6.183-0.541-9.344-0.541H190.676V23.743z M56.278,205.55c0-26.016,21.092-47.108,47.107-47.108h16.586   c26.016,0,47.108,21.092,47.108,47.108v119.898c0,26.015-21.092,47.108-47.108,47.108h-16.586   c-26.016,0-47.107-21.093-47.107-47.108V205.55z M454.926,426.766c0,32.214-26.116,58.33-58.33,58.33H115.404   c-32.214,0-58.33-26.116-58.33-58.33v-47.818c12.436,10.782,28.604,17.351,46.311,17.351h16.586   c39.07,0,70.851-31.782,70.851-70.851v-19.376v-77.165v-44.975h205.774c32.214,0,58.33,26.116,58.33,58.331V426.766z"/>
                        <path d="M236.98,386.908c-8.494,0-15.381,6.894-15.381,15.389c0,8.494,6.887,15.38,15.381,15.38   c8.494,0,15.388-6.886,15.388-15.38C252.367,393.802,245.473,386.908,236.98,386.908z"/>
                        <path d="M316.131,386.908c-8.495,0-15.381,6.894-15.381,15.389c0,8.494,6.886,15.38,15.381,15.38   c8.494,0,15.388-6.886,15.388-15.38C331.519,393.802,324.625,386.908,316.131,386.908z"/>
                        <path d="M395.283,386.908c-8.494,0-15.381,6.894-15.381,15.389c0,8.494,6.886,15.38,15.381,15.38   c8.502,0,15.388-6.886,15.388-15.38C410.671,393.802,403.784,386.908,395.283,386.908z"/>
                        <path d="M236.98,336.771c-8.494,0-15.381,6.894-15.381,15.388c0,8.494,6.887,15.381,15.381,15.381   c8.494,0,15.388-6.887,15.388-15.381C252.367,343.665,245.473,336.771,236.98,336.771z"/>
                        <path d="M316.131,336.771c-8.495,0-15.381,6.894-15.381,15.388c0,8.494,6.886,15.381,15.381,15.381   c8.494,0,15.388-6.887,15.388-15.381C331.519,343.665,324.625,336.771,316.131,336.771z"/>
                        <path d="M395.283,336.771c-8.494,0-15.381,6.894-15.381,15.388c0,8.494,6.886,15.381,15.381,15.381   c8.502,0,15.388-6.887,15.388-15.381C410.671,343.665,403.784,336.771,395.283,336.771z"/>
                        <path d="M236.98,286.649c-8.494,0-15.381,6.894-15.381,15.388s6.887,15.381,15.381,15.381   c8.494,0,15.388-6.887,15.388-15.381S245.473,286.649,236.98,286.649z"/>
                        <path d="M316.131,286.649c-8.495,0-15.381,6.894-15.381,15.388s6.886,15.381,15.381,15.381   c8.494,0,15.388-6.887,15.388-15.381S324.625,286.649,316.131,286.649z"/>
                        <path d="M395.283,286.649c-8.494,0-15.381,6.894-15.381,15.388s6.886,15.381,15.381,15.381   c8.502,0,15.388-6.887,15.388-15.381S403.784,286.649,395.283,286.649z"/>
                        <path d="M396.055,231.696H237.768c-8.741,0-15.828,7.088-15.828,15.829c0,8.742,7.087,15.829,15.828,15.829h158.288   c8.742,0,15.829-7.087,15.829-15.829C411.884,238.784,404.797,231.696,396.055,231.696z"/>
                      </svg>
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
                  <p className="text-sm sm:text-base text-[#303030]">7:30 AM — 11:00 PM (Weekends &<br /> Holidays Included)</p>
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
                <Link href="/walk-in-clinic" className="text-[#303030] hover:text-[#299470] transition-colors">
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
                <Link href="/driver-medical-exam" className="text-[#303030] hover:text-[#299470] transition-colors">
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
                <Link href="/walk-in-clinic" className="text-[#303030] hover:text-[#299470] transition-colors">
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
            <a href="https://www.facebook.com/nowmedical.ca" target="_blank" rel="noopener noreferrer" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="Facebook">
              <img src='/images/landing/fackbook_footer.svg' alt="Facebook" className="w-6 h-6 sm:w-auto sm:h-auto" />
            </a>
            <a href="https://www.tiktok.com/@nowmedicalcalgary" target="_blank" rel="noopener noreferrer" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="TikTok">
              <img src='/images/landing/tiktok_footer.svg' alt="TikTok" className="w-6 h-6 sm:w-auto sm:h-auto" />
            </a>
            <a href="https://www.youtube.com/@NowMedicalClinic" target="_blank" rel="noopener noreferrer" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="YouTube">
              <img src='/images/landing/youtube_footer.svg' alt="YouTube" className="w-6 h-6 sm:w-auto sm:h-auto" />
            </a>
            <a href="https://www.instagram.com/nowmedical.ca" target="_blank" rel="noopener noreferrer" className="text-[#299470] hover:text-[#2D7B6F] transition-colors" aria-label="Instagram">
              <img src='/images/landing/insta_footer.svg' alt="Instagram" className="w-6 h-6 sm:w-auto sm:h-auto" />
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


