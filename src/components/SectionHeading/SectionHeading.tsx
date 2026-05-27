type SectionHeadingProps = {
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  accent,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-[30px] font-semibold leading-[1.4] text-primary sm:text-[36px]">
        {title}
      </h2>
      {accent ? (
        <p className="mt-2 text-[24px] font-semibold leading-[1.4] text-secondary sm:text-[30px]">
          {accent}
        </p>
      ) : null}
      {description ? (
        <p
          className={`mt-4 max-w-[393px] text-base font-medium leading-normal text-neutral sm:mt-6 sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
