import React, { useState } from 'react'
import classNames from 'classnames'
import useTheme from '../hooks/useTheme'
import useAuth from '../hooks/useAuth'
import { THEME, AUTH } from '../store/types'

import Input from './Input'
import Icon from './Icon'
import Button from './Button'
import Modal from './Modal'
import InputToggle from './InputToggle'

function Header () {
  const [showSettings, setShowSettings] = useState(false)
  const [theme, dispatchTheme] = useTheme()
  const [auth, dispatchAuth] = useAuth()

  const isAuthenticated = !!auth.user

  const handleSettingsModal = value => {
    setShowSettings(value)
  }

  const handleDarkMode = value => {
    dispatchTheme({ type: THEME.SWITCH_THEME, payload: value })
  }

  const handleSidebarStatus = () => {
    dispatchTheme({ type: THEME.SWITCH_SIDEBAR })
  }

  return (
    <header className={classNames('header-component')}>
      <div className='sidebar-toggler'>
        <Button
          icon={<Icon name='bars' />}
          onClick={handleSidebarStatus}
        ></Button>
      </div>
      <div className='header-search-bar'>
        <Input
          type='text'
          placeholder='Buscar'
          prefixElement={<Icon name='search' />}
          sufixElement={<Icon name='cog' />}
        />
      </div>
      <nav>
        {isAuthenticated ? (
          <>
            <Button icon={<Icon name='plus' />}></Button>
            <Button
              icon={<Icon img={auth.user.avatar} />}
              onClick={() => handleSettingsModal(true)}
            ></Button>
          </>
        ) : (
          <>
            <Button to='/signin' variant='filled' size='small'>
              Sign in
            </Button>
            <Button
              icon={<Icon name='ellipsis-v' />}
              onClick={() => handleSettingsModal(true)}
            ></Button>
          </>
        )}
      </nav>

      <Modal show={showSettings} onClose={() => handleSettingsModal(false)}>
        <Modal.Header title='Preferencias' />
        <Modal.Body>
          <div className='header-settings-content'>
            <section>
              <span className='option-label'>
                <Icon name='moon' />
                Modo oscuro
              </span>
              <InputToggle value={theme.darkMode} onChange={handleDarkMode} />
            </section>
            {isAuthenticated && (
              <>
                <section
                  className='option-button'
                  onClick={() => {
                    dispatchAuth({ type: AUTH.CLEAR_USER })
                    handleSettingsModal(false)
                  }}
                >
                  <span className='option-label'>
                    <Icon name='power-off' />
                    Cerrar sesión
                  </span>
                </section>
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSettingsModal(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </header>
  )
}

export default Header
