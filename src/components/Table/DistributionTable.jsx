import { Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";

const DistributionTable = ({ data }) => {
  const renderTextField = () => (
    <div>
      <TextField 
        fullWidth 
        id="outlined-basic" 
        variant="outlined" 
        size="small"
        sx={{ 
          '& .MuiOutlinedInput-root': { 
            padding: '1px 2px', // Adjust padding to make it even smaller
          }
        }} 
      />
    </div>
  );

  const renderTableRow = (record) => (
    <tr>
      <td>{record.name}</td>
      <td>{renderTextField()}</td>
      <td>
        <Checkbox />
      </td>
      <td>{renderTextField()}</td>
      <td>{renderTextField()}</td>
      <td>{renderTextField()}</td>
      <td>{renderTextField()}</td>
      <td>{renderTextField()}</td>
      <td>
        <button className="main_btn_style">save</button>
      </td>
    </tr>
  );

  const renderSection = (programYear, levelKey, levelName) => {
    const records = programYear[levelKey];
    return (
      <React.Fragment key={levelKey}>
        <tr>
          <td colSpan="9" className="section-header">
            {programYear.year} - {levelName}
          </td>
        </tr>
        {records.length > 0 ? (
          records.map((record, index) => (
            <tr key={index} className="editable_content">
              <td>{record.name}</td>
              <td>{renderTextField()}</td>
              <td>
                <Checkbox />
              </td>
              <td>{renderTextField()}</td>
              <td>{renderTextField()}</td>
              <td>{renderTextField()}</td>
              <td>{renderTextField()}</td>
              <td>{renderTextField()}</td>
              <td>
                <div>
                  <button className="main_btn_style">save</button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9">No records for {levelName}</td>
          </tr>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="table">
      <table>
        <thead className={`shadow fixed-header`}>
          <tr>
            <th>School Name</th>
            <th>Enrolled</th>
            <th>Distr.</th>
            <th>Number of Classrooms</th>
            <th>Number of Consent Packer</th>
            <th>Total Number of Forms Distr.</th>
            <th>Consents</th>
            <th>Nurse / Contact Person</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((programYear, index) => (
            <React.Fragment key={index}>
              {renderSection(programYear, "preK", "Pre K")}
              {renderSection(programYear, "k5", "K-5")}
              {renderSection(programYear, "m6_8", "Middle 6-8")}
              {renderSection(programYear, "high9_12", "High 9-12")}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistributionTable;