import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { fetchWithResponse } from '../data/fetcher'
export default function Register() {
  const firstName = useRef('')
  const lastName = useRef('')
  const username = useRef('')
  const password = useRef('')
  const router = useRouter()

  const submit = (event) => {
    event.preventDefault()
    const body = {
      username: username.current.value,
      password: password.current.value,
      first_name: firstName.current.value,
      last_name: lastName.current.value
    }
    
    fetchWithResponse('api/register', {
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
    <>
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            ref={firstName}
          ></input>
        </div>
      </div>
      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            ref={lastName}
          ></input>
        </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
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
          <button class="button is-link" onClick={submit}>Submit</button>
        </div>
        <div class="control">
          <Link href="/login">
            <button class="button is-link is-light">Cancel</button>
          </Link>
        </div>
      </div>
    </>
  )
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
