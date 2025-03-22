import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { Textarea } from '@mui/joy';
import { FormControl, TextField, Select as MuiSelect, MenuItem } from '@mui/material'
import useAnimation from '../../hooks/useFormAnimate';

const AddUsers = ({ exitUser, user, isEdit }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setUsername(user.username || '');
      setEmail(user.email || '');
      setRole(user.role || '');
    } else {
      setName('');
      setUsername('');
      setEmail('');
      setRole('');
    }
  }, [user]);

  useEffect(() => {
    // Trigger enter animation when component mounts
    triggerEnter();
  }, [triggerEnter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, username, email, role };
    
    if (isEdit) {
      console.log('Editing user:', formData);
    } else {
      console.log('Adding user:', formData);
    }
    
    exitUser();
  };

  const handleCancel = () => {
    triggerExit(() => {
      if (exitUser) exitUser(); // Execute callback after exit animation completes
    });
  };


  return ReactDOM.createPortal(
    <div className={`form_container users_form_container glassmorphism shadow ${
      !isInitialized ? "" : isVisible ? "enter-animation" : "exit-animation"
    }`}> 
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form users_form glassmorphism shadow">
        <form onSubmit={handleSubmit}>
          <h1>{isEdit ? "Edit User" : "Add User"}</h1>
          <div className="container">
            <div className="name">
              <label htmlFor="name">Name</label>
              <TextField 
                fullWidth 
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="outlined-basic" 
                variant="outlined" 
              />
            </div>

            <div className="username">
              <label htmlFor="username">Username</label>
              <TextField 
                fullWidth 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="outlined-basic" 
                variant="outlined" 
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <TextField 
                fullWidth 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic" 
                variant="outlined" 
                type="email"
              />
            </div>

            <div className="role">
              <label htmlFor="role">Role</label>
              <FormControl fullWidth>
                <MuiSelect
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Role
                  </MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="VA-Admin">VA-Admin</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
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
  );
}

export default AddUsers