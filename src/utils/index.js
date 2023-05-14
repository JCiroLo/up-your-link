import { Buffer } from 'buffer'
import sassConfig from '../assets/scss/_config.scss'

export const sassVariables = () => {
  const variables = {
    colors: {
      dark: {},
      light: {}
    }
  }

  for (const key in sassConfig) {
    if (key.startsWith('color-dark')) {
      const newKey = key.replace('color-dark-', '')
      variables.colors.dark[newKey] = sassConfig[key]
    } else if (key.startsWith('color-light')) {
      const newKey = key.replace('color-light-', '')
      variables.colors.light[newKey] = sassConfig[key]
    }
  }

  return variables
}

export const Base64 = {
  encode (string) {
    return Buffer.from(string).toString('base64')
  },
  decode (string) {
    return Buffer.from(string, 'base64').toString()
  }
}
