import { Beaker } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Beaker className="h-6 w-6" />
              <span className="font-bold text-xl">Innovation Lab</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering innovation and creativity through collaborative learning and research.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/programs" className="text-sm text-muted-foreground hover:text-foreground">Programs</Link></li>
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">Projects</Link></li>
              <li><Link href="/events" className="text-sm text-muted-foreground hover:text-foreground">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground">Resource Library</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Innovation Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}