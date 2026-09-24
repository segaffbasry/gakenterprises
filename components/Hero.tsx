"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { reducedMotion } from "@/components/Motion";
import { Button } from "@/components/ui";
import { company } from "@/lib/content";

/* SalesPatriot's opening: a black-to-white vertical fade, a centred two-line statement and the company name
   set huge at the foot, half-dissolved into the white. The second line takes Rox's serif-italic accent.
   This is the one place heavier motion is allowed: the lines lift out of masks and the GAK letters
   rise one by one. On scroll the statement eases away and the wordmark drifts up. */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current; if (!el) return;
    const q = gsap.utils.selector(el);
    if (reducedMotion()) { gsap.set(q("[data-hero]"), { opacity: 1 }); return; }
    const ctx = gsap.context(() => {
      gsap.set(q("[data-hero]"), { opacity: 1 });
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(q(".hero-glow"), { opacity: 0, duration: 2.4, ease: "power2.out" }, 0)
        .from(q(".hero-line > span"), { yPercent: 110, duration: 1.3, stagger: .12 }, .15)
        .from(q(".hero-copy"), { opacity: 0, y: 16, duration: 1 }, .7)
        .from(q(".hero-actions"), { opacity: 0, y: 16, duration: 1 }, .8)
        .from(q(".hero-mark span"), { yPercent: 100, opacity: 0, duration: 1.6, stagger: .09, ease: "expo.out" }, .35);
      gsap.to(q(".hero-inner"), { opacity: 0, y: -60, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "60% top", scrub: true } });
      gsap.to(q(".hero-mark"), { yPercent: -18, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } });
    }, el);
    return () => ctx.revert();
  }, []);

  return <section className="hero" ref={root} data-tone="dark">
    <div className="hero-glow" aria-hidden="true" />
    <div className="hero-inner wrap">
      <h1 className="hero-title" data-hero>
        <span className="hero-line"><span>{company.hero.lead}</span></span>
        <span className="hero-line hero-accent"><span>{company.hero.accent}</span></span>
      </h1>
      <p className="hero-copy" data-hero>{company.heroBody}</p>
      <div className="hero-actions" data-hero>
        <Button href="/contact-us" arrow>Get In Touch</Button>
        <Button href="#services" tone="white" arrow>Our Services</Button>
      </div>
    </div>
    <div className="hero-mark" aria-hidden="true" data-hero>{"GAK".split("").map((c, i) => <span key={i}>{c}</span>)}</div>
  </section>;
}
