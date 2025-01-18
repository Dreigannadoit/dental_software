import React from 'react'
import useTableData from '../../hooks/useTableData';
import FilterBlock from '../../components/FilterBlocks/FilterBlock';
import { updatedPatientInfo } from '../../test_data';
import RowsPerPage from '../../components/RowsPerPage';
import TableLoadingAnimation from '../../components/TableLoadingAnimation';
import { TestStudentImg } from '../../assets/img';
import "../../css/Charts.css"
import AnimatedButton from '../../components/AnimatedButton';
import { Chart, View } from '../../assets/icons';

const filterPatients = (patients, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return patients.filter((patient) => {
    const searchQuery = safeToLowerCase(filters.search || "");
    const matchesSearch =
      !filters.search ||
      [
        patient.name,
        patient.id?.toString(),
        patient.gender,
        patient.age?.toString(),
        patient.teacher,
        patient.school,
        patient.year,
        patient.status,
        patient.birthdate,
        patient.insurance,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    const matchesSchool = !filters.school || patient.school === filters.school;
    const matchesGrade =
      !filters.grade || patient.grade?.toString() === filters.grade;
    const matchesYear = !filters.year || patient.year === filters.year;
    const matchesStatus = !filters.status || patient.status === filters.status;
    const matchesTeacher =
      !filters.teacher || patient.teacher === filters.teacher;

    return (
      matchesSearch &&
      matchesSchool &&
      matchesGrade &&
      matchesYear &&
      matchesStatus &&
      matchesTeacher
    );
  });
};

const ChartDictionary = () => {
  const initialFilters = {
    search: "",
    school: "",
    grade: "",
    year: "",
    status: "",
    teacher: "",
  };

  const {
    filters,
    rowsPerPage,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handleRowsPerPageChange,
    handlePageChange,
    loading,
  } = useTableData(updatedPatientInfo, initialFilters, filterPatients);


  return (
    <div className='chart_dictionary'>
      <FilterBlock
        filters={filters}
        onFilterChange={handleFilterChange}
        data={updatedPatientInfo}
        hasSchoolFilter
        hasGradeFilter
        hasYearFilter
        hasStatusfilter
        hasTeacherFilter
      />

      <div className="table_controls">
        <RowsPerPage
          rowsPerPage={rowsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>

      <div className="block_area">

        <div className="patient_card_container">
          {loading && <TableLoadingAnimation />}
          {currentPageData.length > 0 ? (
            currentPageData.map((patient, index) => (
              <div className="patient_card shadow" key={index}>
                {/* <img src={TestStudentImg} alt="" /> */}
                <div className="patient_details">
                  <div className="info">
                    <p><strong>NAME: </strong> <br /> {patient.name}</p>
                    <p><strong>SCHOOL: </strong> <br /> {patient.school}</p>
                    <p><strong>PROGRAM: </strong> <br /> {patient.school_year}</p>
                  </div>
                  <div className="links-controller">
                    <AnimatedButton
                      type="routerLink"
                      classLabel="view_patient_link"
                      label="Profile"
                      icon={View}
                      backgroundColor="#8BE5FE"
                      url={`patients/patient_profile/${patient.id}`}
                    />
                    <AnimatedButton
                        type="routerLink"
                        classLabel="view_chart_link"
                        label="Charts"
                        icon={Chart}
                        backgroundColor="#FE9C8F"
                        url={`chart/chartOfPatient/${patient.id}`}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="patient_card shadow">
              <img src={TestStudentImg} alt="" />
              <div className="patient_details">
                <p><strong>No Student</strong></p>
              </div>
            </div>
          )}

        </div>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="shadow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Back
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="shadow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

    </div>
  )
}

export default ChartDictionary