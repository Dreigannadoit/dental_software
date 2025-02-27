import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { Textarea } from '@mui/joy';
import { FormControl, TextField, Select as MuiSelect, MenuItem } from '@mui/material'
import useAnimation from '../../hooks/useFormAnimate';

const AddUsers = ({ exitUser }) => {
  const [user, setUser] = useState()
  const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

  useEffect(() => {
    // Trigger enter animation when component mounts
    triggerEnter();
  }, [triggerEnter]);

  const handleCancel = () => {
    triggerExit(() => {
      if (exitUser) exitUser(); // Execute callback after exit animation completes
    });
  };


  return ReactDOM.createPortal(
    <div className={`form_container users_form_container glassmorphism shadow ${
      !isInitialized
        ? "" // No animation class applied until initialization
        : isVisible
        ? "enter-animation"
        : "exit-animation"
    }`}> 
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form users_form glassmorphism shadow">
        <form action="">
          <h1>Add User</h1>
          <div className="container">
            <div className="name">
              <label htmlFor="name">Name</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="username">
              <label htmlFor="username">Username</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="role">
              <label htmlFor="role">Role</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="onChange-label"
                  value={user}
                  onChange={(event) => setUser(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Type
                  </MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="VA-Admin">VA-Admin</MenuItem>
                </MuiSelect>
              </FormControl>
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

export default AddUsers