import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  if (!email) {
    return new Response("Please enter your email", {
      status: 400, 
    });
  }
  try {
    const db = getFirestore(app);
    const emailsRef = db.collection("emails");
    await emailsRef.add({
      email,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/");
};
