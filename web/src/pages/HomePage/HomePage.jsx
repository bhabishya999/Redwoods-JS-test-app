import { Metadata } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Redwood Blog
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
              Discover insightful articles, stories, and ideas from our community of writers.
            </p>
          </div>
        </div>

        {/* Articles Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Articles
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
          </div>

          <ArticlesCell />
        </div>
      </div>
    </>
  )
}

export default HomePage
