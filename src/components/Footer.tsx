import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-3xl text-gradient-gold mb-3">Santosh Furnishing</h3>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Curtains, Sleepwell mattresses, wallpapers and bespoke furniture in Bellary, Karnataka.
            Crafting comfortable homes since the beginning.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm font-medium">4.9</span>
            <span className="text-xs text-muted-foreground">· 819 Google reviews</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-gold">Collection</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> State Highway 19, Infantry Road, opp. Kumara Swamy Temple, Ballari, Karnataka 583103</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Open today</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Santosh Furnishing. All rights reserved.
      </div>
    </footer>
  );
}
