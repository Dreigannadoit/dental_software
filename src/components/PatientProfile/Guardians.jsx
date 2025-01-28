import { Checkbox, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { updatedPatientInfo } from '../../test_data'
import useAnimation from '../../hooks/useFormAnimate';
import ReactDOM from "react-dom";
import { MuiTelInput } from 'mui-tel-input';

const Guardians = ({ id = null }) => {
  const gaurdianInfo = updatedPatientInfo.find((p) => p.id === id);


  const [showAddGuardian, setShowAdddGuardian] = useState(false);

  const openAdddGuardian = () => setShowAdddGuardian(true);
  const closeAdddGuardian = () => setShowAdddGuardian(false);

  return (
    <div className="patient_profile_block gaurdians">

      {showAddGuardian && <AddGaurdian exitUser={closeAdddGuardian} />}
      <button className='main_btn_style' onClick={openAdddGuardian}>Add New Button</button>
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

const AddGaurdian = ({ exitUser }) => {
  const [ phoneNumber, setPhoneNumber ] = useState("");
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
    <div className={`form_container school_form_container glassmorphism shadow ${!isInitialized
      ? "" // No animation class applied until initialization
      : isVisible
        ? "enter-animation"
        : "exit-animation"
      }`}>
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form school_form glassmorphism shadow">
        <form action="">
          <h1>Add Guardian</h1>
          <div className="container">
            <div className="gname">
              <label htmlFor="gname">Gaurdian Name</label>
              <TextField
                id="outlined-basic"
                label="Gaurdian Name"
                variant="outlined"
                fullWidth
              />
            </div>

            <div className="grelationship">
              <label htmlFor="grelationship">Relationship</label>
              <TextField
                id="outlined-basic"
                label="e.g Father/Mother/Auntie"
                variant="outlined"
                fullWidth
              />
            </div>

            <div className="gnumber">
              <label htmlFor="gnumber">Phone Number</label>
              <MuiTelInput value={phoneNumber} onChange={(value) => setPhoneNumber(value)} fullWidth />
            </div>

            <div className="gemail">
              <label htmlFor="gemail">Gaurdian Email</label>
              <TextField
                id="outlined-basic"
                label="Gaurdian Email"
                variant="outlined"
                type="email"
                fullWidth
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

export default Guardians