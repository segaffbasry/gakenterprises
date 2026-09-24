import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Shell } from "@/components/Chrome";
import { posthogSnippet } from "@/lib/posthog";
import "./globals.css";

// Geist carries the UI (both references set their interface in a neo-grotesque; SalesPatriot's Britti Sans
// is a trial face). Geist Mono is for SalesPatriot-style labels. Instrument Serif stands in for Rox's
// Season Serif and is reserved for the hero and a few headline accents.
const ui = Geist({ subsets: ["latin"], variable: "--font-ui", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: { default: "GAK Enterprises Limited", template: "%s – GAK Enterprises Limited" },
  description: "GAK Enterprises Limited is one of the leading engineering services providers to the global automotive, aerospace, defence, medical, instrumental, IT and manufacturing and production industries.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  icons: { icon: "/brand/favicon.png" },
};

export const viewport: Viewport = { themeColor: "#07080d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${ui.variable} ${mono.variable} ${display.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: posthogSnippet }} />
        <noscript><style>{"[data-rise],[data-clip],.hero [data-hero]{visibility:visible!important;opacity:1!important}"}</style></noscript>
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
