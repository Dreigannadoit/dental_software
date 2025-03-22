import { FormControl, TextField, Select as MuiSelect, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MultiSelectField from '../MultiSelectField'
import { gradelist } from '../../test_data'
import ReactDOM from "react-dom";
import { Textarea } from '@mui/joy';
import useAnimation from '../../hooks/useFormAnimate';

const AddProgram = ({ exitUser, program, isEdit }) => {
  const [name, setName] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [description, setDescription] = useState('');
  const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

  useEffect(() => {
    // Trigger enter animation when component mounts
    triggerEnter();
  }, [triggerEnter]);

  useEffect(() => {
    if (program) {
      setName(program.name || '');
      setStartMonth(program.start_month || '');
      setStartYear(program.start_year || '');
      setEndMonth(program.end_month || '');
      setEndYear(program.end_year || '');
      setDescription(program.description || '');
    } else {
      setName('');
      setStartMonth('');
      setStartYear('');
      setEndMonth('');
      setEndYear('');
      setDescription('');
    }
  }, [program]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      start_month: startMonth,
      start_year: startYear,
      end_month: endMonth,
      end_year: endYear,
      description
    };

    if (isEdit) {
      console.log('Editing program:', formData);
    } else {
      console.log('Adding program:', formData);
    }

    exitUser();
  };

  const handleCancel = () => {
    triggerExit(() => {
      if (exitUser) exitUser(); // Execute callback after exit animation completes
    });
  };

  return ReactDOM.createPortal(
    <div className={`form_container program_form_container glassmorphism shadow ${!isInitialized
        ? "" // No animation class applied until initialization
        : isVisible
          ? "enter-animation"
          : "exit-animation"
      }`}>
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form program_form glassmorphism shadow">
        <form onSubmit={handleSubmit}>
          <h1>{isEdit ? "Edit Program" : "Add Program"}</h1>
          <div className="container">
            <div className="name full">
              <label htmlFor="schooName">Name</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="school_year_start_month">
              <label htmlFor="school_year_start_month">School Year Start</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="onChange-label"
                  value={startMonth}
                  onChange={(event) => setStartMonth(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Month
                  </MenuItem>
                  <MenuItem value="January">January</MenuItem>
                  <MenuItem value="February">February</MenuItem>
                  <MenuItem value="March">March</MenuItem>
                  <MenuItem value="April">April</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  <MenuItem value="June">June</MenuItem>
                  <MenuItem value="July">July</MenuItem>
                  <MenuItem value="August">August</MenuItem>
                  <MenuItem value="September">September</MenuItem>
                  <MenuItem value="October">October</MenuItem>
                  <MenuItem value="November">November</MenuItem>
                  <MenuItem value="December">December</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>

            <div className="school_year_start_year">
              <label htmlFor="school_year_start_year"></label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="shool_year_end_month">
              <label htmlFor="shool_year_end_month">School Year End</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="onChange-label"
                  value={endMonth}
                  onChange={(event) => setEndMonth(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Type
                  </MenuItem>
                  <MenuItem value="school">School</MenuItem>
                  <MenuItem value="facility">Facility</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>

            <div className="school_year_end_year">
              <label htmlFor="school_year_end_year"></label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="description full">
              <label htmlFor="description">Description</label>
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
          </div>

          <div className="form-buttons">
            <button
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

export default AddProgram