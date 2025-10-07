import { aboutContent } from "@/content/about"

export function TeamStructure() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {aboutContent.teamStructure.title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {aboutContent.teamStructure.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {aboutContent.teamStructure.structure.map((team) => (
          <div
            key={team.location}
            className="relative rounded-2xl border border-primary-200 bg-primary-50 p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary">{team.location}</h3>
              <p className="mt-2 text-lg font-semibold text-accent">{team.role}</p>
            </div>

            <ul className="space-y-3">
              {team.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-accent mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-3 text-base text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
