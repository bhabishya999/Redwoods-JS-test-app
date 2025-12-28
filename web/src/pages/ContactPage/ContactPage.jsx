import { Metadata, useMutation } from '@redwoodjs/web'
import { TextAreaField, TextField, Submit, Form, Label, useForm, FormError, FieldError } from "@redwoodjs/forms"
import { toast, Toaster } from "@redwoodjs/web/toast"

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message!')
      formMethods.reset()
    }
  })

  const onSubmit = (data) => {
    console.log(data)
    create({
      variables: {
        input: data
      }
    })
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />
      <Toaster />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto mt-6"></div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <Form onSubmit={onSubmit} formMethods={formMethods} className="space-y-6">
              <FormError
                error={error}
                wrapperClassName="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg"
                titleClassName="text-red-900 font-semibold text-lg mb-2"
                listClassName="text-red-700 list-disc list-inside space-y-1"
              />

              {/* Name Field */}
              <div>
                <Label
                  name="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  errorClassName="block text-sm font-semibold text-red-600 mb-2"
                >
                  Name
                </Label>
                <TextField
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  errorClassName="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none"
                  validation={{ required: true }}
                  placeholder="Your full name"
                />
                <FieldError name="name" className="text-red-600 text-sm mt-1" />
              </div>

              {/* Email Field */}
              <div>
                <Label
                  name="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  errorClassName="block text-sm font-semibold text-red-600 mb-2"
                >
                  Email
                </Label>
                <TextField
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  errorClassName="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none"
                  validation={{
                    required: true,
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: 'Please enter a valid email address'
                    }
                  }}
                  placeholder="your.email@example.com"
                />
                <FieldError name="email" className="text-red-600 text-sm mt-1" />
              </div>

              {/* Message Field */}
              <div>
                <Label
                  name="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  errorClassName="block text-sm font-semibold text-red-600 mb-2"
                >
                  Message
                </Label>
                <TextAreaField
                  name="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-y min-h-[150px]"
                  errorClassName="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none resize-y min-h-[150px]"
                  validation={{ required: true }}
                  placeholder="Tell us what's on your mind..."
                />
                <FieldError name="message" className="text-red-600 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <Submit
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </Submit>
            </Form>
          </div>

          {/* Additional Contact Info (Optional) */}
          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              You can also reach us at{' '}
              <a href="mailto:contact@redwoodblog.com" className="text-blue-600 hover:text-blue-800 font-medium">
                contact@redwoodblog.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
