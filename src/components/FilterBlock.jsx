import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const FilterBlock = ({ filters, onFilterChange, patientInfo }) => {
  const handleInputChange = (filterName) => (event) => {
    onFilterChange(filterName, event.target.value);
  };

  // Function to get unique values from an array and filter out empty values
  const getUniqueValues = (field) => {
    const values = patientInfo
      .map((patient) => String(patient[field])) // Ensure value is a string
      .filter((value) => value.trim() !== ""); // Filter out empty values
    return [...new Set(values)]; // Ensure uniqueness
  };

  const uniqueSchools = getUniqueValues("school");
  const uniqueGrades = getUniqueValues("grade");
  const uniqueYears = getUniqueValues("year");
  const uniqueStatuses = getUniqueValues("status");
  const uniqueTeachers = getUniqueValues("teacher");

  return (
    <div className="filter_block">
      <div className="search_field">
        <p>Search</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          value={filters.search}
          onChange={(e) => onFilterChange("search", e.target.value)}
          placeholder="Search by name, gender, id, birthdate (e.g. Birthdate: 2016-04-18)"
        />
      </div>
      <div className="filer_fields">
        <div className="filter_school">
          <p>School</p>
          <FormControl fullWidth>
            <Select
              value={filters.school}
              onChange={handleInputChange("school")}
            >
              <MenuItem value="">All</MenuItem>
              {uniqueSchools.map((school) => (
                <MenuItem key={school} value={school}>
                  {school}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="filter_grade">
          <p>Grade</p>
          <FormControl fullWidth>
            <Select
              value={filters.grade}
              onChange={handleInputChange("grade")}
            >
              <MenuItem value="">All</MenuItem>
              {uniqueGrades.map((grade) => (
                <MenuItem key={grade} value={grade}>
                  {grade}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="filter_year">
          <p>Year</p>
          <FormControl fullWidth>
            <Select
              value={filters.year}
              onChange={handleInputChange("year")}
            >
              <MenuItem value="">All</MenuItem>
              {uniqueYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="filter_status">
          <p>Status</p>
          <FormControl fullWidth>
            <Select
              value={filters.status}
              onChange={handleInputChange("status")}
            >
              <MenuItem value="">All</MenuItem>
              {uniqueStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="filter_status">
          <p>Teacher</p>
          <FormControl fullWidth>
            <Select
              value={filters.teacher}
              onChange={handleInputChange("teacher")}
            >
              <MenuItem value="">All</MenuItem>
              {uniqueTeachers.map((teacher) => (
                <MenuItem key={teacher} value={teacher}>
                  {teacher}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
