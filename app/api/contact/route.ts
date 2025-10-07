import { NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations/contact-form"
import { sendContactNotification } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactFormSchema.parse(body)

    // Generate a simple submission ID for email reference
    const submissionId = `contact-${Date.now()}`

    // Send email notification
    const emailResult = await sendContactNotification({
      formData: validatedData,
      submissionId,
    })

    if (!emailResult.success) {
      console.error("Failed to send email notification:", emailResult.error)
      return NextResponse.json(
        {
          success: false,
          error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Ihre Nachricht wurde erfolgreich gesendet",
        submissionId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Ein unerwarteter Fehler ist aufgetreten",
      },
      { status: 500 }
    )
  }
}
