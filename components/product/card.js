import Link from 'next/link'

export function ProductCard({ product }) {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title">
            <Link href={`/products/${product.id}`}><a>{product.name} - ${product.price}</a></Link>
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  )
}
