import { assets } from "../../assets";
import { Button } from "../Button/Button";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { MAP_URL } from "../../constants";

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
        <div className="flex min-w-0 flex-1 flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <SectionHeading
            title="Место проведения"
            accent="Усадьба «Лесной Берег»"
          />
          <p className="max-w-[460px] text-lg font-medium leading-normal text-neutral text-center sm:text-left">
            Мы выбрали эту площадку, потому что любим природу и минимализм.
            Добраться до усадьбы можно на машине, общественном транспорте и даже
            пешком от станции метро «Планерная»!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <Button
              variant="secondary"
              size="default"
              onClick={() =>
                window.open(MAP_URL, "_blank", "noopener,noreferrer")
              }
              icon={
                <img src={assets.pinIcon} alt="" width={24} height={24} />
              }
              className="self-center sm:self-auto"
            >
              Построить маршрут
            </Button>
            <p className="text-base font-normal leading-normal text-neutral text-center sm:text-left">
              ул. Свободы 78Бс1
              <br />
              Малый панорамный зал
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
