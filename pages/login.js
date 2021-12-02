import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { fetchWithResponse } from '../data/fetcher'

export default function Login() {
  const username = useRef('')
  const password = useRef('')
  const router = useRouter()

  const submit = (event) => {
    event.preventDefault()
    const body = {
      username: username.current.value,
      password: password.current.value,
    }

    fetchWithResponse('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((res) => {
      localStorage.setItem('token', res.token)
      router.push('/')
    })
  }

  return (
    <div class="columns is-centered">
      <div class="column is-half">
        <form class="box">
          <h1 class="title">Welcome Back!</h1>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
                ref={username}
              ></input>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                ref={password}
              ></input>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" onClick={submit}>Login</button>
            </div>
            <div class="control">
              <Link href="/register">
                <button class="button is-link is-light">Register</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
