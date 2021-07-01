import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)