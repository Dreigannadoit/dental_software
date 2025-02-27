import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { Textarea } from '@mui/joy';
import { TextField } from '@mui/material';
import useAnimation from '../../hooks/useFormAnimate';

const AddDentalCode = ({ exitUser }) => {
  const [price, setPrice] = useState("");
  const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) { // Only allow numbers and optional decimal points
      setPrice(value);
    }
  };

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
    <div className={`form_container procedureCodes_form_container glassmorphism shadow ${
      !isInitialized
        ? "" // No animation class applied until initialization
        : isVisible
        ? "enter-animation"
        : "exit-animation"
    }`}>
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form procedureCodes_form glassmorphism shadow">
        <form action="">
          <h1>Add Procedure Codes</h1>
          <div className="container">
            <div className="name">
              <label htmlFor="codeName">Code</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>


            <div className="price">
              <label htmlFor="priceName">Price</label>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="number" // Ensures only numbers can be entered
                value={price}
                onChange={handlePriceChange}
                InputProps={{
                  inputMode: "decimal", // Optimized keyboard on mobile devices
                  step: "0.01", // Allows decimals (optional)
                  min: "0", // Minimum value (optional)
                }}
              />
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

export default AddDentalCode