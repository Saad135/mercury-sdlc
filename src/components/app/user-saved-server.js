import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";

import { fetchSavedEvents } from "@/lib/directus";
import { authOptions } from "@/utils/auth";
import { reformatEventItem } from "@/utils/home-utils";

import AppProvider from "../common-states-provider";

export default async function SavedEventsServer({ children }) {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id;

  //   const sessionEventsArr = await fetchEventsFromSession();
  const eventsfromSession = await fetchEventsFromSession();

  let eventsfromDirectus = [];
  if (userId) {
    eventsfromDirectus = await fetchSavedEvents(userId);
    eventsfromDirectus = eventsfromDirectus[0].posts?.map(
      (attraction) => attraction?.attractions_id,
    );
  }

  let combinedEventArr = [...eventsfromDirectus, ...eventsfromSession];

  // Remove duplicate events
  const eventArrSet = new Set(combinedEventArr?.map(JSON.stringify));
  combinedEventArr = Array.from(eventArrSet).map(JSON.parse);

  // reformat to web app formmat
  combinedEventArr = combinedEventArr?.map((event) => reformatEventItem(event));

  console.log(combinedEventArr);

  return (
    <>
      <AppProvider defaultVals={{ savedEventArr: combinedEventArr }}>
        {children}
      </AppProvider>
    </>
  );
}

async function fetchEventsFromSession() {
  let eventArr = [];

  const session = getIronSessionObj();

  if (session?.eventArr) {
    eventArr = session?.eventArr;
  }

  //   console.log(session);

  return eventArr;
}

async function getIronSessionObj() {
  // Iron session object
  const session = await getIronSession(cookies(), {
    password: process.env.IRON_SESSION_PASS,
    cookieName: process.env.IRON_SESSION_COOKIE_NAME,
  });

  return session;
}
