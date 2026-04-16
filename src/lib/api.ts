const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(
  url: string,
  options: RequestInit = {},
  token?: string,
) {
  const accessToken =
    token ||
    (typeof window !== "undefined"
      ? localStorage.getItem("access_token")
      : null);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }

  return res.json();
}
