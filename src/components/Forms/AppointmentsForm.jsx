import * as React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, NativeSelect, Radio, RadioGroup, Select as MuiSelect, TextField } from '@mui/material'
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import AnimatedButton from '../AnimatedButton';
import { Alert, Delete, File_Edit } from '../../assets/icons';
import { Accordion, AccordionDetails, AccordionSummary } from '../CustumeAccordian';
import useAnimation from '../../hooks/useFormAnimate';

import ReactDOM from "react-dom";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MultiSelectField from '../MultiSelectField';
import { Textarea } from '@mui/joy';
import dayjs from 'dayjs'; // Import dayjs
import Popup from '../PopUps/Popup';
import usePopup from '../../hooks/usePopUp';
import { appointmentPatient } from '../../test_data';
const fillingsPresentList = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
    { label: "E", value: "E" },
    { label: "F", value: "F" },
    { label: "G", value: "G" },
    { label: "H", value: "H" },
    { label: "I", value: "I" },
    { label: "J", value: "J" },
    { label: "K", value: "K" },
    { label: "L", value: "L" },
    { label: "M", value: "M" },
    { label: "N", value: "N" },
    { label: "O", value: "O" },
    { label: "P", value: "P" },
    { label: "Q", value: "Q" },
    { label: "R", value: "R" },
    { label: "S", value: "S" },
    { label: "T", value: "T" },
    { label: "U", value: "U" },
    { label: "V", value: "V" },
    { label: "W", value: "W" },
    { label: "X", value: "X" },
    { label: "Y", value: "Y" },
    { label: "W", value: "Z" },
    { label: "Z", value: "Z" },
    { label: "Upper", value: "Upper", isDisabled: true },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "Lower", value: "Upper", isDisabled: true },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
    { label: "29", value: "29" },
    { label: "30", value: "30" },
    { label: "31", value: "31" },
    { label: "32", value: "32" },
  ];

const AppointmentsForm = ({ id = null, exitUser, patientsData, initialFormData }) => {
    const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [typeofVisit, setTypeofVisit] = useState(null);
    const [screening, setScreening] = useState(null);
    const [fillingPresent, setFillingsPresent] = useState([]);
    const [prophy, setProphy] = useState([]);
    const [prophyDate, setProphyDate] = useState(null);
    const [flouride, setFlouride] = useState([]);
    const [flourideDate, setFlourideDate] = useState(null);
    const [sealentPlaced, setSealentPlaced] = useState([]);
    const [sealentPlacedDate, setSealentPlacedDate] = useState(null);
    const [sealantHistory, setSealantHistory] = useState([]);
    const [historyDate, setHistoryDate] = useState(null);
    const [retainedSealants, setRetainedSealants] = useState([]);
    const [referalType, setReferalType] = useState();
    const [decay, setDecay] = useState([]);
    const [decayTeeth, setDecayTeeth] = useState([]);
    const [abcess, setAbcess] = useState([]);
    const [abcessTeeth, setAbcessTeeth] = useState([]);
    const [pain, setPain] = useState([]);
    const [painTeeth, setPainTeeth] = useState([]);
    const [sdf, setSDF] = useState([]);
    const [sdfTeeth, setSDFTeeth] = useState([]);
    const [referralComplete, setReferralComplete] = useState([]);
    const [referralCompleteTeeth, setReferralCompleteTeeth] = useState([]);
  
    // Load initial data
    useEffect(() => {
      if (initialFormData) {
        setIsEditMode(true);
        setSelectedDate(initialFormData.serviceDate ? dayjs(initialFormData.serviceDate) : null);
        setTypeofVisit(initialFormData.type === "Initial Visit");
        setScreening(initialFormData.screening);
        setFillingsPresent(initialFormData.fillingsPresent || []);
        setProphy(initialFormData.prophyHistory);
        setProphyDate(initialFormData.prophyDate ? dayjs(initialFormData.prophyDate) : null);
        setFlouride(initialFormData.flourideHistory);
        setFlourideDate(initialFormData.flourideDate ? dayjs(initialFormData.flourideDate) : null);
        setSealentPlaced(initialFormData.sealantPlaced);
        setSealentPlacedDate(initialFormData.sealentPlacedDate ? dayjs(initialFormData.sealentPlacedDate) : null);
        setSealantHistory(initialFormData.sealantHistory || []);
        setHistoryDate(initialFormData.historyDate ? dayjs(initialFormData.historyDate) : null);
        setRetainedSealants(initialFormData.retainedSealants || []);
        setReferalType(initialFormData.referalType);
        setDecay(initialFormData.decay);
        setDecayTeeth(initialFormData.decayTeeth || []);
        setAbcess(initialFormData.abcess);
        setAbcessTeeth(initialFormData.abcessTeeth || []);
        setPain(initialFormData.pain);
        setPainTeeth(initialFormData.painTeeth || []);
        setSDF(initialFormData.sdf);
        setSDFTeeth(initialFormData.sdfTeeth || []);
        setReferralComplete(initialFormData.referralComplete);
        setReferralCompleteTeeth(initialFormData.referralCompleteTeeth || []);
      } else {
        setIsEditMode(false);
        // Set default values
        setSelectedDate(null);
        setTypeofVisit(null);
        setScreening(null);
        setFillingsPresent([]);
        setProphy(false);
        setProphyDate(null);
        setFlouride(false);
        setFlourideDate(null);
        setSealentPlaced(false);
        setSealentPlacedDate(null);
        setSealantHistory([]);
        setHistoryDate(null);
        setRetainedSealants([]);
        setReferalType(null);
        setDecay(false);
        setDecayTeeth([]);
        setAbcess(false);
        setAbcessTeeth([]);
        setPain(false);
        setPainTeeth([]);
        setSDF(false);
        setSDFTeeth([]);
        setReferralComplete(false);
        setReferralCompleteTeeth([]);
      }
    }, [initialFormData]);
  
    const handleTypeofVisitChange = (event) => {
      setTypeofVisit(event.target.value === "Initial Visit");
      console.log("Has Regular Checkup:", event.target.value === "Initial Visit");
    };
  
    const handleFillingsPresentChange = (selected) => {
      setFillingsPresent(selected);
      console.log("Selected items:", selected);
    };
  
    const handleSealantHistoryChange = (selected) => {
      setSealantHistory(selected);
      console.log("Selected items:", selected);
    };
  
    const handleRetainedSealantsChange = (selected) => {
      setRetainedSealants(selected);
      console.log("Selected items:", selected);
    };
  
    const handleAutoFillAppointmentYes = (event) => {
      event.preventDefault();
      setScreening(true)
      setProphy(true)
      setFlouride(true)
      setSealentPlaced(true)
    }
  
    const handleAutoFillAppointmentNo = (event) => {
      event.preventDefault();
      setScreening(false)
      setProphy(false)
      setFlouride(false)
      setSealentPlaced(false)
    }
  
    const handleAutoFillReferralsYes = (event) => {
      event.preventDefault();
      setDecay(true)
      setAbcess(true)
      setPain(true)
      setSDF(true)
      setReferralComplete(true)
    }
  
    const handleAutoFillReferralsNo = (event) => {
      event.preventDefault();
      setDecay(false)
      setAbcess(false)
      setPain(false)
      setSDF(false)
      setReferralComplete(false)
    }
  
  
    React.useEffect(() => {
      // Trigger enter animation when component mounts
      triggerEnter();
    }, [triggerEnter]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        serviceDate: selectedDate,
        type: typeofVisit ? "Initial Visit" : "Follow-up Visit",
        screening,
        fillingsPresent,
        prophyHistory: prophy,
        prophyDate,
        flourideHistory: flouride,
        flourideDate,
        sealantPlaced: sealentPlaced,
        sealentPlacedDate,
        sealantHistory,
        historyDate,
        retainedSealants,
        referalType,
        decay,
        decayTeeth,
        abcess,
        abcessTeeth,
        pain,
        painTeeth,
        sdf,
        sdfTeeth,
        referralComplete,
        referralCompleteTeeth,
      };
      console.log('Form Submitted', formData);
  
      triggerExit(() => {
        if (exitUser) exitUser();
      });
    };
  
    const handleCancel = () => {
      triggerExit(() => {
        if (exitUser) exitUser(); // Execute callback after exit animation completes
      });
    };
  
    return ReactDOM.createPortal(
      <div className={`form_container appointment_form_container glassmorphism shadow ${!isInitialized
        ? "" // No animation class applied until initialization
        : isVisible
          ? "enter-animation"
          : "exit-animation"
        }`}>
        <button className="form_background" onClick={handleCancel}></button>
        <div className="form appointment_form glassmorphism shadow">
          <form onSubmit={handleSubmit}>
            <h1>{isEditMode ? "Edit Appointment" : "New Appointment"}</h1>
  
            {/* Basic Patient Information */}
  
            <div className="container third patient_data">
              <div>
                <p><strong>FULL NAME:</strong></p>
                <p>Silva, Ana Moe</p>
              </div>
              <div>
                <p><strong>DATE OF BIRTH</strong></p>
                <p>2015-01-10</p>
              </div>
              <div>
                <p><strong>INSURANCE</strong></p>
                <p>0234859043</p>
              </div>
            </div>
  
            {/* Appointment Information*/}
  
            <h3>Appointment Information</h3>
            <div className="container third">
              <div className="date">
                <label htmlFor="birthdate">Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                  <DatePicker
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    fullWidth
                  />
                </LocalizationProvider>
              </div>
  
              <div className="type_of_input dinput">
                <label htmlFor="type_of_visit">Type Of Visit</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={typeofVisit ? "Initial Visit" : "Follow-up Visit"}
                    onChange={handleTypeofVisitChange}
                  >
                    <FormControlLabel
                      value="Initial Visit"
                      control={<Radio />}
                      label="Initial Visit"
                    />
                    <FormControlLabel value="Follow-up Visit" control={<Radio />} label="Follow-up Visit" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="screen_status dinput">
                <label htmlFor="type_of_visit">Not Screened</label>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>
              </div>
            </div>
  
            {/* Screening Container */}
            <div className="auto_fill">
              <h4>Auto Fill Select</h4>
              <div>
                <button onClick={handleAutoFillAppointmentYes}>Yes</button>
                <button onClick={handleAutoFillAppointmentNo}>No</button>
              </div>
            </div>
  
            <div className="container">
              <div className="screening dinput">
                <label htmlFor="type_of_visit">Screening</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={screening ? "Yes" : "No"}
                    onChange={(event) => setScreening(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="fillings_present">
                <label htmlFor="Fillings Present">Fillings Present</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={handleFillingsPresentChange}
                  value={fillingPresent}
                />
              </div>
  
              <div className="prophy dinput">
                <label htmlFor="prophy">Prophy</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={prophy ? "Yes" : "No"}
                    onChange={(event) => setProphy(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="prohy_date">
                <label htmlFor="Prohy Date">Prohy Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                  <DatePicker
                    value={prophyDate}
                    onChange={(newValue) => setProphyDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    fullWidth
                  />
                </LocalizationProvider>
              </div>
  
              <div className="flouride dinput">
                <label htmlFor="prophy">Flouride</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={flouride ? "Yes" : "No"}
                    onChange={(event) => setFlouride(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="flouride_date">
                <label htmlFor="Prohy Date">Flouride Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                  <DatePicker
                    value={flourideDate}
                    onChange={(newValue) => setFlourideDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    fullWidth
                  />
                </LocalizationProvider>
              </div>
  
              <div className="sealant_placed">
                <label htmlFor="prophy">Sealent Placed</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={sealentPlaced ? "Yes" : "No"}
                    onChange={(event) => setSealentPlaced(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="date_sealed">
                <label htmlFor="Prohy Date">Date Sealed</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                  <DatePicker
                    value={sealentPlacedDate}
                    onChange={(newValue) => setSealentPlacedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    fullWidth
                  />
                </LocalizationProvider>
              </div>
  
              <div className="sealent_history">
                <label htmlFor="sealent_history">Sealent History</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={handleSealantHistoryChange}
                  value={sealantHistory}
                />
              </div>
  
              <div className="history_date">
                <label htmlFor="Prohy history_date">History Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                  <DatePicker
                    value={historyDate}
                    onChange={(newValue) => setHistoryDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    fullWidth
                  />
                </LocalizationProvider>
              </div>
  
              <div className="retained_history">
                <label htmlFor="retained_history">Retained History</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={handleRetainedSealantsChange}
                  value={retainedSealants}
                />
              </div>
            </div>
  
            {/* REFERRALS Container */}
            <h3>REFERRALS</h3>
  
            <div className="container">
              <div className="referal_type">
                <label htmlFor="referalType">Referal Type</label>
                <FormControl fullWidth>
                  <MuiSelect
                    labelId="referalType"
                    value={referalType}
                    onChange={(event) => setReferalType(event.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select referal Type
                    </MenuItem>
                    <MenuItem value="TU0">TU0</MenuItem>
                    <MenuItem value="TU1">TU1</MenuItem>
                    <MenuItem value="TU2">TU2</MenuItem>
                    <MenuItem value="TU3">TU3</MenuItem>
                  </MuiSelect>
                </FormControl>
              </div>
  
              <div className=""></div>
  
              <div className="auto_fill">
                <h4>Auto Fill Select</h4>
                <div>
                  <button onClick={handleAutoFillReferralsYes}>Yes</button>
                  <button onClick={handleAutoFillReferralsNo}>No</button>
                </div>
              </div>
  
              <div className=""></div>
  
              <div className="decay dinput">
                <label htmlFor="decay">Decay</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={decay ? "Yes" : "No"}
                    onChange={(event) => setDecay(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="decay_teeth">
                <label htmlFor="decay_teeth">Teeth</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={(selected) => setDecayTeeth(selected)}
                  value={decayTeeth}
                />
              </div>
  
              <div className="abcess dinput">
                <label htmlFor="abcess">Abcess</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={abcess ? "Yes" : "No"}
                    onChange={(event) => setAbcess(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="abcess_teeth">
                <label htmlFor="abcess_teeth">Teeth</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={(selected) => setAbcessTeeth(selected)}
                  value={abcessTeeth}
                />
              </div>
  
              <div className="pain dinput">
                <label htmlFor="pain">Pain</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={pain ? "Yes" : "No"}
                    onChange={(event) => setPain(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="pain_teeth">
                <label htmlFor="pain_teeth">Teeth</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={(selected) => setPainTeeth(selected)}
                  value={painTeeth}
                />
              </div>
  
              <div className="sdf dinput">
                <label htmlFor="sdf">SDF</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={sdf ? "Yes" : "No"}
                    onChange={(event) => setSDF(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="sdf_teeth">
                <label htmlFor="sdf_teeth">Teeth</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={(selected) => setSDFTeeth(selected)}
                  value={sdfTeeth}
                />
              </div>
  
              <div className="referral_complete dinput">
                <label htmlFor="referral_complete">Referral Complete</label>
                <FormGroup>
                  <RadioGroup
                    row
                    value={referralComplete ? "Yes" : "No"}
                    onChange={(event) => setReferralComplete(event.target.value === "Yes")}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormGroup>
              </div>
  
              <div className="referral_complete_teeth">
                <label htmlFor="referral_complete_teeth">Teeth Completed</label>
                <MultiSelectField
                  closeMenuOnSelect={false}
                  options={fillingsPresentList}
                  onChange={(selected) => setReferralCompleteTeeth(selected)}
                  value={referralCompleteTeeth}
                />
              </div>
  
              <div className="notes full">
                <label htmlFor="notes">Notes</label>
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
                {isEditMode ? "Update" : "Submit"}
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

  export default AppointmentsForm;