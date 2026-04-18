import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Doreen Ukeje - Social Media Manager Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Doreen Ukeje — social media manager, content strategist, and video editor helping brands grow online.",
      },
      { name: "author", content: "Doreen Ukeje" },
      { property: "og:title", content: "Doreen Ukeje - Social Media Manager Portfolio" },
      {
        property: "og:description",
        content:
          "Explore the work of Doreen Ukeje — content creation, strategy, and analytics for growing brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Doreen Ukeje - Social Media Manager Portfolio" },
      { name: "description", content: "A digital portfolio showcasing architectural and solar projects, featuring detailed project galleries and client testimonials." },
      { property: "og:description", content: "A digital portfolio showcasing architectural and solar projects, featuring detailed project galleries and client testimonials." },
      { name: "twitter:description", content: "A digital portfolio showcasing architectural and solar projects, featuring detailed project galleries and client testimonials." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Us17JrOdZvPiTf6Bss3ZRznm3xs1/social-images/social-1776497392989-doreenpreview.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Us17JrOdZvPiTf6Bss3ZRznm3xs1/social-images/social-1776497392989-doreenpreview.webp" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
