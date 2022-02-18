export default function Table({ headers, footers=[], children }) {
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
          {
            footers.map(footer => <th key={footer}>{footer}</th>)
          }
        </tfoot>
        <tbody>
          {children}
        </tbody>
      </table>
    </>
  )
}
