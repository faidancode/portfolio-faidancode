import Image from "next/image";

type Hero = {
  title: string;
  name: string;
  description: string;
};

interface HeroProps {
  heroData: Hero;
}

export function Hero({ heroData }: HeroProps) {
  return (
    <section
      className="flex max-w-5xl flex-col gap-6 p-6 md:flex-row md:items-center"
      id="Hero"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <p className="text-3xl font-extrabold leading-tight text-foreground">
          {heroData.title}
          <span className="text-orange-600 ml-1">{heroData.name}</span>
        </p>
        <p className="text-base text-muted-foreground">
          {heroData.description}
        </p>
      </div>
      <div className="flex-1">
        <Image src="deep_work.svg" alt="logo" width={280} height={320} />
      </div>
    </section>
  );
}
