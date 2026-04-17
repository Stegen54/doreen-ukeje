import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import land from "@/assets/land.jpg";
import survey from "@/assets/survey.jpg";
import colasolar from "@/assets/colasolar.jpg";
import starplus from "@/assets/starplus.jpg";
import winock from "@/assets/winock.jpg";
import luxpower from "@/assets/luxpower.jpg";
import tfingersRender from "@/assets/tfingers-render.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Doreen Ukeje" },
      {
        name: "description",
        content:
          "Client projects by Doreen Ukeje: Arch-Mate Estate & Homes, Arch-Mate Solar and Power Solutions, and TFingers.",
      },
      { property: "og:title", content: "Projects — Doreen Ukeje" },
      {
        property: "og:description",
        content: "A look at real client work: content, video editing, analytics, and growth.",
      },
    ],
  }),
  component: Projects,
});

type Project = {
  num: string;
  company: string;
  tagline?: string;
  date: string;
  client: string;
  role: string;
  images: string[];
};

const projects: Project[] = [
  {
    num: "01",
    company: "Arch-Mate Estate & Homes Ltd.",
    tagline: "…Creating wonders on Earth!",
    date: "March 10, 2025 – March 31, 2026",
    client: "Ralphael Okonkwo",
    role:
      "I manage content creation, social media, performance analysis, and industry trends to uphold their impactful presence.",
    images: [img1, img2, img3, land, survey],
  },
  {
    num: "02",
    company: "Arch-Mate Solar & Power Solutions",
    tagline: "Powering homes and businesses.",
    date: "March 2026",
    client: "Ralphael Okonkwo",
    role:
      "I manage all their social media accounts. I edit videos, check trends, analyse performance, and help boost the company's online presence.",
    images: [img4, img5, winock, colasolar, starplus, luxpower],
  },
  {
    num: "03",
    company: "TFingers",
    tagline: "Architecture · Design · Build.",
    date: "March 2026",
    client: "Justin Ukeje",
    role:
      "My role involves creating and executing plans to boost brand visibility, interaction, and traffic across diverse social media channels.",
    images: [img6, img7, img8, img9, tfingersRender],
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Recent work</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">My Recent Projects</h1>
        <p className="mt-4 text-foreground/75">
          A selection of client collaborations — captions, graphics, video editing, campaign
          management, and analytics reporting.
        </p>
      </Reveal>

      <div className="mt-16 space-y-24">
        {projects.map((p) => (
          <ProjectBlock key={p.num} p={p} />
        ))}
      </div>
    </div>
  );
}

function ProjectBlock({ p }: { p: Project }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Reveal>
      <article>
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="font-serif text-5xl text-gold/80">{p.num}</div>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Client {p.num}</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">{p.company}</h2>
            {p.tagline && <p className="mt-2 italic text-foreground/70">{p.tagline}</p>}

            <dl className="mt-8 space-y-3 text-sm">
              <Row k="Date" v={p.date} />
              <Row k="Client" v={p.client} />
              <Row k="Company" v={p.company} />
            </dl>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Role description</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{p.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {p.images.map((src, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setOpenIndex(i)}
                aria-label={`Open image ${i + 1} of ${p.company}`}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-secondary/40 transition hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`${p.company} project ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <Lightbox
          images={p.images}
          index={openIndex}
          alt={p.company}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      </article>
    </Reveal>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-4 border-b border-border/60 pb-2">
      <dt className="w-24 shrink-0 text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
      <dd className="text-foreground/90">{v}</dd>
    </div>
  );
}
