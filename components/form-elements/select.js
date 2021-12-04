export function Select({ refEl, options, title, addlClass = "" }) {
  return (
    <div className="field">
      <div className={`select ${addlClass}`}>
        <select ref={refEl}>
          <option value="">{title}</option>
          {
            options.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}
