import { Checkbox } from '@mui/material'
import React from 'react'
import { updatedPatientInfo } from '../../test_data'

const Guardians = ({ id = null }) => {
  const gaurdianInfo = updatedPatientInfo.find((p) => p.id === id);

  return (
    <div className="patient_profile_block gaurdians">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Relationship</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Primary</th>
            </tr>
          </thead>
          <tbody>
            <tr className="shadow">
              <td>{gaurdianInfo.id}</td>
              <td>{gaurdianInfo.parent_gauridian}</td>
              <td>{gaurdianInfo.parent_gauridian_relationship}</td>
              <td>{gaurdianInfo.parent_gauridian_phoneNumber}</td>
              <td>{gaurdianInfo.parent_gauridian_email}</td>
              <td>
                <Checkbox inputProps={{ 'aria-label': 'Email Checkbox' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Guardians