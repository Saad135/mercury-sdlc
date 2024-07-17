"use server";

function constructDirectusRestParams(
  method = null,
  body = null,
  otherHeaders = null
) {
  let restParams = {};
  restParams.headers = {
    Authorization: "Bearer " + process.env.DIRECTUS_STATIC_TOKEN,
  };

  if (otherHeaders) {
    restParams.headers = {
      ...restParams.headers,
      ...otherHeaders,
    };
  }

  if (method) {
    restParams.method = method;
  }

  if (body) {
    restParams.body = JSON.stringify(body);
  }

  return restParams;
}

async function callDirectusApi({
  endpoint,
  restParams = null,
  errorMessage = "Could not query directus.",
  cache = "force-cache",
}) {
  let queryResult = null;

  if (!restParams) {
    restParams = constructDirectusRestParams();
  }
  restParams.cache = cache;

  const queryURL = new URL(endpoint, process.env.DIRECTUS_URL);

  try {
    const result = await fetch(queryURL, restParams);

    if (!result.ok) {
      throw new Error(errorMessage);
    }
    queryResult = await result.json();
  } catch (error) {
    console.error(error);
  }
  return queryResult;
}

export async function fetchCategories() {
  let dataArr = [];

  const endpoint = "/items/categories";
  const errorMessage = "Could not fetch categories";

  const queryResult = await callDirectusApi({
    endpoint,
    errorMessage,
    cache: "no-store",
  });

  if (queryResult) {
    dataArr = queryResult.data;
  }

  return dataArr;
}

export async function checkUserAccessByEmail({ email }) {
  let hasAccess = false;

  const endpoint = `/items/users?filter[email][_eq]=${email}&filter[has_access][_eq]=true`;
  const errorMessage = "Could not user by email";

  if (email) {
    const queryResult = await callDirectusApi({
      endpoint,
      errorMessage,
      cache: "no-store",
    });

    if (queryResult?.data?.length) {
      hasAccess = queryResult?.data[0]?.has_access;
    }
  }

  return hasAccess;
}

export async function fetchUser({ email }) {
  let user = null;

  const endpoint = `/items/users?filter[email][_eq]=${email}`;
  const errorMessage = "Could not fetch user";

  if (email) {
    const queryResult = await callDirectusApi({
      endpoint,
      errorMessage,
      cache: "no-store",
    });

    if (queryResult?.data?.length) {
      user = queryResult?.data[0];
    }
  }

  return user;
}

export async function createUser({ body }) {
  let createdUser = null;

  const endpoint = "/items/users";
  const errorMessage = "Could not create user in directus";

  const otherHeaders = {
    "Content-Type": "application/json",
  };
  const restParams = constructDirectusRestParams("POST", body, otherHeaders);

  const queryResult = await callDirectusApi({
    endpoint,
    restParams,
    errorMessage,
    cache: "no-store",
  });

  if (queryResult) {
    createdUser = queryResult.data;
  }

  return createdUser;
}

export async function fetchAttractions() {
  let dataArr = [];

  const endpoint = "/items/attractions?fields=*,category.name";
  const errorMessage = "Could not fetch attractions";

  const queryResult = await callDirectusApi({
    endpoint,
    errorMessage,
    cache: "no-store",
  });

  if (queryResult) {
    dataArr = queryResult.data;
  }

  return dataArr;
}

export async function fetchSavedEvents(id) {
  let dataArr = [];

  const endpoint = "/items/users?fields=posts.*&filter[id][_eq]=" + id;
  const errorMessage = "Could not fetch saved events";

  const queryResult = await callDirectusApi({
    endpoint,
    errorMessage,
    cache: "no-store",
  });

  if (queryResult) {
    dataArr = queryResult.data;
  }

  return dataArr;
}

export async function fetchAttractionById({ id }) {
  let dataArr = [];

  const endpoint = "/items/attractions?filter[id][_eq]=" + id;
  const errorMessage = "Could not fetch attraction by id: " + id;

  const queryResult = await callDirectusApi({
    endpoint,
    errorMessage,
    cache: "no-store",
  });

  if (queryResult) {
    dataArr = queryResult.data[0];
  }

  return dataArr;
}
