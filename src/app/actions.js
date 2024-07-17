"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function getIronSessionObj() {
  // Iron session object
  const session = await getIronSession(cookies(), {
    password: process.env.IRON_SESSION_PASS,
    cookieName: process.env.IRON_SESSION_COOKIE_NAME,
  });

  return session;
}

export async function fetchEventsFromSession() {
  let eventArr = [];

  const session = await getIronSessionObj();

  if (session?.eventArr) {
    eventArr = session?.eventArr;
  }

  //   console.log(session);

  return eventArr;
}

export async function updateEventsInSession({ eventArr }) {
  const session = await getIronSessionObj();

  const eventIds = eventArr?.map((event) => event?.id);

  session.eventArr = eventIds;

  //   console.log(session);

  await session.save();
}
