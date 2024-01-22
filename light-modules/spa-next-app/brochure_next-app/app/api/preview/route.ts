import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (request: Request) => {
  draftMode().enable();
  // eslint-disable-next-line no-console
  console.log("Draft mode is enabled");
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const redirectURL = `${slug}?${searchParams.toString()}`;
  redirect(redirectURL);
};
