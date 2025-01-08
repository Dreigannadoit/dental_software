import React, { useState, useMemo } from "react";
import "../../css/patients.css";
import FilterBlock from "../../components/FilterBlock";
import { ImportIcon, Save, Upload, User_Add } from "../../assets/icons";
import AnimatedButton from "../../components/AnimatedButton";
import PatientTable from "../../components/Table/PatientTable";
import { patientInfo, updatedPatientInfo } from "../../test_data";
import useDebounce from "../../hooks/useDebounce";
import RowsPerPage from "../../components/RowsPerPage";
import Popup from "../../components/PopUps/Popup";
import usePopup from "../../hooks/usePopUp";
import ReactDOM from "react-dom";
import { Box, Chip, FormControl, FormHelperText, Input, InputLabel, MenuItem, OutlinedInput, Select, TextField, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MuiTelInput } from "mui-tel-input";

const Patients = () => {
  const [filters, setFilters] = useState({
    search: "",
    school: "",
    grade: "",
    year: "",
    status: "",
  });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const debouncedSearch = useDebounce(filters.search, 500);

  // Function to handle search queries that start with "Birthdate: "
  const handleSearchFilter = (searchQuery) => {
    const birthdatePrefix = "Birthdate: ";
    if (searchQuery.startsWith(birthdatePrefix)) {
      // Extract the birthdate from the search query
      const birthdate = searchQuery.replace(birthdatePrefix, "").trim();
      // Return a function that checks if a patient's birthdate includes the extracted value
      return (patient) => patient.birthdate.includes(birthdate);
    }
    return null;
  };

  // Utility function to safely convert a value to lowercase string
  const safeToLowerCase = (value) => (value ? value.toString().toLowerCase() : '');

  // Memoized function to filter patients based on search query and filters
  const filteredPatients = useMemo(() => {
    // TODO: replace updatedPatientInfo with actual database

    // Filter the patients based on various criteria
    return updatedPatientInfo.filter((patient) => {
      const searchQuery = debouncedSearch.toLowerCase();
      const birthdateFilter = handleSearchFilter(debouncedSearch);

      // Check if any of the patient's fields match the search query
      const searchMatch =
        !debouncedSearch ||
        [patient.name, patient.id.toString(), patient.gender, patient.age?.toString()]
          .some(field => safeToLowerCase(field).includes(searchQuery));

      // Check if the patient's birthdate matches the search query
      const birthdateMatch = birthdateFilter && birthdateFilter(patient);

      // Check if the patient's school matches the selected filter
      const schoolMatch = !filters.school || patient.school === filters.school;

      // Check if the patient's grade matches the selected filter
      const gradeMatch = !filters.grade || patient.grade.toString() === filters.grade;

      // Check if the patient's year matches the selected filter
      const yearMatch = !filters.year || patient.year === filters.year;

      // Check if the patient's status matches the selected filter
      const statusMatch = !filters.status || patient.status === filters.status;

      // Return true if the patient matches all the criteria
      return (searchMatch || birthdateMatch) && schoolMatch && gradeMatch && yearMatch && statusMatch;
    });
  }, [debouncedSearch, filters]);

  const startIndex = (currentPage - 1) * rowsPerPage; // Calculate the start index for the current page
  const currentPagePatients = filteredPatients.slice(startIndex, startIndex + rowsPerPage); // Get the patients for the current page by slicing the filtered patients array
  const totalPages = Math.ceil(filteredPatients.length / rowsPerPage); // Calculate the total number of pages based on the length of the filtered patients and rows per page

  const {
    isVisible: showImportPopup,
    isExiting,
    openPopup: openImportPopUp,
    closePopup: closeImportPopUp,
  } = usePopup();

  return (
    <>
      {/* Import File Popup */}
      {showImportPopup && (
        <Popup
          type="Import"
          title="Import Patient List"
          message={`This action can be only done once`}
          icon={ImportIcon}
          onConfirm={closeImportPopUp}
          onCancel={closeImportPopUp}
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          isExiting={isExiting}
          customClass="import-popup"
        />
      )}
      <AddPatients />

      <div className="patients auto-sizing">
        <FilterBlock filters={filters} onFilterChange={handleFilterChange} patientInfo={updatedPatientInfo} />

        <div className="table_controls">
          <UserButtons openImportPopUp={openImportPopUp} />
          <RowsPerPage rowsPerPage={rowsPerPage} handleRowsPerPageChange={handleRowsPerPageChange} />
        </div>

        <div className="table_area">
          <PatientTable data={currentPagePatients} />
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const allergiedList = [
  'Colophonium',
  'Latex',
  'Tree Nuts',
  'Resins',
  'Food',
  'Artificial Flavoring',
  'Red Dye',
  'None',
];

const illnessList = [
  'ADD/ADHD',
  'Diabetes',
  'Epilepsy/Seizure',
  'Asthma',
  'Heart Murmur',
  'Plavix (chopidogerel)',
  'Blood Disorder / Hemophilia',
  'Congenital Heart Disease/Defect',
  'Heart Atteck/Heart Failure',
  'Artificial Heart Valve',
  'Tuberculosis',
  'Hepatitis/Liver Disease',
  'Biophosphonate Thearapy (Oral or IV)',
  'Costisone - Corticosteroid Thearapy',
  'Systemic Lupus Erythematosus',
  'None',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}


const AddPatients = ({ }) => {
  const [gender, setGender] = useState(""); // State to track the selected gender
  const [race, setRace] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [insurance, setInsurance] = useState("")
  const [phoneNumber, setPhoneNumber] = useState('');

  const theme = useTheme();
  const [alergieName, setAlergieName] = React.useState([]);

  const handlePhoneChange = (value) => {
    setPhoneNumber(value)
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);

  }

  const handleRaceChange = (event) => {
    setRace(event.target.value)
    
  }

  const handleInsuaranceChange = (event) => {
    setInsurance(event.target.value)
    
  }

  const handleAlergieNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setAlergieName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

  }
  return ReactDOM.createPortal(
    <div className="new_patient_containter f-center">
      <div className="new_patients glassmorphism shadow">
        <form action="">
          <h1>New Patient</h1>

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
                <Select
                  labelId="gender-label"
                  value={gender}
                  onChange={handleGenderChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Gender
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
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
                <Select
                  labelId="race-label"
                  value={race}
                  onChange={handleRaceChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Ethnicity
                  </MenuItem>
                  <MenuItem value="White">White</MenuItem>
                  <MenuItem value="African_American">African American</MenuItem>
                  <MenuItem value="Hispanic">Hispanic</MenuItem>
                  <MenuItem value="Asian">Asian</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="insurance">
              <label htmlFor="insurance">Insurance</label>
              <FormControl fullWidth>
                <Select
                  labelId="insurance-label"
                  value={insurance}
                  onChange={handleInsuaranceChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Insurance
                  </MenuItem>
                  <MenuItem value="insurance_1">insurance_1</MenuItem>
                  <MenuItem value="insurance_2">insurance_2</MenuItem>
                  <MenuItem value="insurance_3">insurance_3</MenuItem>
                  <MenuItem value="insurance_4">insurance_4</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="language_spoken">
              <label htmlFor="language_spoken">Language Spoken</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>

            <div className="language_spoken_at_hone">
              <label htmlFor="language_spoken_at_hone">Language Spoken At Home</label>
              <TextField fullWidth id="outlined-basic" variant="outlined" />
            </div>
          </div>

          <h3>Gaurdian Information</h3>
          <div className="gaurdian_info container">
            <div className="gname">
              <label htmlFor="gname">Gaurdian Name</label>
              <TextField id="outlined-basic" label="Gaurdian Name" variant="outlined" />
            </div>

            <div className="grelationship">
              <label htmlFor="grelationship">Relationship</label>
              <TextField id="outlined-basic" label="e.g Father/Mother/Auntie" variant="outlined" />
            </div>

            <div className="gnumber">
              <label htmlFor="gnumber">Phone Number</label>
              <MuiTelInput
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
            </div>

            <div className="gemail">
              <label htmlFor="gemail">Gaurdian Email</label>
              <TextField id="outlined-basic" label="Gaurdian Email" variant="outlined" type="email" />
            </div>
          </div>

          <h3>Medical History</h3>
          <div className="medical_history container">
            <div className="allergies gls">
              <label htmlFor="allergies">Allergies</label>
              <FormControl fullwidth>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={alergieName}
                  onChange={handleAlergieNameChange}
                  input={<OutlinedInput id="select-multiple-chip" fullwidth/>}
                  renderValue={(selected) => (
                    <Box fullwidth sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} fullwidth/>
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                  fullwidth
                >
                  {allergiedList.map((allergie) => (
                    <MenuItem
                      key={allergie}
                      value={allergie}
                      style={getStyles(allergie, alergieName, theme)}
                    >
                      {allergie}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="doctor">

            </div>

            <div className="dentist">

            </div>

            <div className="medication">

            </div>

            <div className="illness">

            </div>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

const UserButtons = ({ openImportPopUp }) => (
  <div className="user_buttons">
    <AnimatedButton
      type="link"
      classLabel="download_template"
      label="Download Template"
      icon={Save}
      backgroundColor="#FFB20C"
      url="#"
    />
    <AnimatedButton
      type="button"
      classLabel="import_btn"
      label="Import"
      icon={Upload}
      backgroundColor="#8BE5FE"
      method={openImportPopUp}
    />
    <AnimatedButton
      type="button"
      classLabel="new_patient"
      label="New Patient"
      icon={User_Add}
      backgroundColor="#1E8631"
    />
  </div>
);

export default Patients;
