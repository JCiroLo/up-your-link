import { AuthProvider } from './auth/Provider'
import { ThemeProvider } from './theme/Provider'

function ProviderComposer ({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}

export default ProviderComposer
