import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <Component {...pageProps} />
    </div>
  )
}