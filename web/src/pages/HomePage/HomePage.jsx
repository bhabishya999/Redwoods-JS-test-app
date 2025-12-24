// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <><ArticlesCell/></>
    </>
  )
}

export default HomePage
