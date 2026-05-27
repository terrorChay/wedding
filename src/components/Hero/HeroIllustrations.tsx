import { assets } from "../../assets";

function MariSide() {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0 w-[min(533px,37vw)] max-w-none"
      aria-hidden="true"
    >
      <img
        src={assets.mariPortrait}
        alt=""
        className="h-auto w-full max-w-none object-contain object-left-top"
      />
    </div>
  );
}

function IlyaSide() {
  return (
    <div
      className="pointer-events-none absolute right-0 top-8 w-[min(654px,45.4vw)] max-w-none"
      aria-hidden="true"
    >
      <img
        src={assets.ilyaPortrait}
        alt=""
        className="h-auto w-full max-w-none object-contain object-right-top"
      />
    </div>
  );
}

export function HeroIllustrations() {
  return (
    <>
      <div className="relative h-[420px] w-screen overflow-hidden sm:hidden" aria-hidden="true">
        <img
          src={assets.mariPortrait}
          alt=""
          className="absolute left-0 top-[33vw] h-auto w-[46vw] max-w-none object-contain object-left-top"
        />
        <img
          src={assets.ilyaPortrait}
          alt=""
          className="absolute right-0 top-[9vw] h-auto w-[56vw] max-w-none object-contain object-right-top"
        />
      </div>

      <div className="hidden sm:block">
        <MariSide />
        <IlyaSide />
      </div>
    </>
  );
}
