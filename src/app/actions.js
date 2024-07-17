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
