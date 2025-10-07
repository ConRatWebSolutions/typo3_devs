"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact-form"
import Link from "next/link"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const privacy = watch("privacy")

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Fehler beim Senden des Formulars")
      }

      setSubmitStatus("success")
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Ihr vollständiger Name"
          className="mt-2"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Agenturname */}
      <div>
        <Label htmlFor="agencyName">
          Agenturname <span className="text-destructive">*</span>
        </Label>
        <Input
          id="agencyName"
          {...register("agencyName")}
          placeholder="Name Ihrer Agentur"
          className="mt-2"
        />
        {errors.agencyName && (
          <p className="mt-1 text-sm text-destructive">{errors.agencyName.message}</p>
        )}
      </div>

      {/* E-Mail */}
      <div>
        <Label htmlFor="email">
          E-Mail <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="ihre@email.de"
          className="mt-2"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Telefon (optional) */}
      <div>
        <Label htmlFor="phone">Telefon (optional)</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+49 123 456789"
          className="mt-2"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Projektbeschreibung */}
      <div>
        <Label htmlFor="projectDescription">
          Projektbeschreibung <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="projectDescription"
          {...register("projectDescription")}
          placeholder="Beschreiben Sie kurz Ihr Projekt und Ihre Anforderungen..."
          rows={6}
          className="mt-2"
        />
        {errors.projectDescription && (
          <p className="mt-1 text-sm text-destructive">
            {errors.projectDescription.message}
          </p>
        )}
      </div>

      {/* Datenschutz Checkbox */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="privacy"
          checked={privacy}
          onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="privacy"
            className="text-sm font-normal leading-relaxed cursor-pointer"
          >
            Ich habe die{" "}
            <Link href="/datenschutz" className="text-accent underline">
              Datenschutzerklärung
            </Link>{" "}
            zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und
            für Rückfragen gespeichert werden. <span className="text-destructive">*</span>
          </Label>
          {errors.privacy && (
            <p className="text-sm text-destructive">{errors.privacy.message}</p>
          )}
        </div>
      </div>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-400">
          <p className="font-semibold">Vielen Dank für Ihre Nachricht!</p>
          <p className="text-sm">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-400">
          <p className="font-semibold">Ein Fehler ist aufgetreten</p>
          <p className="text-sm">
            Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full group relative overflow-hidden bg-accent hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
        disabled={isSubmitting}
      >
        <span className="relative z-10">{isSubmitting ? "Wird gesendet..." : "Nachricht senden"}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary-600 to-accent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      </Button>
    </form>
  )
}
