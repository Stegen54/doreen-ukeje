import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl">Doreen Ukeje</h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Social media manager, content strategist, and video editor crafting narratives that
            resonate.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</h4>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold">Testimonials</Link></li>
            <li><Link to="/process" className="hover:text-gold">Process</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-gold" />
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gold">
                Doreen Ukeje
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+2348138993300" className="hover:text-gold">+234-813-899-3300</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:doreenukeje7@gmail.com" className="hover:text-gold">doreenukeje7@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Doreen Ukeje. All rights reserved.
      </div>
    </footer>
  );
}
