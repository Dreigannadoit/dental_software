import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { Textarea } from '@mui/joy';
import { TextField } from '@mui/material';
import useAnimation from '../../hooks/useFormAnimate';

const AddDentalCode = ({ exitUser, procedureCode, isEdit }) => {
  const [code, setCode] = useState('');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState('');
  const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

  useEffect(() => {
    if (procedureCode) {
      setCode(procedureCode.code || '');
      setPrice(procedureCode.price || '');
      setDescription(procedureCode.description || '');
    } else {
      setCode('');
      setPrice('');
      setDescription('');
    }
  }, [procedureCode]);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) { // Only allow numbers and optional decimal points
      setPrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { code, price, description };

    if (isEdit) {
      console.log('Editing procedure code:', formData);
    } else {
      console.log('Adding procedure code:', formData);
    }

    exitUser();
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
    <div className={`form_container procedureCodes_form_container glassmorphism shadow ${!isInitialized ? "" : isVisible ? "enter-animation" : "exit-animation"
      }`}>
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form procedureCodes_form glassmorphism shadow">
        <form onSubmit={handleSubmit}>
          <h1>{isEdit ? "Edit Procedure Code" : "Add Procedure Code"}</h1>
          <div className="container">
            <div className="name">
              <label htmlFor="codeName">Code</label>
              <TextField
                fullWidth
                value={code}
                onChange={(e) => setCode(e.target.value)}
                id="outlined-basic"
                variant="outlined"
              />
            </div>

            <div className="price">
              <label htmlFor="priceName">Price</label>
              <TextField
                fullWidth
                value={price}
                onChange={handlePriceChange}
                id="outlined-basic"
                variant="outlined"
                type="number"
                InputProps={{
                  inputMode: "decimal",
                  step: "0.01",
                  min: "0",
                }}
              />
            </div>

            <div className="description full">
              <label htmlFor="description">Description</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
}

export default AddDentalCode