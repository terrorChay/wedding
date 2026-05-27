import { useCallback, useEffect, useRef, useState } from "react";
import { DateSection } from "./components/DateSection/DateSection";
import { DressCodeSection } from "./components/DressCodeSection/DressCodeSection";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { LocationSection } from "./components/LocationSection/LocationSection";
import { ProgramSection } from "./components/ProgramSection/ProgramSection";
import { WishesSection } from "./components/WishesSection/WishesSection";
import { RSVP_URL } from "./constants";

function handleRsvp() {
  window.open(RSVP_URL, "_blank", "noopener,noreferrer");
}

export default function App() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const headerInnerRef = useRef<HTMLDivElement>(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const headerEl = headerInnerRef.current;
    if (!headerEl) return;

    const updateHeight = () => setHeaderHeight(headerEl.offsetHeight);

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerEl);
    return () => observer.disconnect();
  }, [isHeaderSticky]);

  const onRsvp = useCallback(handleRsvp, []);

  return (
    <div className="relative min-h-screen w-full bg-bg">
      <div ref={sentinelRef} className="h-px w-full shrink-0" aria-hidden="true" />

      <div className="relative w-full" style={{ minHeight: headerHeight || undefined }}>
        <div
          ref={headerInnerRef}
          className={`z-[100] flex w-full justify-center px-4 pt-6 ${
            isHeaderSticky ? "fixed top-0 right-0 left-0" : "relative"
          }`}
        >
          <Header isSticky={isHeaderSticky} onRsvp={onRsvp} />
        </div>
      </div>

      <Hero onRsvp={onRsvp} />

      <main className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-24 px-4 pb-24">
        <DateSection />
        <LocationSection />
        <ProgramSection />
        <DressCodeSection />
        <WishesSection />
      </main>
    </div>
  );
}
