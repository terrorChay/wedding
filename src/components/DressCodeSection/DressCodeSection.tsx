import { assets } from "../../assets";
import { ColorSwatches } from "../ColorSwatches/ColorSwatches";
import { SectionWithUnderline } from "../SectionWithUnderline/SectionWithUnderline";

const LADIES_COLORS = ["#DCAEAE", "#688274", "#D0C3E4", "#5A633A", "#C47A62"];

const GENTLEMEN_COLORS = ["#D2B48C", "#C47A62", "#1F305E", "#707657", "#AED9E5"];

export function DressCodeSection() {
  return (
    <SectionWithUnderline
      id="dresscode"
      title="Дресс-код"
      description="Мы будем рады, если ваши наряды поддержат атмосферу свадьбы"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <article className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-[30px] font-semibold leading-[1.4] text-secondary">
            Дамы
          </h3>
          <p className="max-w-[393px] text-lg font-medium leading-normal text-neutral">
            Платья, сарафаны и брючные костюмы в расслабленном стиле
          </p>
          <ColorSwatches colors={LADIES_COLORS} />
          <img
            src={assets.womensOutfits}
            alt="Примеры нарядов для дам"
            className="h-auto w-full object-contain"
          />
        </article>

        <article className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-[30px] font-semibold leading-[1.4] text-tertiary">
            Кавалеры
          </h3>
          <p className="max-w-[393px] text-lg font-medium leading-normal text-neutral">
            Костюмы, легкие пиджаки и брюки в стиле смарт-кэжуал
          </p>
          <ColorSwatches colors={GENTLEMEN_COLORS} />
          <img
            src={assets.mensOutfits}
            alt="Примеры нарядов для кавалеров"
            className="h-auto w-full object-contain"
          />
        </article>
      </div>
    </SectionWithUnderline>
  );
}
