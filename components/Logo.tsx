import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo({
  fontSize = "text-2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 p-2 ">
        <SquareDashedMousePointer className="stroke-white" size={iconSize} />
      </div>
      <div>
        <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Scraper</span>
        <span className="text-stone-700 dark:text-stone-300">SASS</span>
      </div>
    </Link>
  );
}

export default Logo;
