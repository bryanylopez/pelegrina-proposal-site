import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let password = "";
  try {
    const body = await request.json();
    password = body?.password ?? "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const expected = process.env.SITE_PASSWORD;

  if (!expected) {
    return NextResponse.json(
      { error: "Server is missing SITE_PASSWORD." },
      { status: 500 }
    );
  }

  if (password === expected) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("proposal_auth", "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 14,
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
}
