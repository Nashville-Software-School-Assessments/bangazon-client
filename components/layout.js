import Head from 'next/head'
import { useEffect } from 'react'
// import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <main className="container">{children}</main>
    </>
  )
}
