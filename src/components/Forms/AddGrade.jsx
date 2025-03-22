import { FormControl, TextField, Select as MuiSelect, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MultiSelectField from '../MultiSelectField'
import { gradelist } from '../../test_data'
import ReactDOM from "react-dom";
import { Textarea } from '@mui/joy';
import useAnimation from '../../hooks/useFormAnimate';

const AddGrade = ({ exitUser, grade, isEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

  useEffect(() => {
    // Trigger enter animation when component mounts
    triggerEnter();
  }, [triggerEnter]);
  // Initialize form with grade data when in edit mode
  useEffect(() => {
    if (grade) {
      setName(grade.name || '');
      setDescription(grade.description || '');
    } else {
      // Reset form for add mode
      setName('');
      setDescription('');
    }
  }, [grade]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, description };

    if (isEdit) {
      // Handle edit logic (e.g., API call)
      console.log('Editing grade:', formData);
    } else {
      // Handle add logic
      console.log('Adding grade:', formData);
    }

    exitUser();
  };

  const handleCancel = () => {
    triggerExit(() => {
      if (exitUser) exitUser();
    });
  };

  return ReactDOM.createPortal(
    <div className={`form_container grade_form_container glassmorphism shadow ${!isInitialized
        ? "" // No animation class applied until initialization
        : isVisible
          ? "enter-animation"
          : "exit-animation"
      }`}>
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form grade_form glassmorphism shadow">
        <form action={handleSubmit}>
          <h1>Add Grade</h1>
          <div className="container">
            <div className="name full">
              <label htmlFor="schooName">Name</label>
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

export default AddGrade