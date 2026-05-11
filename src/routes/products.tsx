import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Collection — Curtains, Mattresses, Wallpapers & Furniture | Santosh" },
      { name: "description", content: "Browse our curated collection: Sleepwell mattresses, curtains, blinds, wallpapers, and bespoke furniture in Bellary." },
    ],
  }),
  component: Products,
});

const categories = [
  { tag: "Mattresses", title: "Sleepwell Mattress", desc: "Spring, foam & orthopedic ranges with full warranty.", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80" },
  { tag: "Curtains", title: "Designer Curtains", desc: "Silks, sheers, blackouts and motorized tracks.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80" },
  { tag: "Wallpaper", title: "Statement Wallpapers", desc: "Imported & Indian wallpapers, professionally installed.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" },
  { tag: "Sofas", title: "Living Sofas", desc: "Bespoke sectionals and recliners in premium fabric & leather.", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80" },
  { tag: "Bedroom", title: "Beds & Storage", desc: "Hydraulic, storage and platform beds in elegant finishes.", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80" },
  { tag: "Dining", title: "Dining & Tables", desc: "4-seater to 8-seater dining sets crafted to last.", img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=1200&q=80" },
];

function Products() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <p className="text-xs uppercase tracking-widest text-gold mb-4">Collection</p>
        <h1 className="text-5xl md:text-7xl max-w-3xl leading-[1.05]">
          Everything you need to <em className="text-gradient-gold not-italic">furnish a life</em>.
        </h1>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <article key={c.title} className="group rounded-2xl border border-border/60 overflow-hidden bg-card hover:border-gold/40 transition">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{c.tag}</span>
              <h3 className="text-2xl mt-1 mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}
