import { Box, Chip, FormControl, FormControlLabel, FormGroup, MenuItem, OutlinedInput, Radio, RadioGroup, Select as MuiSelect , TextareaAutosize, TextField, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import ReactDOM from "react-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CssVarsProvider, Textarea } from "@mui/joy";
import { MuiTelInput } from "mui-tel-input";
import MultiSelectField from "../MultiSelectField";
import { allergiedList, illnessList } from "../../test_data";

const AddPatients = ({ exitUser }) => {
  const [ gender, setGender ] = useState(""); // State to track the selected gender
  const [ race, setRace ] = useState("");
  const [ selectedDate, setSelectedDate ] = useState(null);
  const [ insurance, setInsurance ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ school, setSchool ] = useState("");
  const [ grade, setGrade ] = useState("");

  const [ hasRegularCheckupDoctor, setHasRegularCheckupDoctor ] = useState(null);
  const [ hasRegularCheckupDentist, setHasRegularCheckupDentist ]  = useState(null);
  const [ hasSigned, setHasSigned ] = useState(null);
  const [ hasConsented, setHasConsented ] = useState(null);

  const [ alergieName, setAlergieName ] = useState([]);
  const [ illnessName, setIllnessName ] = useState([]);
  const [ patientPhotoFile, setPatientPhotoFile ] = useState();

  const handlePatientPhotoFileChange = (event) => {
    console.log(event.target.files);
    setPatientPhotoFile(URL.createObjectURL(event.target.files[0]));
  }

  const handleAlergieNameChange = (selected) => {

    setAlergieName(alergieName);
    
    console.log("Selected items:", alergieName);
  };

  const handleDoctorCheckupChange = (event) => {
    setHasRegularCheckupDoctor(event.target.value === "yes");
    console.log("Has Regular Checkup:", event.target.value === "yes");
  };

  const handleDentistCheckupChange = (event) => {
    setHasRegularCheckupDentist(event.target.value === "yes");
    console.log("Has Regular Checkup:", event.target.value === "yes");
  };

  const handleIlnessNameChange = (selected) => {
    setIllnessName(illnessName);
    console.log("Selected items:", illnessName);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    // Add your form submission logic here
  };

  const handleCancel = () => {
    if (exitUser) exitUser(); // Close the form if a handler is provided
  };

  return ReactDOM.createPortal(
    <div className="form_containter new_patient_containter f-center glassmorphism shadow">
      <button className="form_background" onClick={handleCancel}></button>
      <div className="new_patients glassmorphism shadow">
        <form action="">
          <h1>New Patient</h1>
          <br />
          <div className="patient_image set_image_container">
            <h2>Add Image</h2>
            <div className="set_image">
              <label htmlFor="patient_image">200 x 200</label>
              <input type="file" onChange={handlePatientPhotoFileChange} />
              <img src={patientPhotoFile} />
            </div>
          </div>

          <h3>Patient Information</h3>
          <div className="patient_info container">
            <div className="fname">
              <label htmlFor="fname">First name</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="lname">
              <label htmlFor="lname">Last name</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="gender">
              <label htmlFor="lname">Gender</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="gender-label"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Gender
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>

            <div className="birthdate">
              <label htmlFor="birthdate">Birth Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                <DatePicker
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  fullWidth
                />
              </LocalizationProvider>
            </div>

            <div className="race">
              <label htmlFor="race">Ethnicity</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="race-label"
                  value={race}
                  onChange={(event) => setRace(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Ethnicity
                  </MenuItem>
                  <MenuItem value="White">White</MenuItem>
                  <MenuItem value="African_American">African American</MenuItem>
                  <MenuItem value="Hispanic">Hispanic</MenuItem>
                  <MenuItem value="Asian">Asian</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>

            <div className="insurance">
              <label htmlFor="insurance">Insurance</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="insurance-label"
                  value={insurance}
                  onChange={(event) => setInsurance(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Insurance
                  </MenuItem>
                  <MenuItem value="insurance_1">insurance_1</MenuItem>
                  <MenuItem value="insurance_2">insurance_2</MenuItem>
                  <MenuItem value="insurance_3">insurance_3</MenuItem>
                  <MenuItem value="insurance_4">insurance_4</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>

            <div className="language_spoken">
              <label htmlFor="language_spoken">Language Spoken</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="language_spoken_at_hone">
              <label htmlFor="language_spoken_at_hone">
                Language Spoken At Home
              </label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>
          </div>

          <h3>School Information</h3>
          <div className="school_info container">
            <div className="school">
              <label htmlFor="gname">School</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="race-label"
                  value={school}
                  onChange={(event) => setSchool(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select School
                  </MenuItem>
                  <MenuItem value="White">School 1</MenuItem>
                  <MenuItem value="African_American">School 2</MenuItem>
                  <MenuItem value="Hispanic">School 3</MenuItem>
                  <MenuItem value="Asian">School 4</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>
            <div className="grade">
              <label htmlFor="gname">Grade</label>
              <FormControl fullWidth>
                <MuiSelect
                  labelId="race-label"
                  value={grade}
                  onChange={(event) => setGrade(event.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Grade
                  </MenuItem>
                  <MenuItem value="White">Grade 1</MenuItem>
                  <MenuItem value="African_American">Grade 2</MenuItem>
                  <MenuItem value="Hispanic">Grade 3</MenuItem>
                  <MenuItem value="Asian">Grade 4</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>
            <div className="teacher">
              <label htmlFor="gname">Teacher</label>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                fullWidth
              />

            </div>
            <div className="room">
              <label htmlFor="gname">Room</label>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="consented">
              <label htmlFor="has_regular_checkup">Consented</label>
              <FormGroup>
                <RadioGroup
                  row
                  value={hasConsented ? "yes" : "no"}
                  onChange={(event) => setHasConsented(event.target.value === "yes")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormGroup>
            </div>
            <div className="signed">
              <label htmlFor="has_regular_checkup">Signed</label>
              <FormGroup>
                <RadioGroup
                  row
                  value={hasSigned ? "yes" : "no"}
                  onChange={(event) => setHasSigned(event.target.value === "yes")}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormGroup>
            </div>

            <div className="consented_notes">
              <label htmlFor="has_regular_checkup">Notes</label>
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
            <div className="signed_notes">
              <label htmlFor="has_regular_checkup">Notes</label>
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

          <h3>Gaurdian Information</h3>
          <div className="gaurdian_info container">
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

          <h3>Medical History</h3>
          <div className="medical_history container">
            <div className="allergies full">
              <label htmlFor="allergies">Allergies</label>
              <MultiSelectField
                  closeMenuOnSelect={false}
                  options={allergiedList}
                  value={alergieName}
                  onChange={handleAlergieNameChange}
              />
            </div>

            <div className="doctor text_input">
              <div className="doctor_name dtext">
                <label htmlFor="doctor_name">Doctor Name</label>
                <TextField fullWidth id="outlined-basic" variant="outlined" />
              </div>

              <div className="has_regular_checkup dinput">
                <label htmlFor="has_regular_checkup">Has Regular Check Up Doctor</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={hasRegularCheckupDoctor ? "yes" : "no"}
                    onChange={handleDoctorCheckupChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>

            </div>

            <div className="dentist text_input">
              <div className="dentist_name dtext">
                <label htmlFor="dentist_name">Dentist Name</label>
                <TextField fullWidth id="outlined-basic" variant="outlined" />
              </div>

              <div className="has_regular_checkup dinput">
                <label htmlFor="has_regular_checkup">Has Regular Check Up Dentist</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={hasRegularCheckupDentist ? "yes" : "no"}
                    onChange={handleDentistCheckupChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>

            </div>

            <div className="medication text_input"></div>

            <div className="illness full">
              <label htmlFor="illness full">Illness</label>
              <MultiSelectField
                  closeMenuOnSelect={false}
                  options={illnessList}
                  onChange={handleIlnessNameChange}
                  value={illnessName}
              />
            </div>
          </div>

          {/* Form Buttons */}
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
  );
};

export default AddPatients;