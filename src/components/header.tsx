"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
const routes = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];
export default function Header() {
  const activePathname = usePathname();

  return (
    <header className=" flex justify-between items-center borderb border-white/10 h-14 sm:px-9 px-3  ">
      <h1>{<Link href={routes[0].path}>Evento</Link>}</h1>
      <nav className="h-full">
        <ul className="flex h-full gap-x-6 ">
          {routes.map((route) => (
            <li
              key={route.name}
              className={cn(
                " hover:text-white flex items-center transition relative",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
            >
              {activePathname === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
