import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Clock, Star } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Santosh Furnishing, Bellary" },
      { name: "description", content: "Visit our showroom in Bellary, Karnataka. Open today. Contact us for curtains, mattresses, wallpapers and furniture." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-4">Visit the Showroom</p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8">
            Let's design your <em className="text-gradient-gold not-italic">home together</em>.
          </h1>
          <p className="text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Walk into our store in Bellary to feel the fabrics, test the mattresses, and explore wallpapers
            with our team. Helpful guidance, no pressure.
          </p>

          <div className="space-y-5">
            <Item icon={MapPin} label="Address" value="State Highway 19, Infantry Road, opp. Kumara Swamy Temple, Ballari, Karnataka 583103" />
            <Item icon={Clock} label="Hours" value="Open today · Mon–Sun" />
            <Item icon={Phone} label="Call us" value="Tap to dial from Google" />
            <Item icon={Star} label="Rating" value="4.9 ★ from 819+ reviews" />
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Santosh+Furnishing+Curtain+Sleepwell+Mattress+Wallpaper+Store+Ballari"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            Get directions →
          </a>
        </div>

        <form className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 space-y-5 h-fit">
          <h2 className="text-3xl mb-2">Send an enquiry</h2>
          <p className="text-sm text-muted-foreground mb-4">We'll get back within a day.</p>
          <Field label="Name" type="text" />
          <Field label="Phone" type="tel" />
          <Field label="What are you looking for?" type="text" placeholder="Mattress, curtains, sofa…" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-xl bg-background border border-border focus:border-gold focus:ring-0 outline-none px-4 py-3 text-sm"
              placeholder="Tell us about your space…"
            />
          </div>
          <button
            type="button"
            className="w-full inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground text-sm uppercase tracking-widest font-medium hover:shadow-gold transition"
          >
            Send Enquiry
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

function Item({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-border/60 bg-card/50">
      <Icon className="w-5 h-5 text-gold mt-0.5" />
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{label}</p>
        <p className="text-foreground">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl bg-background border border-border focus:border-gold focus:ring-0 outline-none px-4 py-3 text-sm"
      />
    </div>
  );
}
