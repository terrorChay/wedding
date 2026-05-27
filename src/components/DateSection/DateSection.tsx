import { assets } from "../../assets";
import { Button } from "../Button/Button";
import { SectionHeading } from "../SectionHeading/SectionHeading";

function addToCalendar() {
  const start = "20260810T140000";
  const end = "20260810T230000";
  const title = encodeURIComponent("Свадьба Мариши и Ильи");
  const details = encodeURIComponent("Усадьба «Лесной Берег»");
  const location = encodeURIComponent("ул. Свободы 78Бс1");
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function DateSection() {
  return (
    <section className="w-full max-w-[1200px] px-4">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center">
        <div className="min-w-0 flex-1">
          <img
            src={assets.calendarIllustration}
            alt="Календарь на август 2026 с отмеченным 10 числом"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <SectionHeading title="Дата торжества" accent="10 августа 2026" />
          <p className="max-w-[460px] text-lg font-medium leading-normal text-neutral">
            Мы выбрали именно это дату, потому что она очень значима для нас. Мы
            понимаем, что вырваться из рабочих будней будет непросто, поэтому
            особенно ценим ваше присутствие!
          </p>
          <Button
            variant="secondary"
            size="default"
            onClick={addToCalendar}
            icon={
              <img src={assets.calendarIcon} alt="" width={24} height={24} />
            }
          >
            Добавить в календарь
          </Button>
        </div>
      </div>
    </section>
  );
}
