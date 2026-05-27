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
      <div className="relative h-[420px] w-full overflow-x-hidden overflow-y-visible sm:hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[504px] w-[120.5vw] origin-top-left scale-[0.83]"
          aria-hidden="true"
        >
          {/* Mari (mobile) */}
          <img
            src={assets.hero.mariVector9}
            alt=""
            className="absolute left-[10.16px] top-[129px] h-[40.864px] w-[41.992px] -rotate-[36.16deg]"
          />
          <img
            src={assets.hero.mariVector5}
            alt=""
            className="absolute left-[198.43px] top-[365.18px] h-[62.339px] w-[39.572px]"
          />
          <div
            className="absolute left-[192.9px] top-[170.76px] h-[21.201px] w-[7.744px] rounded-[18px] bg-[#61578b]"
            style={{ transform: "rotate(36.16deg)" }}
          />
          <div
            className="absolute left-[201.25px] top-[189.05px] h-[30.969px] w-[7.744px] rounded-[18px] bg-[#61578b]"
            style={{ transform: "rotate(70.09deg)" }}
          />
          <div
            className="absolute left-[205.2px] top-[214.66px] h-[25.204px] w-[7.744px] rounded-[18px] bg-[#61578b]"
            style={{ transform: "rotate(95.73deg)" }}
          />
          <div className="absolute left-0 top-[157.07px] h-[338.78px] w-[206.172px] overflow-visible">
            <img
              src={assets.mariPortrait}
              alt=""
              className="absolute left-[-20.18%] top-0 h-full w-[121.81%] max-w-none object-contain object-left-top"
            />
          </div>

          {/* Ilya (mobile) */}
          <div className="absolute right-0 top-[47px] h-[317px] w-[253px] overflow-hidden">
            <img
              src={assets.ilyaPortrait}
              alt=""
              className="absolute left-[18%] top-[-1.1%] h-[102.26%] w-[110%] max-w-none object-cover object-right-top"
            />
          </div>
          <img
            src={assets.hero.ilyaVector8}
            alt=""
            className="absolute left-[180.09px] top-[280.01px] h-[20.606px] w-[18.735px] -rotate-[22.97deg]"
          />
          <img
            src={assets.hero.ilyaVector3}
            alt=""
            className="absolute left-[225px] top-[285.75px] h-[32.232px] w-[32.9px] rotate-[21.38deg]"
          />
          <img
            src={assets.hero.ilyaEllipse3}
            alt=""
            className="absolute left-[271.99px] top-[317.43px] h-[10.177px] w-[10.177px]"
          />
          <img
            src={assets.hero.ilyaEllipse4}
            alt=""
            className="absolute left-[253.67px] top-[264px] h-[9.668px] w-[9.668px]"
          />
          <img
            src={assets.hero.ilyaEllipse5}
            alt=""
            className="absolute left-[218.14px] top-[343.65px] h-[8.651px] w-[8.651px]"
          />
          <img
            src={assets.hero.ilyaEllipse6}
            alt=""
            className="absolute left-[210px] top-[335px] h-[6.106px] w-[6.106px]"
          />
          <img
            src={assets.hero.ilyaEllipse7}
            alt=""
            className="absolute left-[335.19px] top-[306.8px] h-[10.686px] w-[10.686px]"
          />
          <img
            src={assets.hero.ilyaEllipse8}
            alt=""
            className="absolute left-[345.88px] top-[317.48px] h-[7.124px] w-[7.124px]"
          />
          <img
            src={assets.hero.ilyaVector7}
            alt=""
            className="absolute left-[292px] top-[337px] h-[63.861px] w-[73.529px] -rotate-[6.86deg]"
          />
          <img
            src={assets.hero.ilyaEllipse9}
            alt=""
            className="absolute left-[133.95px] top-[90.54px] h-[8.142px] w-[8.142px]"
          />
          <img
            src={assets.hero.ilyaEllipse11}
            alt=""
            className="absolute left-[141.08px] top-[65.6px] h-[9.668px] w-[8.142px] rotate-[16.55deg]"
          />
          <img
            src={assets.hero.ilyaEllipse10}
            alt=""
            className="absolute left-[123px] top-[71.71px] h-[9.668px] w-[8.142px] rotate-[17.8deg]"
          />
          <img
            src={assets.hero.ilyaVector10}
            alt=""
            className="absolute left-[309px] top-[29px] h-[49.137px] w-[52.77px]"
          />
        </div>
      </div>

      <div className="hidden sm:block">
        <MariSide />
        <IlyaSide />
      </div>
    </>
  );
}
