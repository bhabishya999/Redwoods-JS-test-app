export const standard = defineScenario({
  comment: {
    one: {
      data: {
        comment: 'String',
        user: {
          create: {
            email: 'String4284624',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-12-27T13:03:46.224Z',
          },
        },
        post: { create: { title: 'String', body: 'String' } },
      },
    },
    two: {
      data: {
        comment: 'String',
        user: {
          create: {
            email: 'String5387678',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-12-27T13:03:46.251Z',
          },
        },
        post: { create: { title: 'String', body: 'String' } },
      },
    },
  },
})
