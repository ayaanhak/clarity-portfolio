import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { Loader } from "@/components/Loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="display-lg text-4xl mb-3">Nothing here.</h1>
        <p className="text-sm text-muted-foreground">
          The page you're looking for has moved, or never existed.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error</p>
        <h1 className="display-lg text-3xl mb-3">This page didn't load.</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Something went wrong on our end.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
          >
            Try again
          </button>
          <a href="/" className="border-b border-foreground/20 hover:border-foreground/60 transition-colors pb-0.5 text-muted-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Alex Morgan — UI/UX Designer" },
      { name: "description", content: "Selected works and writing by Alex Morgan, an independent UI/UX designer." },
      { name: "author", content: "Alex Morgan" },
      { property: "og:title", content: "Alex Morgan — UI/UX Designer" },
      { property: "og:description", content: "Selected works and writing by Alex Morgan, an independent UI/UX designer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Sora:wght@200;300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Loader />
      <Cursor />
      <Nav />
      <main className="pt-14 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
