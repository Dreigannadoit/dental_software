import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
import useActiveLink from "../hooks/useActiveLinks";
import {
  Dashboard,
  Calendar,
  Patients,
  Chart,
  Eligibility,
  Distribution,
  Reports,
  School,
  Grade,
  Program,
  Dental_Codes,
  Procedure_Codes,
  User,
  Import,
} from "../assets/icons/INDEX.JS";
import { updatedPatientInfo } from "../test_data";
import useTableData from "../hooks/useTableData";
import FilterBlock from "./FilterBlocks/FilterBlock";
import TableLoadingAnimation from "./TableLoadingAnimation";

const Side_Bar = ({ isNavOpen }) => {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isPatientsOpen, setIsPatientsOpen] = useState(false);
  const [isPatientProfileOpen, setIsPatientProfileOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [subMenuPosition, setSubMenuPosition] = useState({ top: 0, left: 0 });
  const [sidebarTopPosition, setSidebarTopPosition] = useState(0);
  const reportsRef = useRef(null);
  const patientsRef = useRef(null);
  const patientsMenuTimeoutRef = useRef(null);

  const { isActive } = useActiveLink();

  const toggleReports = useCallback(() => {
    setIsReportsOpen((prev) => !prev);
  }, []);

  const side_nav_width = 240;
  useEffect(() => {
    if (reportsRef.current) {
      const { top, left, height } =
        reportsRef.current.getBoundingClientRect();
      setSubMenuPosition({
        top: top + height / 2 - 120,
        left: left + side_nav_width,
      });
    }
  }, [isReportsOpen, side_nav_width]);

  const openPatientsMenu = useCallback(() => {
    clearTimeout(patientsMenuTimeoutRef.current);
    setIsPatientsOpen(true);
  }, []);

  const closePatientsMenu = useCallback(() => {
    patientsMenuTimeoutRef.current = setTimeout(() => {
      setIsPatientsOpen(false);
      setIsPatientProfileOpen(false);
    }, 300);
  }, []);

  const togglePatientProfile = useCallback((patientId, topPosition) => {
    setSelectedPatientId(patientId);
    setIsPatientProfileOpen(true);
    setSidebarTopPosition(topPosition);
    clearTimeout(patientsMenuTimeoutRef.current);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(patientsMenuTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div
        id="side_nav"
        className={`side_nav glassmorphism shadow ${isNavOpen ? "" : "open"
          }`}
      >
        <nav>
          <ul>
            <li>
              <Link to="#">
                <span>Menu</span>
              </Link>
            </li>
            <li className={isActive("/dashboard") ? "active" : ""}>
              <Link to="/dashboard">
                <span>
                  <img src={Dashboard} alt="" />
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/calendar") ? "active" : ""}>
              <Link to="/calendar">
                <span>
                  <img src={Calendar} alt="" />
                  <span>Calendar</span>
                </span>
              </Link>
            </li>
            <li
              ref={patientsRef}
              className={`${isActive("/patients") ? "active" : ""} ${isPatientsOpen ? "patients_subnav_show" : ""
                }`}
              onMouseEnter={openPatientsMenu}
              onMouseLeave={closePatientsMenu}
            >
              <Link to="/patients">
                <span>
                  <img src={Patients} alt="" />
                  <span>Patients</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/chart") ? "active" : ""}>
              <Link to="/chart">
                <span>
                  <img src={Chart} alt="" />
                  <span>Chart</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/eligibility") ? "active" : ""}>
              <Link to="/eligibility">
                <span>
                  <img src={Eligibility} alt="" />
                  <span>Eligibility</span>
                </span>
              </Link>
            </li>
            <li
              className={isActive("/distribution") ? "active" : ""}
            >
              <Link to="/distribution">
                <span>
                  <img src={Distribution} alt="" />
                  <span>Distribution</span>
                </span>
              </Link>
            </li>

            <li
              ref={reportsRef}
              className={`${isReportsOpen ? "reports_subnav_show" : ""
                }`}
              onMouseEnter={toggleReports}
              onMouseLeave={toggleReports}
            >
              <Link to="/reports/case_management">
                <span>
                  <img src={Reports} alt="Reports" />
                  <span>Reports</span>
                </span>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L6 6L1 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link to="#">
                <span>Maintenance</span>
              </Link>
            </li>

            <li className={isActive("/schools") ? "active" : ""}>
              <Link to="/schools">
                <span>
                  <img src={School} alt="" />
                  <span>School</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/grade") ? "active" : ""}>
              <Link to="/grade">
                <span>
                  <img src={Grade} alt="" />
                  <span>Grade</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/program") ? "active" : ""}>
              <Link to="/program">
                <span>
                  <img src={Program} alt="" />
                  <span>Program</span>
                </span>
              </Link>
            </li>
            <li
              className={isActive("/dental_codes") ? "active" : ""}
            >
              <Link to="/dental_codes">
                <span>
                  <img src={Dental_Codes} alt="" />
                  <span>Dental Codes</span>
                </span>
              </Link>
            </li>
            <li
              className={
                isActive("/procedure_codes") ? "active" : ""
              }
            >
              <Link to="/procedure_codes">
                <span>
                  <img src={Procedure_Codes} alt="" />
                  <span>Procedure Codes</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/users") ? "active" : ""}>
              <Link to="/users">
                <span>
                  <img src={User} alt="" />
                  <span>Users</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/import") ? "active" : ""}>
              <Link to="/import">
                <span>
                  <img src={Import} alt="" />
                  <span>Import</span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <PatientListSubMenus
        isOpen={isPatientsOpen}
        togglePatientProfile={togglePatientProfile}
        onMouseEnter={openPatientsMenu}
        onMouseLeave={closePatientsMenu}
      />
      <PatientProfileSidebar
        isOpen={isPatientProfileOpen}
        patientId={selectedPatientId}
        onMouseEnter={openPatientsMenu}
        onMouseLeave={closePatientsMenu}
        topPosition={sidebarTopPosition}
      />
      <ReportsSubMenus
        toggleReports={toggleReports}
        position={subMenuPosition}
        isOpen={isReportsOpen}
      />
    </>
  );
};

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

    const matchesSchool =
      !filters.school || patient.school === filters.school;
    const matchesGrade =
      !filters.grade || patient.grade?.toString() === filters.grade;
    const matchesYear = !filters.year || patient.year === filters.year;
    const matchesStatus =
      !filters.status || patient.status === filters.status;
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

const PatientListSubMenus = React.memo(
  ({ isOpen, togglePatientProfile, onMouseEnter, onMouseLeave }) => {
    const initialFilters = useMemo(() => ({
      search: "",
      school: "",
      grade: "",
      year: "",
      status: "",
      teacher: "",
    }), []);


    const {
      filters,
      currentPageData,
      handleFilterChange,
      loading,
    } = useTableData(updatedPatientInfo, initialFilters, filterPatients, 10000);

    const handleMouseEnterPatient = useCallback(
      (e, patientId) => {
        const rect = e.currentTarget.getBoundingClientRect();
        togglePatientProfile(patientId, rect.top);
      },
      [togglePatientProfile]
    );


    return (
      <div
        className={`patient_filterSubmenu ${isOpen ? "open" : ""}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div>
          <FilterBlock
            filters={filters}
            onFilterChange={handleFilterChange}
            data={updatedPatientInfo}
          />

          {loading && <TableLoadingAnimation />}
          <div className="list_data">
            <h3>Patients</h3> <br />
            <ul>
              {currentPageData.map((patient) => (
                <li
                  key={patient.id}
                  onMouseEnter={(e) =>
                    handleMouseEnterPatient(e, patient.id)
                  }
                >
                  <Link
                    to={`patients/patient_profile/${patient.id}`}
                  >
                    {patient.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);


const PatientProfileSidebar = React.memo(
  ({ isOpen, patientId, onMouseEnter, onMouseLeave, topPosition }) => {
    const sidebarRef = React.useRef(null);

    // Adjust position dynamically
    const calculateTopPosition = () => {
      const viewportHeight = window.innerHeight;
      const sidebarHeight = sidebarRef.current?.offsetHeight || 0;

      // Ensure the sidebar doesn't exceed the top or bottom of the screen
      if (topPosition < 0) {
        return 0; // Stick to the top
      } else if (topPosition + sidebarHeight > viewportHeight) {
        return viewportHeight - sidebarHeight; // Adjust to fit within the viewport
      }
      return topPosition;
    };

    const adjustedTopPosition = useMemo(calculateTopPosition, [topPosition]);

    const sidebarStyle = useMemo(() => ({
      top: `${adjustedTopPosition}px`,
    }), [adjustedTopPosition]);

    const links = [
      { url: "patients/patient_profile/#Medical_History", label: "Medical Records" },
      { url: "patients/patient_profile/#Program_Participants", label: "Program Participants" },
      { url: "patients/patient_profile/#Appointments", label: "Appointments" },
      { url: "patients/patient_profile/#Perio_Chart", label: "Perio Chart" },
      { url: "patients/patient_profile/#Treatment_History", label: "Treatment History" },
      { url: "patients/patient_profile/#Medical_History", label: "Medical Records" },
      { url: "patients/patient_profile/#Medical_History", label: "Medical Records" },
      { url: "patients/patient_profile/#Patient_Details_History", label: "Patient Details History" },
      { url: "patients/patient_profile/#Communications", label: "Communications" },
      { url: "patients/patient_profile/#Guardians", label: "Guardians" },
      { url: "patients/patient_profile/#Attachments", label: "Attachments" },
    ];

    return (
      <div
        ref={sidebarRef}
        className={`patient_profile_sidebar glassmorphism shadow ${isOpen ? "open" : ""}`}
        style={sidebarStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <p>{patientId}</p>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);


const ReportsSubMenus = React.memo(
  ({ toggleReports, position, isOpen }) => {
    const style = useMemo(() => ({
      top: `calc(${position.top}px) `,
      left: `${position.left}px`,
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
    }), [position, isOpen]);

    return (
      <div
        className="reports_sub_menus glassmorphism shadow"
        style={style}
        onMouseEnter={toggleReports}
        onMouseLeave={toggleReports}
      >
        <ul>
          <li>
            <Link to="/reports/case_management">
              Case Management
            </Link>
          </li>
          <li>
            <Link to="/reports/activity">Activity</Link>
          </li>
          <li>
            <Link to="/reports/statistics_reports">
              Statistic Reports
            </Link>
          </li>
          <li>
            <Link to="/reports/state_reports_grade">
              State Reports Grade
            </Link>
          </li>
          <li>
            <Link to="/reports/end_of_year">End Of Year Report</Link>
          </li>
        </ul>
      </div>
    );
  }
);

export default Side_Bar;