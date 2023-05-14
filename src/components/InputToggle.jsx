import classNames from 'classnames'
import React, { useState } from 'react'

function InputToggle ({ value = false, onChange = () => {} }) {
  const [isChecked, setIsChecked] = useState(!!value)

  const handleChange = e => {
    setIsChecked(e.target.checked)
    onChange(e.target.checked)
  }

  return (
    <div
      className={classNames('input-toggle-component', { checked: isChecked })}
    >
      <div className='toggle-track'>
        <input
          type='checkbox'
          value={isChecked}
          defaultChecked={isChecked}
          onChange={handleChange}
        />
        <span className='toggle-handle' />
      </div>
    </div>
  )
}

export default InputToggle
