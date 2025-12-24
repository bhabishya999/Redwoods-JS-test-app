import {Metadata, useMutation} from '@redwoodjs/web'
import {TextAreaField, TextField, Submit, Form, Label, useForm, FormError} from "@redwoodjs/forms";
import {toast, Toaster} from "@redwoodjs/web/toast";

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
const ContactPage = () => {
  const formMethods = useForm();
  const [create, {loading,error}] = useMutation(CREATE_CONTACT,
    {onCompleted: () => {
      toast.success('Thank you for your message!')
        formMethods.reset();
      }})
  const onSubmit = (data) => {
    console.log(data)
    create({
      variables:{
        input:data
      }
    })
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page"/>

      <h1>ContactPage</h1>
      <Toaster/>
      <Form onSubmit={onSubmit} formMethods={formMethods}>
        <FormError error={error} wrapperClassName="form-error"/>
      <Label name="name" errorClassName="error">Name</Label>
        <TextField name="name" className="error" validation={{required: true}} />
      <Label name="email" errorClassName="error">Email</Label>
        <TextField name="email" className="error" validation={{required: true}}/>
      <Label name="message" errorClassName="error">Message</Label>
        <TextAreaField name="message" className="error" validation={{required: true}}/>
      <Submit disabled={loading}>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
