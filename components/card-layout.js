export default function CardLayout({ title, children }) {
  const [content, footer] = children
  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-6">
        <div className="card">
          <header className="card-header">
            <h3 className="card-header-title">
              {title}
            </h3>
          </header>
          <div className="card-content">
            <div className="content">
              {content}
            </div>
          </div>
          <footer className="card-footer">
            {footer}
          </footer>
        </div>
      </div>
    </div>
  )
}
