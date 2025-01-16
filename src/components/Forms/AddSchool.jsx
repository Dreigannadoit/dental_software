import { FormControl, TextField, Select as MuiSelect, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MultiSelectField from '../MultiSelectField'
import { gradelist } from '../../test_data'
import ReactDOM from "react-dom";
import useAnimation from '../../hooks/useFormAnimate';

const AddSchool = ({ exitUser }) => {
    const [type, setType] = useState()
    const [grade, setGrade] = useState()
    const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

    useEffect(() => {
        // Trigger enter animation when component mounts
        triggerEnter();
    }, [triggerEnter]);

    const handleGradeChange = (selected) => {
        setGrade(grade);
        console.log("Selected items:", grade);
    };

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
                    <h1>Add School</h1>
                    <div className="container">
                        <div className="name">
                            <label htmlFor="schooName">Name</label>
                            <TextField fullWidth id="outlined-basic" variant="outlined" />
                        </div>

                        <div className="type">
                            <label htmlFor="type">Type</label>
                            <FormControl fullWidth>
                                <MuiSelect
                                    labelId="onChange-label"
                                    value={type}
                                    onChange={(event) => setType(event.target.value)}
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

                        <div className="grade">
                            <label htmlFor="grade">Grade</label>
                            <MultiSelectField
                                closeMenuOnSelect={false}
                                options={gradelist}
                                onChange={handleGradeChange}
                                value={grade}

                            />
                        </div>

                        <div className="address">
                            <label htmlFor="address">Address</label>
                            <TextField fullWidth id="outlined-basic" variant="outlined" />
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

export default AddSchool