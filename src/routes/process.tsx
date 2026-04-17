import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Work Process — Doreen Ukeje" },
      {
        name: "description",
        content:
          "How Doreen works: consultation, strategy, content creation, management, and analysis & reporting.",
      },
      { property: "og:title", content: "Work Process — Doreen Ukeje" },
      {
        property: "og:description",
        content: "A five-step approach to growing your brand on social media.",
      },
    ],
  }),
  component: Process,
});

const steps = [
  {
    title: "Consultation",
    body: "Thorough discussion to align on objectives, target audience, and brand identity.",
  },
  {
    title: "Strategy",
    body: "Customize a social media strategy to align with your objectives and target audience.",
  },
  {
    title: "Content Creation",
    body: "Create engaging content aligning with your brand identity and resonating with your target audience.",
  },
  {
    title: "Management",
    body: "Manage social media by scheduling posts, interacting with your audience, and tracking performance metrics.",
  },
  {
    title: "Analysis / Report",
    body: "Perform regular performance analysis to refine strategy and optimize social media presence for success.",
  },
];

function Process() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">How I work</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">The Work Process</h1>
        <p className="mt-4 text-foreground/75">
          A simple, repeatable system to turn brand goals into measurable social momentum.
        </p>
      </Reveal>

      <ol className="mt-16 space-y-6">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <li className="group grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 font-serif text-xl text-gold">
                  0{i + 1}
                </div>
                <h2 className="font-serif text-2xl md:hidden">{s.title}</h2>
              </div>
              <div>
                <h2 className="hidden font-serif text-2xl md:block">{s.title}</h2>
                <p className="mt-2 text-foreground/80">{s.body}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
