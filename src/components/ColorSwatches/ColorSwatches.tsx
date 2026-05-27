type ColorSwatchesProps = {
  colors: string[];
};

export function ColorSwatches({ colors }: ColorSwatchesProps) {
  return (
    <div className="flex items-center">
      {colors.map((color, index) => (
        <span
          key={color}
          className="size-12 shrink-0 rounded-full border-2 border-bg shadow-sm"
          style={{
            backgroundColor: color,
            marginLeft: index === 0 ? 0 : -16,
            zIndex: colors.length - index,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
