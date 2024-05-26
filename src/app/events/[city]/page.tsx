import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props) {
  const { city } = params;

  return {
    title: city === "all" ? "All events" : `Events in ${city}`,
  };
}

export default async function CityPage({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = params;
  const page = searchParams.page || 1;
  return (
    <main className=" flex flex-col items-center py-24 px-[20px] min-h-[110vh]  ">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
