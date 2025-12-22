import { HeroData } from "@/lib/types/hero";
import Image from "next/image";

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      className="flex max-w-5xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center"
      id="Hero"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <p className="text-3xl font-extrabold leading-tight text-foreground">
          {data.title}
          <span className="text-orange-600 ml-1">{data.name}</span>
        </p>
        <p className="text-base text-muted-foreground">{data.description}</p>
      </div>
      <div className="flex-1 ">
        <Image src="deep_work.svg" alt="logo" width={280} height={320} className="scale-x-[-1]" />
      </div>
    </section>
  );
}
