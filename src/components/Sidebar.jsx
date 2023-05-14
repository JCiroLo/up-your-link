import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import useImage from '../hooks/useImage'
import useAuth from '../hooks/useAuth'

import Icon from './Icon'

function Sidebar () {
  const [auth] = useAuth()
  const [theme] = useTheme()
  const image = useImage()

  const isAuthenticated = !!auth.user

  return (
    <aside
      className={classNames('sidebar-component', {
        active: theme.sidebarStatus
      })}
    >
      <div className={classNames('sidebar-brand', { active: theme.darkMode })}>
        <img
          className='brand-logo-dark'
          src={image('favicon-dark.png')}
          alt='logo_image'
        />
        <img
          className='brand-logo-light'
          src={image('favicon-light.png')}
          alt='logo_image'
        />
      </div>
      <nav>
        <NavLink to='/'>
          <Icon name='home' />
          <span>Inicio</span>
        </NavLink>
        {isAuthenticated && (
          <>
            <NavLink to='/profile'>
              <Icon name='user' />
              <span>Perfil</span>
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  )
}

export default Sidebar
