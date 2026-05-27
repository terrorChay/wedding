import { assets } from "../../assets";
import { Button } from "../Button/Button";

const NAV_ITEMS = [
  { label: "Локация", href: "#location" },
  { label: "Программа", href: "#program" },
  { label: "Дресс-код", href: "#dresscode" },
  { label: "Пожелания", href: "#wishes" },
] as const;

type HeaderProps = {
  isSticky: boolean;
  onRsvp?: () => void;
};

export function Header({ isSticky, onRsvp }: HeaderProps) {
  return (
    <header
      className={`relative flex w-full max-w-[1200px] flex-col items-stretch gap-4 rounded-[48px] bg-bg p-3 pt-[140px] shadow-[var(--shadow-header)] transition-shadow duration-300 max-[1100px]:pt-[140px] min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:gap-4 min-[1100px]:pt-3 ${
        isSticky ? "shadow-[var(--shadow-soft)]" : ""
      }`}
    >
      <img
        src={assets.headerStickyNote}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-11px] h-[155px] w-[259px] -translate-x-1/2 object-cover min-[1100px]:left-[18px] min-[1100px]:translate-x-0"
      />

      <nav
        className="flex flex-col items-stretch min-[600px]:flex-row min-[600px]:flex-wrap min-[600px]:items-center min-[600px]:justify-center min-[1100px]:min-w-0 min-[1100px]:flex-1 min-[1100px]:justify-between min-[1100px]:pl-[277px]"
        aria-label="Навигация"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-[32px] px-6 py-3 text-center text-lg font-semibold leading-normal text-neutral transition-colors duration-200 hover:text-[#e86d87] min-[1100px]:px-3 min-[1100px]:text-left xl:px-6"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div
        className={`grid shrink-0 self-center transition-[grid-template-columns,opacity] duration-300 ease-in-out min-[1100px]:self-auto ${
          isSticky
            ? "grid-cols-[1fr] opacity-100"
            : "pointer-events-none grid-cols-[0fr] opacity-0"
        }`}
        aria-hidden={!isSticky}
      >
        <div className="min-w-0 overflow-hidden">
          <Button
            variant="primary"
            size="default"
            onClick={onRsvp}
            tabIndex={isSticky ? 0 : -1}
            className={`whitespace-nowrap transition-transform duration-300 ease-out ${
              isSticky ? "translate-x-0 scale-100" : "-translate-x-2 scale-95"
            }`}
          >
            Я приду
          </Button>
        </div>
      </div>
    </header>
  );
}
