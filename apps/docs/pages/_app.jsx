import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/docs')
    }
  }, [router])

  return <Component {...pageProps} />
}
