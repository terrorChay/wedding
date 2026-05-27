import { assets } from "../../assets";
import { SectionWithUnderline } from "../SectionWithUnderline/SectionWithUnderline";

const EVENTS = [
  {
    time: "14:00",
    label: "Сбор гостей",
    image: assets.programGuests,
    alt: "Бокалы шампанского",
  },
  {
    time: "15:00",
    label: "Церемония",
    image: assets.programCeremony,
    alt: "Обручальные кольца",
  },
  {
    time: "16:00",
    label: "Банкет",
    image: assets.programBanquet,
    alt: "Тарелка с едой",
  },
  {
    time: "19:00",
    label: "Торт",
    image: assets.programCake,
    alt: "Кусок торта",
  },
] as const;

export function ProgramSection() {
  return (
    <SectionWithUnderline id="program" title="Программа">
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {EVENTS.map((event) => (
          <li
            key={event.time}
            className="flex flex-col items-center gap-2 text-center"
          >
            <img
              src={event.image}
              alt={event.alt}
              className="h-[162px] w-full max-w-[260px] object-contain"
            />
            <p className="text-[30px] font-semibold leading-[1.4] text-secondary">
              {event.time}
            </p>
            <p className="text-[30px] font-semibold leading-[1.4] text-primary">
              {event.label}
            </p>
          </li>
        ))}
      </ul>
    </SectionWithUnderline>
  );
}
