import { Button } from "../Button/Button";
import { HeroIllustrations } from "./HeroIllustrations";

type HeroProps = {
  onRsvp?: () => void;
};

export function Hero({ onRsvp }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-visible pt-24 pb-24"
      style={{ minHeight: "900px" }}
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-24 bottom-0 z-0"
        aria-hidden="true"
      >
        <HeroIllustrations />
      </div>

      <div className="relative z-10 mx-auto mt-[324px] flex max-w-[1440px] flex-col items-center gap-12 px-[clamp(16px,12vw,420px)] text-center">
        <div>
          <h1
            id="hero-title"
            className="mb-[-16px] max-w-[673px] font-sunless text-[clamp(72px,9vw,131px)] leading-none font-normal text-display"
          >
            Мариша &amp; Иля
          </h1>
          <p className="max-w-[658px] text-[clamp(24px,3vw,32px)] font-medium leading-normal text-display">
            приглашают вас на свадьбу
          </p>
        </div>
        <Button
          variant="primary"
          size="large"
          onClick={onRsvp}
          className="text-[24px] leading-[1.4]"
        >
          Я приду
        </Button>
      </div>
    </section>
  );
}
