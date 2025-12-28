import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

const HeaderLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar with logo and auth */}
          <div className="flex justify-between items-center py-4 border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <Link
                to={routes.home()}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Redwood Blog
              </Link>
            </h1>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-sm text-gray-600">
                  Welcome, <span className="font-medium text-gray-900">{currentUser.email}</span>
                </span>
                <button
                  type="button"
                  onClick={logOut}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to={routes.login()}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Login
              </Link>
            )}
          </div>

          {/* Navigation */}
          <nav className="py-4">
            <ul className="flex gap-8">
              <li>
                <Link
                  to={routes.home()}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={routes.about()}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  to={routes.contact()}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  )
}

export default HeaderLayout
