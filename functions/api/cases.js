import { CASES } from "../_data/cases.js";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.CLUB_PASSWORD) {
    return json({ error: "Server password is not configured" }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "Bad request" }, 400);
  }

  const password = typeof body?.password === "string" ? body.password : "";
  if (password !== env.CLUB_PASSWORD) {
    return json({ error: "Unauthorized" }, 401);
  }

  return json({ cases: CASES });
}

export async function onRequest(context) {
  if (context.request.method === "POST") {
    return onRequestPost(context);
  }
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400"
      }
    });
  }
  return json({ error: "Method not allowed" }, 405);
}
