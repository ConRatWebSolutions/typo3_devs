import { Metadata } from "next"
import { impressumContent } from "@/content/legal"

export const metadata: Metadata = {
  title: "Impressum | White-Label Typo3-Entwicklung",
  robots: {
    index: false,
    follow: true,
  },
}

export default function ImpressumPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#0a0e1a] min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-12">
          {impressumContent.title}
        </h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-gray-300 leading-relaxed">
              {impressumContent.company.name}
              <br />
              {impressumContent.company.street}
              <br />
              {impressumContent.company.city}
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Handelsregister: {impressumContent.legal.registration}
              <br />
              Registergericht: {impressumContent.legal.court}
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Vertreten durch:</strong>
              <br />
              {impressumContent.legal.ceo}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-accent mb-4">Kontakt</h2>
            <p className="text-gray-300 leading-relaxed">
              Telefon: <a href={`tel:${impressumContent.contact.phone}`} className="text-accent hover:underline">{impressumContent.contact.phone}</a>
              <br />
              E-Mail: <a href={`mailto:${impressumContent.contact.email}`} className="text-accent hover:underline">{impressumContent.contact.email}</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-accent mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-300 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              {impressumContent.legal.vatId}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-accent mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
            <p className="text-gray-300 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
