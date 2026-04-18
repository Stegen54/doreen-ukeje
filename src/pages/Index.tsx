import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import doreen from "@/assets/doreen.jpg";

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              Doreen <span className="italic text-gold">Ukeje</span>
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Social Media Manager
            </p>

            <h2 className="mt-10 font-serif text-3xl md:text-4xl">Welcome.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/80">
              Hi there! I'm thrilled to have you here. Explore the world of social media through my
              lens — whether it's crafting compelling content or analyzing metrics, I'm passionate
              about making waves in the digital world.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/80">
              Together, let's discover how to elevate your brand's online presence and bring your
              story to life.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                See my work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
              >
                Let's connect
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] border border-border bg-secondary/60 shadow-[0_30px_60px_-30px_rgba(61,43,31,0.35)]">
              <img
                src={doreen}
                alt="Doreen Ukeje, social media manager"
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl bg-gold/90 md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight strip */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            { n: "3+", l: "Clients served" },
            { n: "5 mo", l: "Experience" },
            { n: "100%", l: "Recommended" },
            { n: "24/7", l: "On-brand voice" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-serif text-3xl text-gold md:text-4xl">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
