import { FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'

const Communications = () => {
  const [ReferelCompleteSatus, setReferelCompleteSatus] = useState(null);

  return (
    <div className="communications patient_profile_block">
      <div className="form">
        <form action="">
          <div className="referel_complete">
            <label htmlFor="referel_complete">Referel_Complete</label>
            <FormGroup>
              <RadioGroup
                row
                value={ReferelCompleteSatus ? "yes" : "no"}
                onChange={(event) => setReferelCompleteSatus(event.target.value === "yes")}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormGroup>
          </div>
          <div className="schoolyear">
            <label htmlFor="schoolyear">School Year</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder=""
            />
          </div>
          <div className="current_dentist">
            <label htmlFor="current_dentist">Current Dentist</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder=""
            />
          </div>
          <div className="date_clled"></div>
          <div className="date_emailed"></div>
          <div className="created_by"></div>
          <div className="dental_issue"></div>
          <div className="notes"></div>
        </form>
      </div>
    </div>
  )
}

export default Communications