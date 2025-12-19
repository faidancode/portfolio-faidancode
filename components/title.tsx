type TitleProps = {
  text1: string;
  text2: string;
  subtitle?: string;
};

export function Title({ text1, text2, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <p className="text-2xl font-bold">
        <span className="text-shadow-accent-foreground dark:text-[#ff5b35]">
          {text1}
        </span>{" "}
        {text2}
      </p>
      <p className="text-sm text-muted-foreground max-w-2xl">{subtitle}</p>
    </div>
  );
}
