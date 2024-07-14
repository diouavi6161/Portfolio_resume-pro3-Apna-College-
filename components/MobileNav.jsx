"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'skills',
    path: '/skills'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'projects',
    path: '/projects'
  },
  
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-rose-800" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
            <h1 className="text-zinc-50">Dipen <span>Pradhan</span></h1>
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link,index)=>{
                return(
                    <Link href={link.path} key={index} className={`${link.path===pathname}
                    text-xl capitalize transition-all`}>
                     {link.name}
                    </Link>
                )
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
