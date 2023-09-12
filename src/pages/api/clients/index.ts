import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const businessName = formData.get("businessName")?.toString(); 
  const location = formData.get("location")?.toString();
  const message = formData.get("message")?.toString();
  if (!name || !email || !businessName || !location || !message) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const clientsRef = db.collection("clients");
    await clientsRef.add({
      name,
      email,
      businessName,
      location,
      message,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/contact");
};
