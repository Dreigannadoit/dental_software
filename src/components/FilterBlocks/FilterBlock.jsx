import { FormControl, MenuItem, Select, TextField, InputBase } from "@mui/material";
import React, { useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { User_Add } from "../../assets/icons";
import { styled } from '@mui/material/styles';

// Styled components for shorter height
const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: 32,
    backgroundColor: 'white', 
    borderRadius: 4,
    overflow: 'hidden', // Prevents background from overflowing
    boxShadow: 'none',
  },
  '& .MuiInputBase-input': {
    padding: '6px 12px', // Ensures text doesn't touch edges
    backgroundColor: 'white', // Ensure input area is white
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ced4da',
    },
    '&:hover fieldset': {
      borderColor: '#80bdff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0056b3',
    },
  },
});


const CustomSelect = styled(Select)({
  height: 32, // Adjust this value to control the height
});

const CustomInput = styled(InputBase)({
  'label + &': {
    marginTop: 8,
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "white",
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px px',
    transition: 'all .2s ease-in-out',
    height: '1em',
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
});


const FilterBlock = ({
  filters,
  onFilterChange,
  data,
  hasSearchBar = true,
  method = () => console.warn("The Button In the Filter Block doesn't have a method"),
  hasSchoolFilter,
  hasGradeFilter,
  hasYearFilter,
  hasStatusfilter,
  hasTeacherFilter,
  hasTypeFilter,
  hasAddToTableButton
}) => {
  const handleInputChange = (filterName) => (event) => {
    onFilterChange(filterName, event.target.value);
  };

  // Function to get unique values from an array and filter out empty values
  const getUniqueValues = (field) => {
    if (!Array.isArray(data)) return []; // Ensure data is an array
    const values = data
      .map((school) => String(school[field])) // Ensure value is a string
      .filter((value) => value.trim() !== ""); // Filter out empty values
    return [...new Set(values)]; // Ensure uniqueness
  };

  const uniqueSchools = getUniqueValues("school");
  const uniqueGrades = getUniqueValues("grade");
  const uniqueYears = getUniqueValues("year");
  const uniqueStatuses = getUniqueValues("status");
  const uniqueTeachers = getUniqueValues("teacher");
  const uniqueType = getUniqueValues("type");

  return (
    <div className="filter_block shadow">

      {hasSearchBar && (
        <div className="general_fields">
          <div className="search_field">
            <p>Search</p>
            <CustomTextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={filters.search}
              onChange={(e) => onFilterChange("search", e.target.value)}
              placeholder=""
            />
          </div>
          {hasAddToTableButton &&
            <AnimatedButton
              type="button"
              classLabel="add_new"
              label="Add To List"
              icon={User_Add}
              backgroundColor="#8BE5FE"
              method={method}
              url="#"
            />
          }
        </div>

      )}

      <div className="filer_fields">
        {hasTypeFilter && uniqueType.length > 0 && (
          <div className="filter_school">
            <p>Type</p>
            <FormControl fullWidth>
              <CustomSelect
                value={filters.type || ""}
                onChange={handleInputChange("type")}
                input={<CustomInput />}
              >
                <MenuItem value="">All</MenuItem>
                {uniqueType.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
        )}

        {hasStatusfilter && uniqueStatuses.length > 0 && (
          <div className="filter_status">
            <p>Status</p>
            <FormControl fullWidth>
              <CustomSelect
                value={filters.status || ""}
                onChange={handleInputChange("status")}
                input={<CustomInput />}
              >
                <MenuItem value="">All</MenuItem>
                {uniqueStatuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
        )}

        {hasSchoolFilter && uniqueSchools.length > 0 && (
          <div className="filter_school">
            <p>School</p>
            <FormControl fullWidth>
              <CustomSelect
                value={filters.school || ""}
                onChange={handleInputChange("school")}
                input={<CustomInput />}
              >
                <MenuItem value="">All</MenuItem>
                {uniqueSchools.map((school) => (
                  <MenuItem key={school} value={school}>
                    {school}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
        )}

        {hasGradeFilter && uniqueGrades.length > 0 && (
          <div className="filter_grade">
            <p>Grade</p>
            <FormControl fullWidth>
              <CustomSelect
                value={filters.grade || ""}
                onChange={handleInputChange("grade")}
                input={<CustomInput />}
              >
                <MenuItem value="">All</MenuItem>
                {uniqueGrades.map((grade) => (
                  <MenuItem key={grade} value={grade}>
                    {grade}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
        )}

        {hasYearFilter && uniqueYears.length > 0 && (
          <div className="filter_year">
            <p>Year</p>
            <FormControl fullWidth>
              <CustomSelect
                value={filters.year || ""}
                onChange={handleInputChange("year")}
                input={<CustomInput />}
              >
                <MenuItem value="">All</MenuItem>
                {uniqueYears.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
        )}

        {hasTeacherFilter && uniqueTeachers.length > 0 && (
          <div className="filter_teacher">
            <p>Teacher</p>
            <FormControl fullWidth>
              <CustomSelect
                value={filters.teacher || ""}
                onChange={handleInputChange("teacher")}
                input={<CustomInput />}
              >
                <MenuItem value="">All</MenuItem>
                {uniqueTeachers.map((teacher) => (
                  <MenuItem key={teacher} value={teacher}>
                    {teacher}
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBlock;