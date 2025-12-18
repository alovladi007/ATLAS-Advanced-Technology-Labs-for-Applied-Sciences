import Head from "next/head";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function SiteLayout({
  children,
  title = "ATLAS — Advanced Technology Labs for Applied Sciences",
  description = "AI-powered automation for domain-specific research and engineering platforms.",
}) {
  return (
    <div className="min-h-screen bg-atlas-bg text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#000000" />
      </Head>
      <SiteNav />
      <main className="pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}

