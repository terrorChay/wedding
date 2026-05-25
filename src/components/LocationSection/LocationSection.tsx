import { assets } from "../../assets";
import { Button } from "../Button/Button";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const MAP_URL = "https://yandex.ru/maps/?text=пос.+Новобутаково,+44";

export function LocationSection() {
  return (
    <section id="location" className="w-full max-w-[1200px] px-4">
      <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:justify-center">
        <div className="min-w-0 flex-1">
          <img
            src={assets.venueIllustration}
            alt="Иллюстрация усадьбы «Лесной Берег»"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <SectionHeading
            title="Место проведения"
            accent="Усадьба «Лесной Берег»"
          />
          <p className="max-w-[460px] text-lg font-medium leading-normal text-neutral">
            Мы выбрали эту площадку, потому что любим природу и минимализм.
            Добраться до усадьбы можно на машине, общественном транспорте и даже
            пешком от станции метро «Планерная»!
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="secondary"
              size="default"
              onClick={() =>
                window.open(MAP_URL, "_blank", "noopener,noreferrer")
              }
              icon={
                <img src={assets.pinIcon} alt="" width={24} height={24} />
              }
            >
              Построить маршрут
            </Button>
            <p className="text-base font-normal leading-normal text-neutral">
              пос. Новобутаково, 44
              <br />
              Малый панорамный зал
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
