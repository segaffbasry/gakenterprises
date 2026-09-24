import { designManufacture, portfolios, services, workIn } from "@/lib/content";

/* Every page in the live sitemap is rebuilt here, so all menu and footer links stay on this site.
   The live header is logo-only and its footer columns are empty; the columns below use its own headings
   (Company / Services / Our Office) filled with its real sitemap pages. */

export type NavLink = { name: string; href: string; meta?: string };
export type NavGroup = { id: string; label: string; title: string; blurb: string; links: NavLink[] };

export const menu: NavGroup[] = [
  {
    id: "company",
    label: "Company",
    title: "GAK Enterprises Limited",
    blurb: "Engineering services provider headquartered in Milton Keynes, founded in September 2011.",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    id: "services",
    label: "Services",
    title: "Our Services",
    blurb: "Engineering, manufacturing, IT and knowledge services for global industries.",
    links: services.map((s) => ({ name: s.title, href: `/${s.slug}` })),
  },
  {
    id: "portfolio",
    label: "Portfolio",
    title: "Our Portfolio",
    blurb: "Hardware, software and automotive design & manufacture delivered for clients.",
    links: [
      ...portfolios.map((p) => ({ name: p.title, href: `/${p.slug}`, meta: String(workIn(p).length).padStart(2, "0") })),
      { name: designManufacture.title, href: `/${designManufacture.slug}` },
    ],
  },
];

export const footerColumns = [
  { title: "Company", links: menu[0].links.slice(1) },
  { title: "Services", links: [...menu[1].links, ...menu[2].links] },
];
