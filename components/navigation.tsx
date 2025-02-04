"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Beaker, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AuthModal } from "@/components/auth/auth-modal"

export function Navigation() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authType, setAuthType] = React.useState<"login" | "signup">("login");
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Beaker className="h-6 w-6" />
          <span className="font-bold text-xl">Innovation Lab</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="mx-6 hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs & Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/programs" title="All Programs">
                    Browse all our innovation programs
                  </ListItem>
                  <ListItem href="/projects" title="Projects">
                    Explore our innovative projects
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/resources" title="All Resources">
                    Access our knowledge base
                  </ListItem>
                  <ListItem href="/gallery" title="Gallery">
                    Visual showcase of our work
                  </ListItem>
                  <ListItem href="/partners" title="Partners">
                    Our collaboration network
                  </ListItem>
                  <ListItem href="/learn" title="Learning Center">
                    Educational materials and guides
                  </ListItem>
                  <ListItem href="/terms" title="Terms of Service">
                    Our terms and conditions
                  </ListItem>
                  <ListItem href="/privacy" title="Privacy Policy">
                    Our privacy policy
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Community</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/community" title="Community Hub">
                    Join our innovation community
                  </ListItem>
                  <ListItem href="/events" title="Events">
                    Upcoming events and activities
                  </ListItem>
                  <ListItem href="/blog" title="Blog">
                    Latest news and insights
                  </ListItem>
                  <ListItem href="/news" title="News">
                    Stay updated with latest news
                  </ListItem>
                  <ListItem href="/newsletter" title="Newsletter">
                    Stay updated with our newsletter
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden ml-6">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <Beaker className="h-6 w-6" />
                <span className="font-bold text-xl">Innovation Lab</span>
              </Link>
              <NavigationMenuLink className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  Home
                </NavigationMenuLink>
              <Link href="/about" className="block py-2 hover:text-primary">About</Link>
              <Link href="/programs" className="block py-2 hover:text-primary">Programs</Link>
              <Link href="/projects" className="block py-2 hover:text-primary">Projects</Link>
              <Link href="/resources" className="block py-2 hover:text-primary">Resources</Link>
              <Link href="/community" className="block py-2 hover:text-primary">Community</Link>
              <Link href="/contact" className="block py-2 hover:text-primary">Contact</Link>
              <Link href="/login" className="block py-2 hover:text-primary">Login</Link>
              <Link href="/signup" className="block py-2 hover:text-primary">Sign Up</Link>
              <Link href="/join" className="block py-2 hover:text-primary">Join Now</Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <Button
            variant="ghost"
            onClick={() => {
              setAuthType("login");
              setAuthModalOpen(true);
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              setAuthType("signup");
              setAuthModalOpen(true);
            }}
          >
            Sign Up
          </Button>
          <AuthModal
            open={authModalOpen}
            onOpenChange={setAuthModalOpen}
          />
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent/5 hover:text-primary focus:bg-accent/5 focus:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"