import React from 'react'
import useAuth from '../hooks/useAuth'
import usePost from '../hooks/usePost'

import Container from '../components/Container'
import Button from '../components/Button'
import Post from '../components/Post'

function Profile () {
  const [auth] = useAuth()
  const [posts, loading, error] = usePost({ userId: auth.user.id })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error :(</p>
  }

  return (
    <div className='profile-page'>
      <div className='profile-cover-image'>
        <img src={auth.user.coverImage} alt='cover_image' />
        <Container>
          <h1>{auth.user.username}</h1>
        </Container>
      </div>
      <Container>
        <div className='profile-info'>
          <section className='profile-posts'>
            {posts.map(post => (
              <Post key={post.id} post={post} hideuser />
            ))}
          </section>
          <section className='profile-summary'>
            <div className='profile-avatar'>
              <img src={auth.user.avatar} alt='profile_avatar' />
            </div>
            <div className='profile-description'>
              <p>{auth.user.description}</p>
            </div>
            <div className='profile-actions'>
              <Button variant='filled'>Seguir</Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}

export default Profile
