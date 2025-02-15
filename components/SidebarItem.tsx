"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px] gap-x-2 flex items-center"
      asChild
    >
      <Link href={href}>
        <Image src={iconSrc} alt={label} height="32" width="32" />
        {label}
      </Link>
    </Button>
  );
};
