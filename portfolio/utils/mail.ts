import { QuoteFormData } from "@/app/components/QuoteRequestForm";
import { Resend } from "resend";



const resend = new Resend (process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL!;

export const sendContributeEmail = async (data: QuoteFormData) => {
  const admins = [adminEmail, data.email];

 const {email, name, service, message, phone } =data 

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: admins,
    subject: "Contribute to the AI Startups Database",
    html: `email:${email}, name:${name},service:${service}, message:${message}, phone:${phone}`
  });

  return { success: true };
};
