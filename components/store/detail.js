import Link from 'next/link'

export default function Detail({ store, isOwner }) {
  return (
    <section className="hero is-primary mb-3">
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item">
                {
                  isOwner ?
                    <div className="buttons">
                      <Link href={`/stores/${store.id}/edit`}>
                        <a className="button is-primary is-inverted">
                          Edit Store
                        </a>
                      </Link>
                      <a className="button is-primary is-inverted">
                        Add a Product
                      </a>
                    </div>
                    :
                    <a className="button is-primary is-inverted">
                      Subscribe to Store
                    </a>
                }
              </span>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <p className="title">
          {store.name}
        </p>
        <p className="subtitle">
          {store.description}
        </p>
      </div>
    </section>
  )
}
