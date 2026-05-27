import { assets } from "../../assets";
import { SectionWithUnderline } from "../SectionWithUnderline/SectionWithUnderline";

const WISHES = [
  {
    icon: assets.moneyEnvelope,
    alt: "Конверт с деньгами",
    title: "Подарки",
    text: "Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи",
  },
  {
    icon: assets.flower,
    alt: "Цветок в горшке",
    title: "Цветы",
    text: "Пожалуйста, не дарите нам живые цветы. Мы не успеем насладиться их красотой до того, как их съедят наши коты",
  },
] as const;

export function WishesSection() {
  return (
    <SectionWithUnderline id="wishes" title="Пожелания">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {WISHES.map((wish) => (
          <article
            key={wish.title}
            className="flex flex-col items-center gap-2 text-center"
          >
            <img
              src={wish.icon}
              alt={wish.alt}
              className="size-[162px] object-contain"
            />
            <h3 className="text-[30px] font-semibold leading-[1.4] text-primary">
              {wish.title}
            </h3>
            <p className="max-w-[460px] text-lg font-medium leading-normal text-neutral">
              {wish.text}
            </p>
          </article>
        ))}
      </div>
      <img
        src={assets.cats}
        alt="Две кошки среди цветов"
        className="mt-12 h-auto w-full object-contain"
      />
    </SectionWithUnderline>
  );
}
