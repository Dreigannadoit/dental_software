import { Textarea } from '@mui/joy';
import { FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import AnimatedButton from '../AnimatedButton';
import { File_Edit } from '../../assets/icons';

const Communications = ({ id = null }) => {
  const [ReferelCompleteSatus, setReferelCompleteSatus] = useState(null);
  const [dateCalled, setDateCalled] = useState(null);
  const [dateEmailed, setDateEmailed] = useState(null);

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
              value="Csdp Program Sy 2024 - 2025"
              disabled
              sx={{
                '& .MuiInputBase-input': {
                  color: '#000000', // Input text color
                  '&::placeholder': { color: '#000000' }, // Placeholder color (if placeholder is used)
                },
              }}
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
          <div className="date_clled">
            <label htmlFor="date_clled">Date Called</label>
            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
              <DatePicker
                value={dateCalled}
                onChange={(newValue) => setDateCalled(newValue)}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </div>
          <div className="date_emailed">
            <label htmlFor="date_emailed">Date Emailed</label>
            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
              <DatePicker
                value={dateEmailed}
                onChange={(newValue) => setDateEmailed(newValue)}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </div>
          <div className="created_by">
            <label htmlFor="created_by">Created By</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value="Super Admin"
              disabled
              sx={{
                '& .MuiInputBase-input': {
                  color: '#000000', // Input text color
                  '&::placeholder': { color: '#000000' }, // Placeholder color (if placeholder is used)
                },
              }}
            />

          </div>
          <div className="dental_issue">
            <label htmlFor="dental_issue">Dentail Issues</label>
            <Textarea
              size="lg"
              variant="outlined"
              sx={{
                borderColor: "rgb(158, 158, 158)",
                borderWidth: "1px",
                borderRadius: "5px",
                background: "transparent",
                width: "100%", // Full width
              }}
            />
          </div>
          <div className="notes">
            <label htmlFor="notes">Notes</label>
            <Textarea
              size="lg"
              variant="outlined"
              sx={{
                borderColor: "rgb(158, 158, 158)",
                borderWidth: "1px",
                borderRadius: "5px",
                background: "transparent",
                width: "100%", // Full width
              }}
            />
          </div>

          <button type="submit" className='main_btn_style' onSubmit={(e) => { e.preventDefault() }}>Save</button>
        </form>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Referral Complete</th>
              <th>School Year</th>
              <th>Current Dentist</th>
              <th>Date Called</th>
              <th>Created by</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="shadow">
              <td>Yes</td>
              <td>Csdp Program Sy 2024 - 2025</td>
              <td>Cinelli, Kristin L</td>
              <td>2025-01-15</td>
              <td>Super Admin</td>
              <td>
                <div>
                  <AnimatedButton
                    type="button"
                    classLabel="edit_patient"
                    label="Edit"
                    icon={File_Edit}
                    backgroundColor="#1E8631"
                    method={() => { console.log("button Clicked") }}
                  />

                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Communications