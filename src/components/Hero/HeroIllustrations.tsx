import { assets } from "../../assets";

const MARI_W = 379;
const MARI_H = 674;

const ILYA_W = 559;
const ILYA_H = 680;

type Decoration = {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  rotate?: number;
};

const MARI_DECORATIONS: Decoration[] = [
  {
    src: assets.hero.mariVector9,
    left: 10,
    top: -8,
    width: 77.103,
    height: 75.032,
    rotate: -36.16,
  },
  {
    src: assets.hero.mariVector5,
    left: 210,
    top: 470,
    width: 72.659,
    height: 114.462,
  },
];

const ILYA_DECORATIONS: Decoration[] = [
  {
    src: assets.hero.ilyaVector10,
    left: 440,
    top: 0,
    width: 103.704,
    height: 96.564,
  },
  {
    src: assets.hero.ilyaEllipse11,
    left: 35.52,
    top: 68,
    width: 16,
    height: 19,
    rotate: 16.55,
  },
  {
    src: assets.hero.ilyaEllipse10,
    left: 0,
    top: 80.01,
    width: 16,
    height: 19,
    rotate: 17.8,
  },
  {
    src: assets.hero.ilyaEllipse9,
    left: 21.52,
    top: 117,
    width: 16,
    height: 16,
  },
  {
    src: assets.hero.ilyaVector8,
    left: 112.2,
    top: 489.35,
    width: 36.818,
    height: 40.495,
    rotate: -22.97,
  },
  {
    src: assets.hero.ilyaVector3,
    left: 152.65,
    top: 490.74,
    width: 64.656,
    height: 63.343,
    rotate: 21.38,
  },
  {
    src: assets.hero.ilyaEllipse4,
    left: 209,
    top: 448,
    width: 19,
    height: 19,
  },
  {
    src: assets.hero.ilyaEllipse7,
    left: 417,
    top: 542,
    width: 21,
    height: 21,
  },
  {
    src: assets.hero.ilyaEllipse8,
    left: 438,
    top: 563,
    width: 14,
    height: 14,
  },
  {
    src: assets.hero.ilyaVector7,
    left: 280,
    top: 497,
    width: 144.5,
    height: 125.5,
    rotate: -6.86,
  },
  {
    src: assets.hero.ilyaEllipse3,
    left: 245,
    top: 553,
    width: 20,
    height: 20,
  },
  {
    src: assets.hero.ilyaEllipse5,
    left: 103,
    top: 563,
    width: 17,
    height: 17,
  },
  {
    src: assets.hero.ilyaEllipse6,
    left: 87,
    top: 546,
    width: 12,
    height: 12,
  },
];

function pct(value: number, base: number) {
  return `${(value / base) * 100}%`;
}

function DecorationImg({
  deco,
  baseW,
  baseH,
}: {
  deco: Decoration;
  baseW: number;
  baseH: number;
}) {
  return (
    <img
      src={deco.src}
      alt=""
      className="absolute max-w-none object-contain"
      style={{
        left: pct(deco.left, baseW),
        top: pct(deco.top, baseH),
        width: pct(deco.width, baseW),
        height: pct(deco.height, baseH),
        transform: deco.rotate ? `rotate(${deco.rotate}deg)` : undefined,
        transformOrigin: "center",
      }}
    />
  );
}

function MariSide() {
  return (
    <div
      className="pointer-events-none absolute left-4 top-0 w-[min(533px,37vw)] max-w-none"
      style={{ aspectRatio: `${MARI_W} / ${MARI_H}` }}
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        {MARI_DECORATIONS.map((deco) => (
          <DecorationImg
            key={deco.src}
            deco={deco}
            baseW={MARI_W}
            baseH={MARI_H}
          />
        ))}

        <div
          className="absolute rounded-[18px] bg-[#61578b]"
          style={{
            left: pct(312, MARI_W),
            top: pct(64, MARI_H),
            width: pct(14.218, MARI_W),
            height: pct(38.928, MARI_H),
            transform: "rotate(36.16deg)",
            transformOrigin: "center",
          }}
        />
        <div
          className="absolute rounded-[18px] bg-[#61578b]"
          style={{
            left: pct(328, MARI_W),
            top: pct(98, MARI_H),
            width: pct(14.218, MARI_W),
            height: pct(56.863, MARI_H),
            transform: "rotate(70.09deg)",
            transformOrigin: "center",
          }}
        />
        <div
          className="absolute rounded-[18px] bg-[#61578b]"
          style={{
            left: pct(334, MARI_W),
            top: pct(146, MARI_H),
            width: pct(14.218, MARI_W),
            height: pct(46.278, MARI_H),
            transform: "rotate(95.73deg)",
            transformOrigin: "center",
          }}
        />

        <div
          className="absolute overflow-visible"
          style={{
            left: 0,
            top: pct(51.54, MARI_H),
            width: "100%",
            height: pct(622.046, MARI_H),
          }}
        >
          <img
            src={assets.mariPortrait}
            alt=""
            className="absolute top-0 left-[-20.18%] h-full w-[121.81%] max-w-none object-contain object-left-top"
          />
        </div>
      </div>
    </div>
  );
}

function IlyaSide() {
  return (
    <div
      className="pointer-events-none absolute right-0 top-8 w-[min(654px,45.4vw)] max-w-none"
      style={{ aspectRatio: `${ILYA_W} / ${ILYA_H}` }}
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        {ILYA_DECORATIONS.map((deco) => (
          <DecorationImg
            key={deco.src}
            deco={deco}
            baseW={ILYA_W}
            baseH={ILYA_H}
          />
        ))}

        <div
          className="absolute overflow-hidden"
          style={{
            left: pct(28, ILYA_W),
            top: pct(20, ILYA_H),
            width: pct(531, ILYA_W),
            height: pct(635, ILYA_H),
          }}
        >
          <img
            src={assets.ilyaPortrait}
            alt=""
            className="absolute top-[0.73%] left-[11.07%] h-[100.32%] w-[88.94%] max-w-none object-contain object-right-top"
          />
        </div>
      </div>
    </div>
  );
}

export function HeroIllustrations() {
  return (
    <>
      <MariSide />
      <IlyaSide />
    </>
  );
}
