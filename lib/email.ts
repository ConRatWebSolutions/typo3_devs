import nodemailer from "nodemailer"
import { ContactFormData } from "./validations/contact-form"

// Create reusable SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

interface SendContactNotificationParams {
  formData: ContactFormData
  submissionId: string
}

export async function sendContactNotification({
  formData,
  submissionId,
}: SendContactNotificationParams) {
  const { name, agencyName, email, phone, projectDescription } = formData

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #0f172a;
            color: #fff;
            padding: 20px;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: #f8fafc;
            padding: 20px;
            border-radius: 0 0 5px 5px;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #0f172a;
          }
          .value {
            margin-top: 5px;
            padding: 10px;
            background-color: #fff;
            border-left: 3px solid #06b6d4;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #64748b;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Neue Kontaktanfrage</h1>
          </div>
          <div class="content">
            <p>Eine neue Kontaktanfrage ist über das Kontaktformular eingegangen:</p>

            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Agentur:</div>
              <div class="value">${agencyName}</div>
            </div>

            <div class="field">
              <div class="label">E-Mail:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            ${
              phone
                ? `
            <div class="field">
              <div class="label">Telefon:</div>
              <div class="value">${phone}</div>
            </div>
            `
                : ""
            }

            <div class="field">
              <div class="label">Projektbeschreibung:</div>
              <div class="value">${projectDescription.replace(/\n/g, "<br>")}</div>
            </div>

            <div class="footer">
              <p>Submissions-ID: ${submissionId}</p>
              <p>Diese Nachricht wurde automatisch generiert.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  const emailText = `
Neue Kontaktanfrage

Name: ${name}
Agentur: ${agencyName}
E-Mail: ${email}
${phone ? `Telefon: ${phone}\n` : ""}
Projektbeschreibung:
${projectDescription}

---
Submissions-ID: ${submissionId}
Diese Nachricht wurde automatisch generiert.
  `

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@somesolutions.de",
      to: process.env.EMAIL_TO || "info@somesolutions.de",
      subject: `Neue Kontaktanfrage von ${agencyName}`,
      text: emailText,
      html: emailHtml,
      replyTo: email,
    })

    return { success: true, data: info }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
