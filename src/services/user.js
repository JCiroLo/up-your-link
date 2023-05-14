import USER from '../dummies/users'

const UserService = {
  async signin ({ username, email }) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (!username || !email) {
      return {
        status: false,
        data: 'error'
      }
    }

    const user = USER.find(
      user => user.username === username && user.email === email
    )

    if (!user) {
      return {
        status: false,
        data: 'error'
      }
    }

    return {
      status: true,
      data: user
    }
  },
  async get ({ id, email }) {
    if (id) {
      const user = USER.find(user => user.id === id)

      if (user) {
        return Promise.resolve({
          status: true,
          data: user
        })
      }
    }

    if (email) {
      const user = USER.find(user => user.email === email)

      if (user) {
        return Promise.resolve({
          status: true,
          data: user
        })
      }
    }

    return Promise.resolve({
      status: false,
      data: 'error'
    })
  },
  getRandom () {
    return USER[Math.floor(Math.random() * USER.length)]
  }
}

export default UserService
