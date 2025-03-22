import { FormControl, TextField, Select as MuiSelect, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MultiSelectField from '../MultiSelectField'
import { gradelist } from '../../test_data'
import ReactDOM from "react-dom";
import useAnimation from '../../hooks/useFormAnimate';

const AddSchool = ({ exitUser, school, isEdit }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [grade, setGrade] = useState([]);
    const [address, setAddress] = useState('');

    const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

    useEffect(() => {
        // Trigger enter animation when component mounts
        triggerEnter();
    }, [triggerEnter]);

    // Initialize form with school data when in edit mode
    useEffect(() => {
        if (school) {
            setName(school.name || '');
            setType(school.type || '');
            setGrade(school.grade || []);
            setAddress(school.address || '');
        } else {
            // Reset form for add mode
            setName('');
            setType('');
            setGrade([]);
            setAddress('');
        }
    }, [school]);

    const handleGradeChange = (selected) => {
        setGrade(selected); // Correctly update grade selection
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, type, grade, address };

        if (isEdit) {
            // Handle edit logic (e.g., API call)
            console.log('Editing school:', formData);
        } else {
            // Handle add logic
            console.log('Adding school:', formData);
        }

        exitUser();
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
                <form action={handleSubmit}>
                    <h1>{isEdit ? "Edit School" : "Add School"}</h1>
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