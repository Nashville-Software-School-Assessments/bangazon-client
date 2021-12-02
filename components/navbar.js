import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const getLoggedInButtons = () => {
    return (
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Profile
          </a>
          <div class="navbar-dropdown">
            
            <hr class="navbar-divider"></hr>
            <a className="navbar-item" onClick={
              () => {
                localStorage.removeItem('token')
                setIsLoggedIn(false)
              }}
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    )
  }

  const getLoggedOutButtons = () => {
    return (
      <div className="navbar-item">
        <div className="buttons">
          <Link href="/register">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
          </Link>
          <Link href="/login">
            <a className="button is-light">
              Log in
            </a>
          </Link>
        </div>
      </div>
    )
  }

  return (

    <nav className="navbar mb-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link href="/products"><a className="navbar-item">Products</a></Link>
          <Link href="/stores"><a className="navbar-item">Stores</a></Link>
        </div>
        <div className="navbar-end">
          {
            isLoggedIn ? getLoggedInButtons() : getLoggedOutButtons()
          }
        </div>
      </div>
    </nav>
  )
}
