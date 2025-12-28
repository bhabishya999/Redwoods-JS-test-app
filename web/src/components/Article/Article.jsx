import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article
      key={article.id}
      className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">
        <Link
          to={routes.article({ id: article.id })}
          className="hover:text-blue-600 transition-colors"
        >
          {article.title}
        </Link>
      </h2>

      <div className="text-gray-700 leading-relaxed line-clamp-3">
        {article.body}
      </div>

      <div className="mt-4">
        <Link
          to={routes.article({ id: article.id })}
          className="inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}

export default Article
