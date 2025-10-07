import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Die von Ihnen gesuchte Seite existiert leider nicht. Möglicherweise wurde sie verschoben oder gelöscht.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/">Zur Startseite</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
