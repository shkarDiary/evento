import "server-only";
import { unstable_cache } from "next/cache";
import prisma from "./db";
import { notFound } from "next/navigation";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const cityL = city.charAt(0).toUpperCase() + city.slice(1);
  console.log(cityL);

  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );
  // const events: EventoEvent[] = await response.json();
  const events = prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : cityL,
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });
  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : cityL,
    },
  });

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: EventoEvent = await res.json();
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
