import * as z from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name muss mindestens 2 Zeichen lang sein" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" }),

  agencyName: z
    .string()
    .min(2, { message: "Agenturname muss mindestens 2 Zeichen lang sein" })
    .max(100, { message: "Agenturname darf maximal 100 Zeichen lang sein" }),

  email: z
    .string()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }),

  phone: z
    .string()
    .optional(),

  projectDescription: z
    .string()
    .min(10, { message: "Projektbeschreibung muss mindestens 10 Zeichen lang sein" })
    .max(2000, { message: "Projektbeschreibung darf maximal 2000 Zeichen lang sein" }),

  privacy: z
    .boolean()
    .refine((val) => val === true, {
      message: "Sie müssen die Datenschutzerklärung akzeptieren",
    }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
