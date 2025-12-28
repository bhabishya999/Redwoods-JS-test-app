import { users, user, createUser, updateUser, deleteUser } from './users'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        email: 'String1236256',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-12-28T15:16:48.005Z',
      },
    })

    expect(result.email).toEqual('String1236256')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2025-12-28T15:16:48.005Z'))
  })

  scenario('updates a user', async (scenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { email: 'String44774242' },
    })

    expect(result.email).toEqual('String44774242')
  })

  scenario('deletes a user', async (scenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
