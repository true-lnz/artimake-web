import { cn } from "@/lib";
import React from "react";

interface Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, id, children }: Props) => {
  return (
    <section
      id={id}
      className={cn("h-full mx-auto w-full max-w-screen-xl px-4 md:px-12 lg:px-20", className)}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
