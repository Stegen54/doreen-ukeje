import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    name: "Mr. Justice Mbam",
    role: "M.D, Arch-Mate Estate and Homes",
    quote:
      "Doreen's collaborative work has transformed our social media presence. Her expert advice and creative strategies have led to very great and visible results, boosting our engagement and increasing our follower base. She is highly recommended!",
  },
  {
    name: "Amb. Ralphael Okonkwo",
    role: "CEO, Arch-Mate Groups",
    quote:
      "Doreen is a social media expert! Having her manage our pages has increased our online visibility significantly. Since teaming up with her, we have experienced a notable boost in engagement and brand recognition. I highly recommend her services!",
  },
  {
    name: "Mr. Justin Uchenna",
    role: "Architect · Builder · CEO, TFingers",
    quote:
      "Working with Doreen has been a game-changer for our social media. Her expertise, creativity and video editing skills have significantly boosted our online presence. She is dedicated, innovative, and a pleasure to work with. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Kind words</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">Client Testimonials</h1>
        <p className="mt-4 text-foreground/75">
          Trusted by founders and creative teams to amplify their brand story.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm">
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="mt-6 text-[15px] leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-4">
                <div className="font-serif text-lg">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
