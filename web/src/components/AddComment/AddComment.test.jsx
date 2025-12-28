import { render } from '@redwoodjs/testing/web'

import AddComment from './AddComment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddComment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddComment />)
    }).not.toThrow()
  })
})
