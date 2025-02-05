import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";

const EligibilityTable = ({ data }) => {
  const [proStatus, setProStatus] = useState(
    data.map((grade) => (grade.pro === true ? "Yes" : "No"))
  );
  const [fluStatus, setFluStatus] = useState(
    data.map((grade) => (grade.flu === true ? "Yes" : "No"))
  );
  const [yearStatus, setYearStatus] = useState("");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleProChange = (event, index) => {
    const updatedProStatus = [...proStatus];
    updatedProStatus[index] = event.target.value;
    setProStatus(updatedProStatus);
  };

  const handleFluChange = (event, index) => {
    const updatedFluStatus = [...fluStatus];
    updatedFluStatus[index] = event.target.value;
    setFluStatus(updatedFluStatus);
  };

  return (
    <>
      <div className="table">
        <table>
          <thead className={`shadow fixed-header`}>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>MH#</th>
              <th>SL HX</th>
              <th>SL D</th>
              <th>PRO</th>
              <th>DATE</th>
              <th>FLU</th>
              <th>DATE</th>
              <th>FILLINGS</th>
              <th>Notes</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((grade, index) => (
                <tr key={index} className="shadow">
                  <td>{grade.name}</td>
                  <td>
                    <div>
                      <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <Select
                        value={proStatus[index]}
                        onChange={(event) => handleProChange(event, index)}
                      >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td>
                    <div>
                      <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <Select
                        value={fluStatus[index]}
                        onChange={(event) => handleFluChange(event, index)}
                      >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td>
                    <div>
                      <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                  </td>
                  <td>
                    <div className="button">
                      <button>View</button>
                      <button>Notes</button>
                    </div>
                  </td>
                  <td>
                    <FormControl fullWidth>
                      <Select
                        value={yearStatus}
                        onChange={(event) => setYearStatus(event.target.value)}
                      >
                        <MenuItem value="">Select A Year</MenuItem>
                        <MenuItem value="Csdp Program Sy 2020 - 2021">Csdp Program Sy 2020 - 2021</MenuItem>
                        <MenuItem value="Csdp Program Sy 2021 - 2022">Csdp Program Sy 2021 - 2022</MenuItem>
                        <MenuItem value="Csdp Program Sy 2022 - 2023">Csdp Program Sy 2022 - 2023</MenuItem>
                        <MenuItem value="Csdp Program Sy 2023 - 2024">Csdp Program Sy 2023 - 2024</MenuItem>
                        <MenuItem value="Csdp Program Sy 2024 - 2025">Csdp Program Sy 2024 - 2025</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td>
                    <button>Save</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13">No matching records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EligibilityTable;
