import { QuoteFormData } from "@/app/components/QuoteRequestForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL!;

export const sendContributeEmail = async (data: QuoteFormData) => {
  const admins = [adminEmail, data.email];
  const { email, name, message, phone } = data;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quote Request</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #06002e;
                background-color: #f9f9f9;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
            }
            .logo {
                text-align: center;
                margin-bottom: 20px;
            }
            .logo img {
                max-width: 150px;
                height: auto;
            }
            h1 {
                color: #69443c;
                border-bottom: 2px solid #69443c;
                padding-bottom: 10px;
            }
            .info {
                background-color: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 5px;
                padding: 15px;
                margin-bottom: 20px;
            }
            .info p {
                margin: 5px 0;
            }
            .label {
                font-weight: bold;
                color: #69443c;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">
                <!-- Replace the src with your actual logo URL -->
              
            </div>
            <h1>Request for Quotation</h1>
            <div class="info">
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> ${email}</p>
                <p><span class="label">Phone:</span> ${phone}</p>
            </div>
            <h2>Message:</h2>
            <p>${message}</p>
        </div>
    </body>
    </html>
  `;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: admins,
    subject: "REQUEST FOR QUOTATION",
    html: htmlContent
  });

  return { success: true };
};