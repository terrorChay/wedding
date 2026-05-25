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
      <h2 className="text-[36px] font-semibold leading-[1.4] text-primary">
        {title}
      </h2>
      {accent ? (
        <p className="mt-2 text-[30px] font-semibold leading-[1.4] text-secondary">
          {accent}
        </p>
      ) : null}
      {description ? (
        <p
          className={`mt-6 max-w-[393px] text-lg font-medium leading-normal text-neutral ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
