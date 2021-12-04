import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../components/form-elements/input'
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
    <div className="columns is-centered">
      <div className="column is-half">
        <form className="box">
          <h1 className="title">Welcome Back!</h1>
          <Input
            id="username"
            refEl={username}
            type="text"
            label="Username"
          />
          <Input
            id="password"
            refEl={password}
            type="password"
            label="Password"
          />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={submit}>Login</button>
            </div>
            <div className="control">
              <Link href="/register">
                <button className="button is-link is-light">Register</button>
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
