import React from 'react'

const RowsPerPage = ({ rowsPerPage, handleRowsPerPageChange }) => {
  return (
    <div className="rows_per_page">
        <label>
            Rows per page:
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {[5, 10, 20, 50].map((value) => (
                <option key={value} value={value}>{value}</option>
            ))}
            </select>
        </label>
    </div>
  )
}

export default RowsPerPage