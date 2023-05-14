import PropTypes from 'prop-types'
import classNames from 'classnames'

function Icon ({
  name,
  img,
  type = 'fas',
  fixed = true,
  spin = false,
  className
}) {
  return img ? (
    <img
      className={classNames(className, 'icon-component')}
      src={img}
      alt='icon_image'
    />
  ) : (
    <i
      className={classNames(className, 'icon-component', type, `fa-${name}`, {
        'fa-fw': fixed,
        'fa-spin': spin
      })}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  type: PropTypes.oneOf(['fas', 'far', 'fad', 'fal', 'fab']),
  fixed: PropTypes.bool,
  spin: PropTypes.bool,
  className: PropTypes.string
}

export default Icon
