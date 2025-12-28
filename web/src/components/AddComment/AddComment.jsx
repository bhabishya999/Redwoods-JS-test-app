import {
  Form,
  TextAreaField,
  Submit,
  Label, useForm, FieldError, FormError,
} from '@redwoodjs/forms'
import {useMutation} from "@redwoodjs/web";
import {toast, Toaster} from "@redwoodjs/web/toast";
import {useAuth} from "src/auth";
import { QUERY as COMMENTS_QUERY } from 'src/components/CommentsCell'

const CREATE_COMMENT = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

const AddComment = ({id}) => {
  const {  currentUser } = useAuth()
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_COMMENT, {
    refetchQueries: [
      {
        query: COMMENTS_QUERY,
        variables: { id }, // 👈 MUST match query variable name
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: () => {
      toast.success('Comment added')
      formMethods.reset()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSubmit = (data) => {
    const payload = {
      comment : data.comment,
      userId : currentUser.id,
      postId : id
    }
    console.log(payload)
    create({
      variables: {
        input: payload
      }
    })
  }

  return (
    <div className="mt-8 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Leave a Comment
      </h2>

      <Toaster />

      <Form onSubmit={onSubmit } formMethods={formMethods} className="space-y-4">
        <FormError
          error={error}
          wrapperClassName="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg"
          titleClassName="text-red-900 font-semibold text-lg mb-2"
          listClassName="text-red-700 list-disc list-inside space-y-1"
        />

        <div>
          <Label
            name="comment"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Your Comment
          </Label>

          <TextAreaField
            name="comment"
            validation={{required: true}}
            rows={4}
            className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Write your thoughts here..."
            errorClassName="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none"
          />
          <FieldError name="comment" className="text-red-600 text-sm mt-1" />
        </div>

        <div className="flex justify-end">
          <Submit className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Posting...
              </>
            ) : (
              <>
                Post Comment
              </>
            )}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AddComment
