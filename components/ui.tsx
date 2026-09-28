import type { ReactNode } from "react";

/* The GAK mark is a heavy grotesque "GAK" (the live favicon); it has no vector logo, so it is set in type
   with the full company name beside it in mono. The colour follows currentColor so the header can recolour it. */
export const Logo = ({ full = true }: { full?: boolean }) => <span className="logo">
  <span className="logo-mark">GAK</span>
  {full && <span className="logo-name">Enterprises<br />Limited</span>}
</span>;

// SalesPatriot's button arrow, same path and 1.2 stroke.
export const Arrow = () => <svg className="arrow" viewBox="0 0 9.334 7.333" aria-hidden="true">
  <path d="M5.667 0 9.334 3.667 5.667 7.333M9.334 3.666H0" fill="none" stroke="currentColor" strokeWidth="1.2" />
</svg>;

// A north-east arrow for list links.
export const ArrowNE = () => <svg className="arrow-ne" viewBox="0 0 12 12" aria-hidden="true">
  <path d="M2 10 10 2M3.5 2H10v6.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
</svg>;

// Official LinkedIn glyph (Simple Icons).
export const LinkedIn = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;

/* SalesPatriot's button, copied from its Framer component rather than approximated:
   - a body flanked by two 6px caps; the left cap cuts the bottom-left corner, the right cap is the same
     shape turned 180deg so it cuts the top-right corner;
   - 36px tall plain, 44px tall with an arrow (padding 0 12 0 16, gap 12);
   - hover: opacity 1 -> .9, and on the arrow variant gap 12 -> 16 with right padding 12 -> 8, so the arrow
     steps 4px out while the button keeps its width;
   - press: the inner row scales to .95;
   - every change is a 0.3s tween on cubic-bezier(.44,0,.56,1). See .btn in globals.css. */
export function Button({ href, children, tone = "blue", arrow, external, className = "" }: {
  href: string; children: ReactNode; tone?: "blue" | "white" | "black"; arrow?: boolean; external?: boolean; className?: string;
}) {
  return <a className={`btn btn-${tone}${arrow ? " btn-arrow" : ""} ${className}`} href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
    <ButtonRow arrow={arrow}>{children}</ButtonRow>
  </a>;
}

// The button's visual row on its own, for places that are already a link (the cursor follower, the form).
export function ButtonRow({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  const h = arrow ? 44 : 36;
  const cap = <svg viewBox={`0 0 6 ${h}`} preserveAspectRatio="none" aria-hidden="true"><path d={`M0 0H6V${h}L0 ${h - 6}Z`} /></svg>;
  return <span className="btn-row">
    <span className="btn-cap">{cap}</span>
    <span className="btn-body"><span className="btn-label">{children}</span>{arrow && <Arrow />}</span>
    <span className="btn-cap btn-cap-end">{cap}</span>
  </span>;
}

// SalesPatriot's small mono eyebrow: a filled index chip and a caption.
export const Eyebrow = ({ index, children, rise = true }: { index?: string; children: ReactNode; rise?: boolean }) =>
  <p className="eyebrow" {...(rise ? { "data-rise": "" } : {})}>{index && <span className="eyebrow-chip">{index}</span>}{children}</p>;

/* A framed image: the frame clips open on arrival and the image inside drifts ~10% against the scroll. */
export function Frame({ src, alt = "", className = "", contain, eager }: { src: string; alt?: string; className?: string; contain?: boolean; eager?: boolean }) {
  return <div className={`frame ${contain ? "frame-contain" : ""} ${className}`} data-clip>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" {...(contain ? {} : { "data-parallax": "" })} />
  </div>;
}
