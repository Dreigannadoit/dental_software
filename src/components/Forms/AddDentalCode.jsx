import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import useAnimation from "../../hooks/useFormAnimate";

const AddDentalCode = ({ exitUser }) => {
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
    <div
      className={`form_container dentalCode_form_container glassmorphism shadow ${
        !isInitialized
          ? "" // No animation class applied until initialization
          : isVisible
          ? "enter-animation"
          : "exit-animation"
      }`}
    >
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form dentalCode_form glassmorphism shadow">
        <form>
          <h1>Add Dental Code</h1>
          <div className="container">
            <div className="name full">
              <label htmlFor="codeName">Code</label>
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
                  width: "100%",
                }}
              />
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
};

export default AddDentalCode;

