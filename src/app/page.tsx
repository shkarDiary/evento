import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex flex-col  items-center pt-36 px-3  ">
      <h1 className=" text-3xl font-bold tracking-tight lg:text-6xl ">
        Find event around you
      </h1>
      <p className=" mb-12 mt-7 text-2xl lg:text-3xl  ">
        Browse more than{" "}
        <span className=" font-bold italic underline text-accent ">10,000</span>{" "}
        events around you
      </p>
      <SearchForm />
      <section className=" mt-4 flex gap-x-4 text-sm text-white/50  ">
        <p>populat</p>
        <div className=" space-x-2 font-semibold  ">
          <Link href={"/events/austin"}>Austin</Link>
          <Link href={"/events/sseattle"}>seatle</Link>
        </div>
      </section>
    </main>
  );
}
