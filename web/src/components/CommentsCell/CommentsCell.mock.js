// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  comments: [
    {
      __typename: 'Comments',
      id: 42,
    },
    {
      __typename: 'Comments',
      id: 43,
    },
    {
      __typename: 'Comments',
      id: 44,
    },
  ],
})
