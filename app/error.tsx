"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold text-destructive">500</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
          Ein Fehler ist aufgetreten
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es erneut.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={() => reset()} size="lg">
            Erneut versuchen
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Zur Startseite</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
