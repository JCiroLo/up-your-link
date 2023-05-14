import { useMemo } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Profile from '../pages/Profile'
import Post from '../pages/Post'
import useAuth from '../hooks/useAuth'

const META = {
  REQUIRES_AUTH: Symbol('REQUIRES_AUTH'),
  HIDE_FOR_AUTH: Symbol('HIDE_FOR_AUTH')
}

function PrivateRoute ({
  component: Component,
  isAuthenticated = false,
  meta = [],
  ...props
}) {
  if (meta.includes(META.REQUIRES_AUTH) && !isAuthenticated) {
    return <Navigate to='/signin' />
  }
  if (meta.includes(META.HIDE_FOR_AUTH) && isAuthenticated) {
    return <Navigate to='/' />
  }
  return <Component {...props} />
}

function Router () {
  const [auth] = useAuth()
  const isAuthenticated = useMemo(() => !!auth.user, [auth])

  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/signin',
      element: (
        <PrivateRoute
          component={Signin}
          isAuthenticated={isAuthenticated}
          meta={[META.HIDE_FOR_AUTH]}
        />
      )
    },
    {
      path: '/post/:id',
      element: <Post />
    },
    {
      path: '/profile',
      element: (
        <PrivateRoute
          component={Profile}
          isAuthenticated={isAuthenticated}
          meta={[META.REQUIRES_AUTH]}
        />
      )
    }
  ])
}

export default Router
