import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const updateComment = ({ id, input }) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const commentsByPost = ({ postId }) => {
  return db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          id: true,
          email: true
        }
      }
    }
  })
}

export const Comment = {
  user: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).user()
  },
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).post()
  },
}
