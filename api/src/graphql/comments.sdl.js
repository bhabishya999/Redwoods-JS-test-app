export const schema = gql`
  type Comment {
    id: Int!
    comment: String!
    user: User!
    userId: Int!
    post: Post!
    postId: Int!
    createdAt: DateTime!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
    commentsByPost(postId: Int!): [Comment!]! @skipAuth
  }

  input CreateCommentInput {
    comment: String!
    userId: Int!
    postId: Int!
  }

  input UpdateCommentInput {
    comment: String
    userId: Int
    postId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
