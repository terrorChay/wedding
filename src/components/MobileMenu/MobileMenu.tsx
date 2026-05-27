import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

const NAV_ITEMS = [
  { label: "Локация", href: "#location" },
  { label: "Программа", href: "#program" },
  { label: "Дресс-код", href: "#dresscode" },
  { label: "Пожелания", href: "#wishes" },
] as const;

type MobileMenuProps = {
  onRsvp?: () => void;
};

export function MobileMenu({ onRsvp }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="fixed right-4 z-[200] inline-flex size-14 items-center justify-center rounded-[18px] bg-secondary shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transform:translateZ(0)]"
        style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-bg transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-bg transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-bg transition-transform duration-200 ${
              isOpen ? "translate-y-[-7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[190]"
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/25"
            aria-label="Закрыть"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute right-4 flex w-fit min-w-[220px] max-w-[calc(100vw-32px)] flex-col items-center rounded-[24px] bg-bg p-4 shadow-[var(--shadow-soft)]"
            style={{ bottom: "calc(84px + env(safe-area-inset-bottom))" }}
          >
            <nav className="flex w-full flex-col items-center" aria-label="Навигация">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-full rounded-[18px] px-4 py-3 text-center text-[18px] font-semibold leading-normal text-neutral transition-colors duration-200 hover:text-[#e86d87]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-3 w-full border-t border-black/10 pt-3">
              <Button
                variant="primary"
                size="default"
                onClick={() => {
                  setIsOpen(false);
                  onRsvp?.();
                }}
                className="w-full"
              >
                Я приду
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

