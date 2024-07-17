"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";

import { updateUser } from "@/lib/directus";
import { authOptions } from "@/utils/auth";

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

export async function updateUserSaves({ newEventArr }) {
  const session = await getServerSession(authOptions);

  const userID = session?.user?.id;

  if (userID) {
    const eventIDArr = newEventArr?.map((event) => event?.id);

    const reformattedArr = eventIDArr?.map((id) => ({ attractions_id: id }));

    const body = { posts: reformattedArr };

    await updateUser({ body: body, id: userID });
  }
}
