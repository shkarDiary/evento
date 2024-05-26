import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const btnStyles =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 text-sm transition";
export default function PaginationControls({
  previousPath,
  nextPath,
}: {
  previousPath: string;
  nextPath: string;
}) {
  return (
    <section className="flex w-full justify-between ">
      {previousPath ? (
        <Link className={btnStyles} href={previousPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath ? (
        <Link className={btnStyles} href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : null}
    </section>
  );
}
