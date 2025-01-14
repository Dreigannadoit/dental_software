import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { User_Add } from "../assets/icons";

const FilterBlock = ({
  filters,
  onFilterChange,
  data,
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
    <div className="filter_block">
      <div className="general_fields">
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
        {hasAddToTableButton &&
          <AnimatedButton
            type="button"
            classLabel="add_new"
            label="Add To List"
            icon={User_Add}
            backgroundColor="#8BE5FE"
            url="#"
          />
        }
      </div>

      <div className="filer_fields">
        {hasTypeFilter && uniqueType.length > 0 && (
          <div className="filter_school">
            <p>Type</p>
            <FormControl fullWidth>
              <Select
                value={filters.type || ""}
                onChange={handleInputChange("type")}
              >
                <MenuItem value="">All</MenuItem>
                {uniqueType.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}

        {hasStatusfilter && uniqueStatuses.length > 0 && (
          <div className="filter_status">
            <p>Status</p>
            <FormControl fullWidth>
              <Select
                value={filters.status || ""}
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
        )}

        {hasSchoolFilter && uniqueSchools.length > 0 && (
          <div className="filter_school">
            <p>School</p>
            <FormControl fullWidth>
              <Select
                value={filters.school || ""}
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
        )}

        {hasGradeFilter && uniqueGrades.length > 0 && (
          <div className="filter_grade">
            <p>Grade</p>
            <FormControl fullWidth>
              <Select
                value={filters.grade || ""}
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
        )}

        {hasYearFilter && uniqueYears.length > 0 && (
          <div className="filter_year">
            <p>Year</p>
            <FormControl fullWidth>
              <Select
                value={filters.year || ""}
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
        )}

        {hasTeacherFilter && uniqueTeachers.length > 0 && (
          <div className="filter_teacher">
            <p>Teacher</p>
            <FormControl fullWidth>
              <Select
                value={filters.teacher || ""}
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
        )}
      </div>
    </div>
  );
};

export default FilterBlock;
