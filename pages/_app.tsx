import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import LayoutWrapper from '../components/layout'

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
