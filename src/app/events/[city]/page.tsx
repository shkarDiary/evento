import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
type EventsPageProp = {
  params: {
    city: string;
  };
};

export default async function CityPage({ params }: EventsPageProp) {
  const { city } = params;

  return (
    <main className=" flex flex-col items-center py-24 px-[20px] min-h-[110vh]  ">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
