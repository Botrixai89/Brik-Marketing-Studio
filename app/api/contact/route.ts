import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, business, service, message } = body as Record<string, string>;

    if (!name || !email || !phone || !business || !service) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return Response.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, business, service, message: message ?? "" }),
      redirect: "follow",
    });

    if (!res.ok) throw new Error(`Script responded ${res.status}`);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
