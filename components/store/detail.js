export default function Detail({ store }) {
  return (
    <section className="hero is-primary mb-3">
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item">
                <a className="button is-primary is-inverted">
                  Subscribe to Store
                </a>
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
