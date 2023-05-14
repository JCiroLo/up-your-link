import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import useScroll from '../hooks/useScroll'
import classNames from 'classnames'

function Blog () {
  const { id } = useParams()
  const [post, loading] = usePost({ id, options: { join: { user: true } } })
  const [scrollableEl, setScrollableEl] = useState(null)

  const scrollableRef = useCallback(node => {
    setScrollableEl(node)
  }, [])

  const isScrolling = useScroll(scrollableEl)

  if (!id) {
    return <h1>Not found</h1>
  }

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <div className={classNames('post-page', { active: isScrolling })}>
      <div className='post-background-wrapper'>
        <img
          className='post-image'
          src={post.image}
          alt={`post_image:${post.title}`}
        />
        <div ref={scrollableRef} className='post-content'>
          <div className='post-landing'>
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            <div className='post-owner'>
              <img src={post.user.avatar} alt={post.user.name} />
              <p>{post.user.username}</p>
            </div>
            <div className='scroll-indicator' />
          </div>
          <div className='post-body'>
            <h2>{post.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              explicabo obcaecati consequuntur quasi! Ut accusamus, odit, iusto
              velit adipisci repellendus sit iure doloremque magnam ex esse
              facilis necessitatibus nam atque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae explicabo obcaecati
              consequuntur quasi! Ut accusamus, odit, iusto velit adipisci
              repellendus sit iure doloremque magnam ex esse facilis
              necessitatibus nam atque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae explicabo obcaecati consequuntur quasi!
              Ut accusamus, odit, iusto velit adipisci repellendus sit iure
              doloremque magnam ex esse facilis necessitatibus nam atque! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Beatae
              explicabo obcaecati consequuntur quasi! Ut accusamus, odit, iusto
              velit adipisci repellendus sit iure doloremque magnam ex esse
              facilis necessitatibus nam atque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae explicabo obcaecati
              consequuntur quasi! Ut accusamus, odit, iusto velit adipisci
              repellendus sit iure doloremque magnam ex esse facilis
              necessitatibus nam atque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae explicabo obcaecati consequuntur quasi!
              Ut accusamus, odit, iusto velit adipisci repellendus sit iure
              doloremque magnam ex esse facilis necessitatibus nam atque! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Beatae
              explicabo obcaecati consequuntur quasi! Ut accusamus, odit, iusto
              velit adipisci repellendus sit iure doloremque magnam ex esse
              facilis necessitatibus nam atque! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae explicabo obcaecati
              consequuntur quasi! Ut accusamus, odit, iusto velit adipisci
              repellendus sit iure doloremque magnam ex esse facilis
              necessitatibus nam atque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae explicabo obcaecati consequuntur quasi!
              Ut accusamus, odit, iusto velit adipisci repellendus sit iure
              doloremque magnam ex esse facilis necessitatibus nam atque!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
