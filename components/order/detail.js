export default function CartDetail({cart}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tfoot>
        <th>Total</th>
        <th>{cart.total}</th>
        <th></th>
      </tfoot>
      <tbody>
        {
          cart.products?.map(product => {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>Remove</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
