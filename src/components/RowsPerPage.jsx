import React from 'react'

const RowsPerPage = ({ rowsPerPage, handleRowsPerPageChange }) => {
  return (
    <div className="rows_per_page">
        <label>
            Show
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {[5, 10, 20, 50].map((value) => (
                <option key={value} value={value}>{value}</option>
            ))}
            </select>
            Entries
        </label>
    </div>
  )
}

export default RowsPerPage