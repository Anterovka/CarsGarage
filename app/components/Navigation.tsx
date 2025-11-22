"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getGarage } from "../lib/garage";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const [garageCount, setGarageCount] = useState(0);

  // колво авто(цифры)
  useEffect(() => {
    setGarageCount(getGarage().length);
    const handleUpdate = (e: CustomEvent) => setGarageCount(e.detail.length);
    window.addEventListener("garage-updated", handleUpdate as EventListener);
    return () => window.removeEventListener("garage-updated", handleUpdate as EventListener);
  }, []);

  return (
    <nav className="flex gap-3 items-center">
      <Button asChild variant={pathname === "/" ? "default" : "outline"}>
        <Link href="/">Главная</Link>
      </Button>
      <Button asChild variant={pathname === "/garage" ? "default" : "outline"} className="relative">
        <Link href="/garage">
          Гараж
          {garageCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {garageCount}
            </span>
          )}
        </Link>
      </Button>
      <ThemeToggle />
    </nav>
  );
}
