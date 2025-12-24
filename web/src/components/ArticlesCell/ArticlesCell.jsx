import {Link, routes} from '@redwoodjs/router'
import Article from "src/components/Article/Article";
export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id,
      title,
      body,
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return articles.map((post) => (
    <Article key={post.id} article={post} />
    // <article key={post.id}>
    //   <h2><Link to={routes.article({id: post.id})}>{post.title}</Link></h2>
    //   <div>{post.body}</div>
    // </article>
  ))
}
