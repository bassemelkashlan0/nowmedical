import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Walk-In Clinic</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/walk-in" className="block px-4 py-2 text-sm hover:bg-accent rounded">
                        Walk-In Calgary
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/urgent-care" className="block px-4 py-2 text-sm hover:bg-accent rounded">
                        Urgent Care Calgary
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Family Doctor</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/family-doctor" className="block px-4 py-2 text-sm hover:bg-accent rounded">
                        Family Doctors Accepting New Patients
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/doctors" className="block px-4 py-2 text-sm hover:bg-accent rounded">
                        Female Family Doctor Calgary
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/doctors" className="block px-4 py-2 text-sm hover:bg-accent rounded">
                        Driver's Medical Calgary
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/services" className="block px-4 py-2 text-sm hover:bg-accent rounded">
                        Our Services
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/reviews" className="text-sm font-medium px-4 py-2">
                  Reviews
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="bg-[#299470] hover:bg-[#2D7B6F] text-white">
            Contact Us
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
