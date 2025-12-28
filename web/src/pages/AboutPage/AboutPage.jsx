import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          About Us
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          Learn more about who we are, what we do, and why we build meaningful
          digital experiences.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We are a passionate team focused on building modern, scalable, and
            user-friendly web applications. Our goal is to create products that
            are not only visually appealing but also efficient and reliable.
          </p>

          <p>
            This project is built using <strong>RedwoodJS</strong>, combining
            a powerful React frontend with a GraphQL-powered backend. We believe
            in clean architecture, maintainable code, and best development
            practices.
          </p>

          <p>
            Whether you are a developer exploring new technologies or a user
            discovering our platform, we hope this application provides value
            and inspiration. We continuously improve and evolve to meet modern
            web standards.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-gray-50 p-6 border border-gray-200">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>RedwoodJS</li>
            <li>React & GraphQL</li>
            <li>Tailwind CSS</li>
            <li>Prisma & PostgreSQL</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default AboutPage
