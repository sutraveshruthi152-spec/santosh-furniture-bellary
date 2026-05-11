import { createFileRoute, Link } from "@tanstack/react-router";
import { SofaScene } from "@/components/SofaScene";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Star, Sparkles, Award, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santosh Furnishing — Curtains, Mattresses & Wallpapers in Bellary" },
      { name: "description", content: "Bellary's premier home store. Sleepwell mattresses, designer curtains, wallpapers & furniture. 4.9★ rated by 819 customers." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* HERO with 3D */}
      <section className="relative pt-16 min-h-screen flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.78_0.13_85_/_0.08),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-12 md:pt-20 grid lg:grid-cols-2 gap-8 items-center flex-1">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs uppercase tracking-widest text-gold mb-6">
              <Sparkles className="w-3 h-3" /> Bellary's Trusted Since Years
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              Crafted comfort for <em className="text-gradient-gold not-italic">every corner</em> of your home.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Curtains, Sleepwell mattresses, wallpapers and bespoke furniture — curated with care and delivered with super service.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground text-sm uppercase tracking-widest font-medium hover:shadow-gold transition"
              >
                Explore Collection
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border hover:border-gold text-sm uppercase tracking-widest text-foreground/90 hover:text-gold transition"
              >
                Visit Showroom
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">4.9 from 819 Google reviews</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-serif text-gradient-gold">Sleepwell</p>
                <p className="text-xs text-muted-foreground">Authorized Dealer</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[560px] lg:h-[640px] -mx-6 lg:mx-0">
            <SofaScene />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-muted-foreground">
              Drag · Watch · Imagine
            </div>
          </div>
        </div>
      </section>

      {/* BENTO showcase */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-3">The Collection</p>
            <h2 className="text-4xl md:text-6xl max-w-2xl">Pieces that make a house feel like <em className="text-gradient-gold not-italic">home</em>.</h2>
          </div>
          <Link to="/products" className="text-sm text-gold hover:underline inline-flex items-center gap-1">
            View all <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-12 grid-rows-[auto] gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[220px]">
          <BentoCard
            className="col-span-12 md:col-span-7 row-span-2"
            tag="Mattresses"
            title="Sleepwell Comfort"
            desc="Authorized dealer of Sleepwell — orthopedic, memory foam & spring mattresses for restful nights."
            img="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80"
            featured
          />
          <BentoCard
            className="col-span-12 md:col-span-5"
            tag="Curtains"
            title="Drapes & Blinds"
            desc="Tailor-made curtains in silks, sheers and blackouts."
            img="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80"
          />
          <BentoCard
            className="col-span-6 md:col-span-3"
            tag="Wallpaper"
            title="Bold Walls"
            img="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
          />
          <BentoCard
            className="col-span-6 md:col-span-2"
            tag="Décor"
            title="Accents"
            img="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80"
          />
          <BentoCard
            className="col-span-12 md:col-span-7"
            tag="Furniture"
            title="Living Room Ensembles"
            desc="Bespoke sofas, recliners & coffee tables crafted to fit your space."
            img="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
          />
          <BentoCard
            className="col-span-12 md:col-span-5"
            tag="Bedroom"
            title="Beds & Storage"
            img="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80"
          />
        </div>
      </section>

      {/* Why Us */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border/50">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "Excellent Quality", desc: "Premium materials and finishes that customers consistently praise." },
            { icon: Sparkles, title: "Reasonable Prices", desc: "Fair pricing on every product — from mattresses to curtains." },
            { icon: Truck, title: "Super Service", desc: "Helpful guidance, clear communication and friendly delivery." },
          ].map((f, i) => (
            <div key={i} className="group relative p-8 rounded-2xl border border-border/60 bg-card/40 hover:border-gold/40 hover:bg-card transition">
              <f.icon className="w-7 h-7 text-gold mb-5" />
              <h3 className="text-2xl mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border/50">
        <p className="text-xs uppercase tracking-widest text-gold mb-3 text-center">What customers say</p>
        <h2 className="text-4xl md:text-6xl text-center mb-16 max-w-3xl mx-auto">Loved by <em className="text-gradient-gold not-italic">819+</em> homes across Bellary.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: "Excellent quality and the most comfortable mattress I've owned. Highly recommend.", n: "Ravi K." },
            { q: "Beautiful curtains, reasonable pricing and the staff was so patient with my choices.", n: "Lakshmi S." },
            { q: "Super service end-to-end. Wallpaper installation was clean and quick.", n: "Imran A." },
          ].map((r, i) => (
            <figure key={i} className="p-8 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-background">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed mb-5 font-serif text-xl">"{r.q}"</blockquote>
              <figcaption className="text-xs uppercase tracking-widest text-muted-foreground">— {r.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-card via-background to-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.78_0.13_85_/_0.1),_transparent_70%)]" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl mb-5">Step into the <em className="text-gradient-gold not-italic">showroom</em>.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Touch the fabrics. Try the mattresses. Let our team help you imagine the home you deserve.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground text-sm uppercase tracking-widest font-medium hover:shadow-gold transition"
            >
              Plan your visit <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BentoCard({
  className = "",
  tag,
  title,
  desc,
  img,
  featured = false,
}: {
  className?: string;
  tag: string;
  title: string;
  desc?: string;
  img: string;
  featured?: boolean;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card ${className}`}>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-5 md:p-7">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">{tag}</span>
        <h3 className={`${featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} text-foreground`}>{title}</h3>
        {desc && <p className="text-sm text-muted-foreground mt-2 max-w-md">{desc}</p>}
      </div>
    </div>
  );
}
