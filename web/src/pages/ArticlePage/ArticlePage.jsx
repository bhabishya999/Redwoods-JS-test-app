import { Metadata } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import ArticleCell from 'src/components/ArticleCell'
import AddComment from "src/components/AddComment/AddComment";
import CommentsCell from "src/components/CommentsCell";

const ArticlePage = ({ id }) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link
            to={routes.home()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium mb-8 transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </Link>

          {/* Article Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <ArticleCell id={id} />
            <CommentsCell id={id}/>
            <AddComment id={id}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePage
