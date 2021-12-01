import { useRouter } from 'next/router'
import Link from 'next/link'
import { useRef } from 'react'
import Layout from '../components/layout'

export default function Login() {
  const username = useRef()
  const password = useRef()
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()

    return fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem("token", res.token)
          router.replace("/")
        }
      })
  }
  
  return (
    <main className="container--login">

      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Level Up</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputUsername"> Username </label>
            <input ref={username} type="text" id="username" className="form-control" placeholder="Username address" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
          </fieldset>
          <fieldset style={{
            textAlign: "center"
          }}>
            <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link href="/register"><a>Not a member yet?</a></Link>
      </section>
    </main>
  )
}

Login.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
