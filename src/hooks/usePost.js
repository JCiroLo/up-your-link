import { useState, useEffect } from 'react'
import $Post from '../services/post'

const usePost = ({ id, userId, options } = {}) => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    $Post
      .get({ id, userId, options })
      .then(({ status, data }) => {
        if (status) {
          setPosts(data)
        } else {
          setError(data)
        }
      })
      .catch(({ data }) => {
        setError(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id, userId])

  return [posts, loading, error]
}

export default usePost
