import Image from "next/image";

export function Hero() {
  return (
    <section className="flex max-w-5xl flex-col gap-6 px-4 py-6 md:flex-row md:items-center">
      <div className="flex-1 space-y-4 text-center md:text-left">
        <p className="text-3xl font-extrabold leading-tight text-foreground">
          Hi, I&apos;m Rifai
        </p>
        <p className="text-base text-muted-foreground">
          I&apos;m a full-stack developer with over 4 years of experience
          crafting clean, scalable applications for web and mobile.
        </p>
      </div>
      <div className="flex-1">
        <Image src="deep_work.svg" alt="logo" width={280} height={320} />
      </div>
    </section>
  );
}
