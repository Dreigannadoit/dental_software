import React, { useCallback, useMemo } from "react";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";

const EligibilityTable = ({ data }) => {
  // Unified state management
  const initialStatus = useCallback((key) => 
    data.map(item => item[key] ? "Yes" : "No"), [data]
  );
  
  const [proStatus, setProStatus] = React.useState(() => initialStatus('pro'));
  const [fluStatus, setFluStatus] = React.useState(() => initialStatus('flu'));
  const [yearStatus, setYearStatus] = React.useState("");

  // Generic handler for status changes
  const handleStatusChange = (type, index) => (event) => {
    const updater = type === 'pro' ? setProStatus : setFluStatus;
    updater(prev => prev.map((v, i) => i === index ? event.target.value : v));
  };

  // Reusable components with compact styling
  const renderInput = () => (
    <TextField 
      fullWidth 
      variant="outlined" 
      size="small"
      sx={{
        '& .MuiOutlinedInput-root': {
          height: 32,
          fontSize: '0.875rem',
        },
        '& .MuiOutlinedInput-input': {
          padding: '6px 8px',
        }
      }}
    />
  );

  const renderSelect = (value, handler, options) => (
    <FormControl fullWidth size="small">
      <Select
        value={value}
        onChange={handler}
        sx={{
          fontSize: '0.875rem',
          '& .MuiOutlinedInput-input': {
            padding: '6px 8px',
          }
        }}
      >
        {options.map(([val, label]) => (
          <MenuItem 
            key={val} 
            value={val}
            sx={{ fontSize: '0.875rem' }}
          >
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  // Table configuration
  const yearOptions = useMemo(() => [
    ["", "Select A Year"],
    ["Csdp Program Sy 2020 - 2021", "2020-2021"],
    ["Csdp Program Sy 2021 - 2022", "2021-2022"],
    ["Csdp Program Sy 2022 - 2023", "2022-2023"],
    ["Csdp Program Sy 2023 - 2024", "2023-2024"],
    ["Csdp Program Sy 2024 - 2025", "2024-2025"]
  ], []);

  return (
    <div className="table">
      <table>
        <thead className="shadow fixed-header">
          <tr>
            {["Name", "DOB", "MH#", "SL HX", "SL D", "PRO", "DATE", "FLU", 
              "DATE", "FILLINGS", "Notes", "Year", ""].map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((grade, index) => (
            <tr key={index} className="shadow">
              <td>{grade.name}</td>
              {[1,2,3,4,6,8,9].map((_, i) => <td key={i}>{renderInput()}</td>)}
              <td>
                {renderSelect(
                  proStatus[index],
                  handleStatusChange('pro', index),
                  [["Yes", "Yes"], ["No", "No"]]
                )}
              </td>
              <td>
                {renderSelect(
                  fluStatus[index],
                  handleStatusChange('flu', index),
                  [["Yes", "Yes"], ["No", "No"]]
                )}
              </td>
              <td>
                <div className="button">
                  <button className="compact-button">View</button>
                  <button className="compact-button">Notes</button>
                </div>
              </td>
              <td>
                {renderSelect(yearStatus, e => setYearStatus(e.target.value), yearOptions)}
              </td>
              <td><button className="compact-button">Save</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EligibilityTable;