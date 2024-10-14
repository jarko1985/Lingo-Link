import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/SA.svg"
            alt="sa"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Arabic
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/GB-UKM.svg"
            alt="gb"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/DE.svg"
            alt="gb"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Deutsche
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/DK.svg"
            alt="gb"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Danish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/ES.svg"
            alt="gb"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/FR.svg"
            alt="gb"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/KR.svg"
            alt="gb"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Korean
        </Button>
      </div>
    </footer>
  );
};
