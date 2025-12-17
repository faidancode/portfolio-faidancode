type TitleProps = {
  text1: string;
  text2: string;
};

export function Title({ text1, text2 }: TitleProps) {
  return (
    <div>
      <p className="text-2xl font-bold">
        <span className="text-shadow-accent-foreground dark:text-[#ff5b35]">
          {text1}
        </span>{" "}
        {text2}
      </p>
    </div>
  );
}
