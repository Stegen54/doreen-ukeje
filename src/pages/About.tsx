import doreen from "@/assets/doreen.jpg";
import { Reveal } from "@/components/Reveal";

const softSkills = [
  "Creativity",
  "Communication",
  "Attention to detail",
  "Emotional intelligence",
  "Adaptability",
  "Problem solving",
  "Time management",
];

const techSkills = [
  "Copywriting",
  "Social media scheduling",
  "Paid advertising (ads)",
  "Video editing",
  "Basic graphics knowledge",
  "SEO and hashtags",
  "Analytics & data interpretation",
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-[0_20px_40px_-20px_rgba(61,43,31,0.35)]">
            <img src={doreen} alt="Doreen Ukeje portrait" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">About me</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">
            Blending creativity <span className="italic">with strategy.</span>
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              My name is Doreen. I am a social media manager, content strategist and video editor.
              I graduated from the <strong>Skill2Scale academy</strong> where I got hands-on knowledge
              on social media management.
            </p>
            <p>
              My favorite part about being a social media manager is being able to blend creativity
              with strategy — and my 5 months of experience have taught me the power of crafting
              narratives that resonate with audiences.
            </p>
            <p className="text-gold">
              Let's collaborate and amplify your brand's voice in the digital realm!
            </p>
          </div>
        </Reveal>
      </div>

      <section className="mt-24">
        <Reveal className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Skills</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">What I bring to the table</h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal><SkillCard title="Soft skills" items={softSkills} /></Reveal>
          <Reveal delay={0.1}><SkillCard title="Technical skills" items={techSkills} /></Reveal>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
      <h3 className="font-serif text-2xl">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
