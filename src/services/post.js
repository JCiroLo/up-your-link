import POSTS from '../dummies/posts'
import $User from './user'

const PostService = {
  async get ({ id, userId, options = {} } = {}) {
    const { join } = options

    let data = null

    if (id) {
      data = POSTS.find(post => post.id === id)
    } else if (userId) {
      data = POSTS.filter(post => post.userId === userId)
    } else {
      data = POSTS
    }

    if (!data) {
      return Promise.reject({
        status: false,
        message: 'error'
      })
    }

    if (join) {
      if (join.user) {
        if (Array.isArray(data)) {
          const posts = []
          for (const post of data) {
            posts.push({
              ...post,
              user: (await $User.get({ id: post.userId })).data
            })
          }
          data = posts
        } else {
          data = {
            ...data,
            user: (await $User.get({ id: data.userId })).data
          }
        }
      }
    }

    return Promise.resolve({
      status: true,
      data
    })
  }
}

export default PostService
