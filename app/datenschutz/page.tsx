import { Metadata } from "next"
import { datenschutzContent } from "@/content/legal"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | White-Label Typo3-Entwicklung",
  robots: {
    index: false,
    follow: true,
  },
}

export default function DatenschutzPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#0a0e1a] min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-12">
          {datenschutzContent.title}
        </h1>

        <div className="prose prose-lg prose-invert max-w-none space-y-8">
          {datenschutzContent.sections.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-accent mb-4">{section.title}</h2>
              {section.content.intro && (
                <h3 className="text-lg font-medium text-white mb-2">{section.content.intro}</h3>
              )}
              <p className="text-gray-300 mb-4 leading-relaxed">{section.content.text}</p>
              {section.content.howWeCollect && (
                <p className="text-gray-300 mb-4 leading-relaxed">{section.content.howWeCollect}</p>
              )}
              {section.content.legalBase && (
                <p className="text-gray-300 mb-4 leading-relaxed">{section.content.legalBase}</p>
              )}
              {section.content.provider && (
                <div className="bg-[#151821]/60 backdrop-blur-xl border border-white/5 p-6 rounded-xl">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">Hosting-Provider:</strong> {section.content.provider}
                    <br />
                    {section.content.text}
                  </p>
                </div>
              )}
            </section>
          ))}

          <section className="mt-12 p-6 bg-[#151821]/60 backdrop-blur-xl border border-white/5 rounded-xl">
            <h2 className="text-2xl font-semibold text-accent mb-4">
              {datenschutzContent.contact.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {datenschutzContent.contact.name}
              <br />
              {datenschutzContent.contact.address}
              <br />
              E-Mail: <a href={`mailto:${datenschutzContent.contact.email}`} className="text-accent hover:underline">{datenschutzContent.contact.email}</a>
            </p>
          </section>

          {datenschutzContent.dataProtectionOfficer && (
            <section className="mt-8 p-6 bg-[#151821]/60 backdrop-blur-xl border border-white/5 rounded-xl">
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Datenschutzbeauftragter
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {datenschutzContent.dataProtectionOfficer.name}
                <br />
                E-Mail: <a href={`mailto:${datenschutzContent.dataProtectionOfficer.email}`} className="text-accent hover:underline">{datenschutzContent.dataProtectionOfficer.email}</a>
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
