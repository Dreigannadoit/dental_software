import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import AnimatedButton from '../AnimatedButton';
import { File_Edit } from '../../assets/icons';

const ProgramParticipants = () => {
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [active, setActive] = useState("");

  return (
    <div className="program_participants patient_profile_block">
      <div className="form">
        <form action="" onSubmit={(e) => {e.preventDefault()}}>
          <div className="school">
            <label htmlFor="school">School</label>
            <FormControl fullWidth>
              <Select
                value={school}
                onChange={(event) => setSchool(event.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="school 1">School 1</MenuItem>
                <MenuItem value="school 2">School 2</MenuItem>
                <MenuItem value="school 3">School 3</MenuItem>
                <MenuItem value="school 4">School 4</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="school_year">
            <label htmlFor="school_year">School Year</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder=""
            />
          </div>

          <div className="grade">
            <label htmlFor="grade">Grade</label>
            <FormControl fullWidth>
              <Select
                value={grade}
                onChange={(event) => setGrade(event.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="grade 1">Grade 1</MenuItem>
                <MenuItem value="grade 2">Grade 2</MenuItem>
                <MenuItem value="grade 3">Grade 3</MenuItem>
                <MenuItem value="grade 4">Grade 4</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="room">
            <label htmlFor="room">Room</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder=""
            />
          </div>

          <div className="teacher">
            <label htmlFor="teacher">Teacher</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder=""
            />
          </div>

          <div className="active">
            <label htmlFor="active">Active</label>
            <FormControl fullWidth>
              <Select
                value={active}
                onChange={(event) => setActive(event.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <button type="submit" className='save_btn' onSubmit={(e) => {e.preventDefault()}}>Save</button>
        </form>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Last Attended</th>
              <th>School</th>
              <th>Grade</th>
              <th>Teacher</th>
              <th>Status</th>
              <th>Partipated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="shadow">
              <td>Csdp Program Sy 2024 - 2025</td>
              <td>BAKER ELEMENTARY SCHOOL</td>
              <td>2</td>
              <td>Cinelli, Kristin L</td>
              <td>Active</td>
              <td>No</td>
              <td>
                <div>
                  <AnimatedButton
                    type="button"
                    classLabel="edit_patient"
                    label="Edit"
                    icon={File_Edit}
                    backgroundColor="#1E8631"
                    method={() => {console.log("button Clicked")}}
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

export default ProgramParticipants