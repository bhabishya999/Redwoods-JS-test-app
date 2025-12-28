export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title,
      body,
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mb-4"></div>
      <p className="text-gray-600 font-medium text-lg">Loading article...</p>
    </div>
  </div>
)

export const Empty = () => (
  <div className="text-center py-20">
    <svg
      className="mx-auto h-20 w-20 text-gray-400 mb-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h3>
    <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
    <a
      href="/"
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Home
    </a>
  </div>
)

export const Failure = ({ error }) => (
  <div className="py-12">
    <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg shadow-md">
      <div className="flex items-start">
        <svg
          className="h-8 w-8 text-red-600 mr-4 flex-shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <h3 className="text-xl font-bold text-red-900 mb-2">Error Loading Article</h3>
          <p className="text-red-700 mb-4">{error?.message}</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Home
          </a>
        </div>
      </div>
    </div>
  </div>
)

export const Success = ({ article }) => {
  return (
    <article className="p-8 md:p-12">
      {/* Article Header */}
      <header className="mb-8 pb-8 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {article.createdAt && (
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time className="text-base">
                {new Date(article.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-base">
                {Math.ceil(article.body.split(' ').length / 200)} min read
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
          {article.body}
        </div>
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <p>Thank you for reading!</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group"
          >
            Back to top
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </article>
  )
}
