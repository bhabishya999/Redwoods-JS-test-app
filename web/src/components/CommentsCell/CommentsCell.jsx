export const QUERY = gql`
  query FindCommentsByPostQuery($id: Int!) {
    commentsByPost(postId: $id) {
      id
      comment
      createdAt
      user {
        id
        email
      }
    }
  }
`

export const Loading = () => (
  <div className="flex items-center justify-center py-8">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent mb-2"></div>
      <p className="text-gray-600 text-sm font-medium">Loading comments...</p>
    </div>
  </div>
)

export const Empty = () => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center border border-blue-100">
    <svg
      className="mx-auto h-16 w-16 text-blue-400 mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
    <h3 className="text-lg font-bold text-gray-900 mb-2">No Comments Yet</h3>
    <p className="text-gray-600 text-sm mb-4">
      Be the first to share your thoughts on this article!
    </p>
    <p className="text-gray-500 text-xs">
      Your feedback helps create a vibrant community discussion.
    </p>
  </div>
)

export const Failure = ({ error }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
    <div className="flex items-start gap-3">
      <svg
        className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5"
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
        <h3 className="text-base font-semibold text-red-900 mb-1">
          Unable to Load Comments
        </h3>
        <p className="text-red-700 text-sm">{error?.message}</p>
      </div>
    </div>
  </div>
)

export const Success = ({ commentsByPost: comments }) => {
  // Sort comments by date (newest first) if createdAt exists
  const sortedComments = [...comments].sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return new Date(b.createdAt) - new Date(a.createdAt)
    }
    return 0
  })

  return (
    <div className="mt-12 border-t border-gray-200 p-8">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <svg
            className="w-7 h-7 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">
            Discussion
          </h2>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
            {comments.length}
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          Join the conversation and share your thoughts
        </p>
      </div>

      {/* Comments List */}
      <div className="space-y-5">
        {sortedComments.map((comment, index) => (
          <div
            key={comment.id}
            className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            {/* Comment Number Indicator */}
            <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
              {index + 1}
            </div>

            <div className="flex gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {comment.name ? comment.name.charAt(0).toUpperCase() : '?'}
                </div>
              </div>

              {/* Comment Content */}
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <div>
                    <p className="font-bold text-gray-900 text-base">
                      {comment.user.email || 'Anonymous User'}
                    </p>
                    {comment.createdAt && (
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(comment.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    )}
                  </div>
                </div>

                {/* Comment Text */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap break-words">
                    {comment.comment}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    Helpful
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    Reply
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors font-medium ml-auto">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
