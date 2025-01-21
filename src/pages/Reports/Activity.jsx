import { Box, Chip, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import useExportCsv from '../../hooks/useExportCsv';
import { schoolData } from '../../test_data';
import { DatePicker, DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "../../css/activty_reports.css";

// TODO: Filter and search do not do anything, add logic


const testList = [
  {
    label: "Student Seen",
    amount: 58
  },
  {
    label: "Student Sealed",
    amount: 14
  },
  {
    label: "Flouride",
    amount: 56
  },
  {
    label: "SDF Placed",
    amount: 0
  },
  {
    label: "Referred",
    amount: 20
  },
  {
    label: "Sealants Placed",
    amount: 52
  },
  {
    label: "Prophy",
    amount: 34
  },
]

const Activity = () => {
  const [schools, setSchools] = useState([]);
  const exportCsv = useExportCsv();

  const handleExport = () => {
    // Replace currentPageData with actual data you want to export
    exportCsv(testList, "Activity Reports.csv");
  };

  // Extract names into an array
  const schoolNames = schoolData.map((school) => school.name);

  return (
    <div className='activity_reports'>
      <div className="filter_block">
        <div className="general_fields">
          <div className="search_field">
            <p>Search</p>
            <FormControl fullWidth>
              <Select
                value={schools}
                onChange={(e) => setSchools(e.target.value)}
                multiple

                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                <MenuItem value="">All</MenuItem>
                {schoolNames.map((school) => (
                  <MenuItem key={school} value={school}>
                    {school}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="filer_fields">
          <div className="filter_date_from">
            <p>Date From</p>
            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
              <DatePicker fullWidth />
            </LocalizationProvider>
          </div>
          <div className="filter_date_to">
            <p>Date From</p>
            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
              <DatePicker fullWidth />
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <div className="table_controls">
        <button className="Export_BTN shadow" onClick={handleExport}>Export</button>
      </div>

      <div className="activty_block shadow">
        <h3>Activity</h3>
        <div>
          {testList.map((activity, index) => (
            <div className="blocks shadow" key={index}>
              <p>{activity.label}</p>
              <h1>{activity.amount}</h1>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Activity;
