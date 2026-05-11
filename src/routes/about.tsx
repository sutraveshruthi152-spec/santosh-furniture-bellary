import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Santosh Furnishing, Bellary" },
      { name: "description", content: "Family-run home furnishing store in Bellary specializing in curtains, Sleepwell mattresses, wallpapers and furniture." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <p className="text-xs uppercase tracking-widest text-gold mb-4">Our Story</p>
        <h1 className="text-5xl md:text-7xl mb-8 leading-[1.05]">
          A home store built on <em className="text-gradient-gold not-italic">trust, craft & community</em>.
        </h1>
        <div className="grid md:grid-cols-2 gap-10 mt-16 text-muted-foreground leading-relaxed">
          <p>
            Santosh Furnishing began with a simple belief — every home in Bellary deserves comfort
            without compromise. From bespoke curtains and statement wallpapers to authorized
            Sleepwell mattresses and made-to-order furniture, we curate pieces that make houses feel like home.
          </p>
          <p>
            Our customers consistently call out our excellent quality, reasonable prices and super
            service. We take that seriously — every fabric, every spring, every finish is chosen with care,
            and our team is here to guide you with patience and clarity.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "4.9", l: "Google rating" },
            { n: "819+", l: "Happy reviews" },
            { n: "1000s", l: "Homes furnished" },
            { n: "Sleepwell", l: "Authorized" },
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border/60 bg-card/50">
              <p className="text-3xl md:text-4xl text-gradient-gold font-serif">{s.n}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
