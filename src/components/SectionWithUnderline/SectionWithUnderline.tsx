import type { ReactNode } from "react";
import { assets } from "../../assets";

type SectionWithUnderlineProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionWithUnderline({
  id,
  title,
  description,
  children,
}: SectionWithUnderlineProps) {
  return (
    <section id={id} className="w-full max-w-[1200px] px-4">
      <div className="relative mb-8 flex flex-col items-center gap-4 text-center sm:mb-12 sm:gap-6">
        <img
          src={assets.underline}
          alt=""
          aria-hidden="true"
          className="absolute top-[42px] h-[11px] w-[133px] sm:top-[50px]"
        />
        <h2 className="text-[30px] font-semibold leading-[1.4] text-primary sm:text-[36px]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[393px] text-base font-medium leading-normal text-neutral sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
