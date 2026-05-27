import { Button } from "../Button/Button";
import { assets } from "../../assets";
import { HeroIllustrations } from "./HeroIllustrations";

type HeroProps = {
  onRsvp?: () => void;
};

export function Hero({ onRsvp }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-x-hidden overflow-y-visible pt-8 pb-4 sm:min-h-[760px] sm:overflow-visible sm:pt-24 sm:pb-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute left-4 top-4 z-10 sm:hidden" aria-hidden="true">
        <img
          src={assets.headerStickyNote}
          alt=""
          className="h-auto w-[min(190px,49vw)]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-8 z-0 h-[420px] sm:hidden"
        aria-hidden="true"
      >
        <HeroIllustrations />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-24 bottom-0 z-0 hidden sm:block" aria-hidden="true">
        <HeroIllustrations />
      </div>

      <div className="relative z-10 mx-auto mt-[420px] flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center sm:mt-[324px] sm:gap-12 sm:px-[clamp(16px,12vw,420px)]">
        <div>
          <h1
            id="hero-title"
            className="mb-[-7px] max-w-none font-sunless text-[56px] leading-[56px] font-normal text-display whitespace-nowrap sm:max-w-[673px] sm:mb-[-16px] sm:text-[clamp(72px,9vw,131px)] sm:leading-none"
          >
            Мариша &amp; Иля
          </h1>
          <p className="max-w-[658px] text-[20px] font-medium leading-[1.5] text-display sm:text-[clamp(24px,3vw,32px)] sm:leading-normal">
            приглашают вас на свадьбу
          </p>
        </div>
        <Button
          variant="primary"
          size="large"
          onClick={onRsvp}
          className="h-16 w-full max-w-[358px] justify-center text-[20px] leading-[1.5] sm:h-auto sm:w-auto sm:max-w-none sm:text-[24px] sm:leading-[1.4]"
        >
          Я приду
        </Button>
      </div>
    </section>
  );
}
