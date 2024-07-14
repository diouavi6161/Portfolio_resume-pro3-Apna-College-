"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
 
];
const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-fuchsia-600 hover:text-gray-950"
            } capitalize font-medium hover:text-violet-500`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
