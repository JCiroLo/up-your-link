import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import $User from '../services/user'
import { AUTH } from '../store/types'

import Input from '../components/Input'
import Icon from '../components/Icon'
import Button from '../components/Button'

function Signin () {
  const navigate = useNavigate()
  const [, dispatch] = useAuth()
  const [loading, setLoading] = useState(false)

  const randomUser = $User.getRandom()

  const [user, setUser] = useState({
    username: randomUser.username,
    email: randomUser.email
  })

  const handleInputChange = event => {
    setUser(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    setLoading(true)

    const { status, data } = await $User.signin({
      username: user.username,
      email: user.email
    })

    if (status) {
      dispatch({ type: AUTH.SET_USER, payload: data })
      navigate('/')
    }

    setLoading(false)
  }

  return (
    <div className='signin-page'>
      <section>
        <form onSubmit={handleFormSubmit}>
          <h1>Iniciar sesión</h1>

          <Input
            type='text'
            name='username'
            placeholder='Nombre de usuario'
            prefixElement={<Icon name='user' />}
            value={user.username}
            onChange={handleInputChange}
          />

          <Input
            type='email'
            name='email'
            placeholder='Correo'
            prefixElement={<Icon name='at' />}
            value={user.email}
            onChange={handleInputChange}
          />

          <Button variant='filled' loading={loading} submit>
            Iniciar sesión
          </Button>
        </form>
      </section>
    </div>
  )
}

export default Signin
