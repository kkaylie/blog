import FunFactsSection from '../components/FunFactsSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-4xl px-4 py-4 font-sans text-gray-800 sm:py-8">
        <div className="space-y-16">
          {/* Section 1: Intro */}
          <section className="text-left md:text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              <span className="animate-wave inline-block">👋</span> Hey there,
              I&#39;m Kaylee!
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              I&#39;m a front-end leaning full-stack web developer with 4+ years
              of experience building high-impact, large-scale web applications.
              I&#39;ve worked on everything from performance-critical trading
              platforms to internal low-code tools, using{' '}
              <span className="font-medium text-blue-600">Vue</span>,{' '}
              <span className="font-medium text-cyan-500">React</span>, and{' '}
              <span className="font-medium text-sky-600">TypeScript</span> to
              bring complex ideas to life in fast, accessible, and elegant ways.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-500">
              Right now, I&#39;m based in beautiful British Columbia, Canada,
              where I write code, chase cats, and occasionally get way too
              excited about food.
            </p>
          </section>

          {/* Section 2: Why I started this blog */}
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900">
              <span className="text-yellow-500">💡</span>
              Why I started this blog
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                This blog is my corner of the internet for thinking out loud.
              </p>
              <p>I use it to:</p>
              <ul className="list-inside list-disc space-y-2 pl-4 text-gray-600">
                <li>document the questions I ask while learning,</li>
                <li>
                  log the bugs I trip over (and how I eventually crawl out),
                </li>
                <li>
                  and practice breaking down complex technical concepts in my
                  own words.
                </li>
              </ul>
              <p>
                Sometimes I write to teach, sometimes to understand, but always
                with the hope that someone on a similar path might stumble in
                and find something useful, or at least relatable.
              </p>
            </div>
          </section>

          {/* Section 3: What I do */}
          <section>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900">
              <span className="text-indigo-500">🔧</span>
              What I do
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                My core strength lies in crafting scalable, maintainable
                frontends. But I don&apos;t shy away from backend logic, testing
                pipelines, or digging into performance bottlenecks. I love
                working on systems that need to be fast, stable, and usable by
                everyone, and I take accessibility and web performance
                seriously.
              </p>
              <p className="font-medium text-gray-800">
                My previous work has included:
              </p>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
                {[
                  'Building design systems and component libraries in Vue 3 and Tailwind CSS',
                  'Migrating legacy platforms to modern stacks using Composition API',
                  'Tackling rendering and memory issues in high-traffic live streamming apps',
                  'Developing real-time collaboration features with WebSockets',
                  'Creating low-code platforms that help non-dev teams move fast',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 text-indigo-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 4: Fun Facts */}
          <FunFactsSection />

          <section className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Lastly</h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-600">
              Thanks for stopping by! Whether you&apos;re here to learn, solve a
              bug, or just browsing out of curiosity, writing helps me slow down
              and reflect. If it helps someone else along the way, even a
              little, that&apos;s more than enough. Hope you find something
              useful here, or at least mildly comforting in the chaos of
              debugging. 😊
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
