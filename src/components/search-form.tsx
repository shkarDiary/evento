"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/event/${search}`);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      className=" w-full sm:w-[580px]  "
      action=""
    >
      <input
        className=" w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition "
        type="text"
        placeholder="Search events in any city..."
        name=""
        id=""
      />
    </form>
  );
}
