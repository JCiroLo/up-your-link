import React from 'react'
import classNames from 'classnames'
import Button from './Button'
import Icon from './Icon'

function ModalHeader ({ title }) {
  return (
    <div className='modal-header'>
      <p className='modal-title'>{title}</p>
    </div>
  )
}

function ModalBody ({ children }) {
  return <div className='modal-body'>{children}</div>
}

function ModalFooter ({ children }) {
  return <div className='modal-footer'>{children}</div>
}

function Modal ({ show, size = 'medium', hideCloseButton, children, onClose }) {
  return (
    <div className={classNames('modal-component', [size], { show })}>
      <div className='modal-content'>
        <Button
          className={classNames('moda-close-button', { hide: hideCloseButton })}
          icon={<Icon name='times' />}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
