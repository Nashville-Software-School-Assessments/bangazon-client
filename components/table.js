export default function Table({ headers, footers = [], children }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {
              headers.map(header => <th key={header}>{header}</th>)
            }
          </tr>
        </thead>
        <tfoot>
          <tr>
            {
              footers.map(footer => <th key={footer}>{footer}</th>)
            }
          </tr>
        </tfoot>
        <tbody>
          {children}
        </tbody>
      </table>
    </>
  )
}
