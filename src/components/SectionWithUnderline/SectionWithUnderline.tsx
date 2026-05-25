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
      <div className="relative mb-12 flex flex-col items-center gap-6 text-center">
        <img
          src={assets.underline}
          alt=""
          aria-hidden="true"
          className="absolute top-[50px] h-[11px] w-[133px]"
        />
        <h2 className="text-[36px] font-semibold leading-[1.4] text-primary">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[393px] text-lg font-medium leading-normal text-neutral">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
