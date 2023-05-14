import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Input ({ prefixElement, sufixElement, className, ...props }) {
  return (
    <div
      className={classNames(className, 'input-component', {
        'with-prefix': !!prefixElement,
        'with-sufix': !!sufixElement
      })}
    >
      {prefixElement && <div className='prefix-element'>{prefixElement}</div>}
      <input {...props} />
      {sufixElement && <div className='sufix-element'>{sufixElement}</div>}
    </div>
  )
}

Input.propTypes = {
  prefixElement: PropTypes.element,
  sufixElement: PropTypes.element,
  className: PropTypes.string
}

export default Input
