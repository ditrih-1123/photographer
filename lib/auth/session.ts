import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("auth-session");
  return session?.value ? JSON.parse(session.value) : null;
}

export async function setSession(data: unknown) {
  const cookieStore = await cookies();
  cookieStore.set("auth-session", JSON.stringify(data), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("auth-session");
}



