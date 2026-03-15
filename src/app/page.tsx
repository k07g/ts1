import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "k07g | Portfolio",
  description: "Software Engineer Portfolio",
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Go","Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "AWS", "GCP", "Vercel"] },
];

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application built with Next.js and PostgreSQL. Features real-time updates and user authentication.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Beta",
    description: "CLI tool written in Go for automating deployment workflows. Reduced deploy time by 60%.",
    tech: ["Go", "Docker", "GitHub Actions"],
    href: "#",
  },
  {
    title: "Project Gamma",
    description: "REST API service with high availability design, handling 10k+ requests per second.",
    tech: ["Node.js", "Redis", "AWS"],
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg">k07g</span>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section id="about" className="pt-40 pb-24">
          <p className="text-indigo-400 text-sm font-medium mb-4 tracking-widest uppercase">Hello, I&apos;m</p>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            k07g
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            Software Engineer
          </p>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10">
            I build fast, reliable, and user-friendly web applications.
            Passionate about clean code, open source, and solving hard problems.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-indigo-500/50 transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-800 rounded-md text-xs text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8 max-w-xl">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:korenaga.makoto@ea-sys.jp"
              className="flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-lg transition-all text-sm"
            >
              <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              korenaga.makoto@ea-sys.jp
            </a>
            <a
              href="https://github.com/k07g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-lg transition-all text-sm"
            >
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/makoto-korenaga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-lg transition-all text-sm"
            >
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
          Built with Next.js &amp; Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
