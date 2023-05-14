import React from 'react'
import usePost from '../hooks/usePost'
import Container from '../components/Container'
import Post from '../components/Post'

function Home () {
  const [posts] = usePost({ options: { join: { user: true } } })

  return (
    <div className='home-page'>
      <Container>
        <section className='home-landing'>
          <h1>UpYourLink</h1>
          <p>
            Explora el futuro hoy: Únete a nuestro blog de tecnología para
            descubrir las últimas tendencias y avances en el mundo digital.
          </p>
        </section>
        <section className='home-recent-posts'>
          <h2>Recientes</h2>
          {posts?.map(post => (
            <Post post={post} key={post.id}></Post>
          ))}
        </section>
      </Container>
    </div>
  )
}

export default Home
