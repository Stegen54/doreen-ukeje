import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Doreen Ukeje" },
      {
        name: "description",
        content:
          "Get in touch with Doreen Ukeje — email, phone, and LinkedIn for social media management collaboration.",
      },
      { property: "og:title", content: "Contact — Doreen Ukeje" },
      {
        property: "og:description",
        content: "Let's bring your brand's story to life in the digital world.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Say hello</p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.05] md:text-6xl">
            Let's get <span className="italic">in touch.</span>
          </h1>
          <p className="mt-6 max-w-md text-foreground/80">
            Ready to take your social media game to the next level? Let's connect and bring your
            brand's story to life in the digital world.
          </p>

          <ul className="mt-10 space-y-5">
            <ContactRow
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
              value="Doreen Ukeje"
              href="https://www.linkedin.com/in/doreen-ukeje-6b04183a7/"
            />
            <ContactRow
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value="+234-813-899-3300"
              href="tel:+2348138993300"
            />
            <ContactRow
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="doreenukeje7@gmail.com"
              href="mailto:doreenukeje7@gmail.com"
            />
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-secondary/60 shadow-[0_30px_60px_-30px_rgba(61,43,31,0.35)]">
            <div className="flex h-full items-center justify-center p-8 text-center">
              <div>
                <p className="font-serif text-2xl">Your portrait</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Upload to feature here
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden h-28 w-28 rounded-2xl bg-gold/90 md:block" />
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
          {icon}
        </span>
        <span>
          <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {label}
          </span>
          <span className="block font-serif text-lg group-hover:text-gold">{value}</span>
        </span>
      </a>
    </li>
  );
}
