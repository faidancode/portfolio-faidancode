// components/github-button.tsx
import Image from "next/image";
import { Button } from "./ui/button";

interface GithubButtonProps {
  text: string;
  link: string;
}

export function GithubButton({ text, link }: GithubButtonProps) {
  return (
    <Button size="sm" className="bg-black/90 dark:bg-gray-50" asChild>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <div className="relative w-6 h-6 transition-transform group-hover:rotate-12">
          <Image
            src="/github-white.svg"
            alt="Github"
            fill
            className="object-contain  dark:hidden"
          />
          <Image
            src="/github.svg"
            alt="Github"
            fill
            className="object-contain  hidden dark:block"
          />
        </div>
        {text}
      </a>
    </Button>
  );
}
