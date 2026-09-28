"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "@/components/Motion";
import { ArrowNE, ButtonRow } from "@/components/ui";

const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* Makes `follower` trail the pointer while it is inside `zone`: it scales in on enter, eases after the
   pointer on move (0.5s power3, so it lags a touch behind like a weighted cursor) and scales out on leave.
   `xPercent` shifts it off the pointer (-50 centres it). Touch screens never see it. */
function useFollower(zone: React.RefObject<HTMLElement | null>, follower: React.RefObject<HTMLElement | null>, onMove?: (event: PointerEvent) => void, xPercent = -50) {
  useEffect(() => {
    const area = zone.current, el = follower.current;
    if (!area || !el || !finePointer()) return;
    const duration = reducedMotion() ? 0 : .5;
    gsap.set(el, { xPercent, yPercent: -50, scale: 0, opacity: 0 });
    const x = gsap.quickTo(el, "x", { duration, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration, ease: "power3" });
    const place = (event: PointerEvent) => {
      const box = area.getBoundingClientRect();
      x(event.clientX - box.left); y(event.clientY - box.top);
    };
    const enter = (event: PointerEvent) => {
      const box = area.getBoundingClientRect();
      gsap.set(el, { x: event.clientX - box.left, y: event.clientY - box.top });
      gsap.to(el, { scale: 1, opacity: 1, duration: reducedMotion() ? 0 : .45, ease: "power3.out", overwrite: "auto" });
      onMove?.(event);
    };
    const move = (event: PointerEvent) => { place(event); onMove?.(event); };
    const leave = () => gsap.to(el, { scale: 0, opacity: 0, duration: reducedMotion() ? 0 : .35, ease: "power3.in", overwrite: "auto" });
    area.addEventListener("pointerenter", enter);
    area.addEventListener("pointermove", move);
    area.addEventListener("pointerleave", leave);
    return () => { area.removeEventListener("pointerenter", enter); area.removeEventListener("pointermove", move); area.removeEventListener("pointerleave", leave); };
  }, [zone, follower, onMove, xPercent]);
}

/* A block that is one link, with SalesPatriot's button riding on the pointer while it is over it. */
export function CursorLink({ href, label, className = "", children }: { href: string; label: string; className?: string; children: ReactNode }) {
  const zone = useRef<HTMLAnchorElement>(null);
  const follower = useRef<HTMLSpanElement>(null);
  useFollower(zone, follower);
  return <a ref={zone} href={href} className={`cursor-zone ${className}`} aria-label={label}>
    {children}
    <span ref={follower} className="cursor-follow btn btn-blue btn-arrow" aria-hidden="true"><ButtonRow arrow>{label}</ButtonRow></span>
  </a>;
}

export type Industry = { name: string; work: string; href: string; image: string };

/* Industries We Serve as large ruled rows. Hovering a row fills it navy from the left and a photo of GAK's
   own work in that industry follows the pointer, crossfading as the pointer moves between rows. */
export function IndustryList({ items }: { items: Industry[] }) {
  const zone = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const onMove = useRef((event: PointerEvent) => {
    const row = (event.target as Element).closest<HTMLElement>("[data-index]");
    if (row) setActive(Number(row.dataset.index));
  }).current;
  // The photo sits just right of the pointer so the row being hovered stays readable.
  useFollower(zone, follower, onMove, 12);

  return <div className="industries" ref={zone}><ul>
    {items.map((item, index) => <li key={item.name} data-index={index} data-rise>
      <a href={item.href} className="industry">
        <span className="industry-index mono">{String(index + 1).padStart(2, "0")}</span>
        <span className="industry-name">{item.name}</span>
        <span className="industry-work mono">{item.work}</span>
        <span className="industry-thumb" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt="" loading="lazy" decoding="async" />
        </span>
        <ArrowNE />
      </a>
    </li>)}
    </ul>
    <div className="industry-follow" ref={follower} aria-hidden="true">
      {items.map((item, index) => /* eslint-disable-next-line @next/next/no-img-element */
        <img key={item.name} src={item.image} alt="" loading="lazy" decoding="async" data-on={index === active || undefined} />)}
    </div>
  </div>;
}

/* The client logos as a continuous strip. It drifts on its own, speeds up with the scroll (Lenis velocity
   through ScrollTrigger) and eases back, and slows to a crawl under the pointer. */
export function LogoMarquee({ logos }: { logos: { name: string; logo: string }[] }) {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current; if (!el || reducedMotion()) return;
    const loop = gsap.to(el, { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
    let base = 1;
    const boost = ScrollTrigger.create({
      trigger: el, start: "top bottom", end: "bottom top",
      onUpdate: (self) => {
        const speed = gsap.utils.clamp(1, 6, 1 + Math.abs(self.getVelocity()) / 400);
        gsap.to(loop, { timeScale: speed * base, duration: .25, overwrite: true, onComplete: () => { gsap.to(loop, { timeScale: base, duration: 1.2, ease: "power2.out" }); } });
      },
    });
    const slow = () => { base = .15; gsap.to(loop, { timeScale: base, duration: .6, overwrite: true }); };
    const resume = () => { base = 1; gsap.to(loop, { timeScale: base, duration: .6, overwrite: true }); };
    el.addEventListener("pointerenter", slow);
    el.addEventListener("pointerleave", resume);
    return () => { el.removeEventListener("pointerenter", slow); el.removeEventListener("pointerleave", resume); boost.kill(); loop.kill(); gsap.set(el, { clearProps: "transform" }); };
  }, []);
  // Two copies side by side so the -50% loop is seamless.
  return <div className="marquee" data-rise>
    <div className="marquee-track" ref={track}>
      {[0, 1].map((copy) => <ul key={copy} className="marquee-set" aria-hidden={copy === 1 || undefined}>
        {logos.map((client) => <li key={client.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={client.logo} alt={copy ? "" : client.name} width={209} height={118} />
        </li>)}
      </ul>)}
    </div>
  </div>;
}
