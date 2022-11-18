import Header from '../components/header'
import { sheet } from '../css-in-js'
import '../styles/globals.css'
import styles from '../styles/RootLayout.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{sheet.ssrData}</style>
      </head>
      <body>
        <main className={styles.main}>
          <Header />
          <div className={styles.page}>{children}</div>
        </main>
      </body>
    </html>
  )
}
