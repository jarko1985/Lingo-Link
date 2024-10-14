import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `flex lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col`,
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-2 pb-8 flex items-center gap-x-3">
          <Image src="/logo.svg" alt="logo" height="40" width="80" />
          <h1 className="text-xl font-extrabold text-green-600 tracking-wide">
            Lingo Link
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="learn" href="/learn" iconSrc="/learn3.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard1.svg"
        />
        <SidebarItem label="quests" href="/quests" iconSrc="/quest.svg" />
        <SidebarItem label="shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" showName />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
