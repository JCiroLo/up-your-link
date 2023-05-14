import { useState, useEffect } from 'react'
import debounce from 'just-debounce-it'

const useScrol = (element = window, threshold = 0) => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const isSupported = element && element.addEventListener

    if (!isSupported) return

    const scrollHandler = event => {
      const scrollPercent = Math.round(
        (event.target.scrollTop * 100) /
          (event.target.scrollHeight - window.innerHeight)
      )

      if (!isScrolling && scrollPercent > threshold) {
        debounce(setIsScrolling(true), 100)
      } else if (isScrolling && scrollPercent <= threshold) {
        debounce(setIsScrolling(false), 100)
      }
    }

    element.addEventListener('scroll', scrollHandler)

    return () => {
      element.removeEventListener('scroll', scrollHandler)
    }
  }, [element, isScrolling, threshold])

  return isScrolling
}

export default useScrol
