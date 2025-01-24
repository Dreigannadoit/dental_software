import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useActiveLink from "../hooks/useActiveLinks";
import { Dashboard } from "../assets/icons/INDEX.JS";
import { Calendar } from "../assets/icons/INDEX.JS";
import { Patients } from "../assets/icons/INDEX.JS";
import { Chart } from "../assets/icons/INDEX.JS";
import { Eligibility } from "../assets/icons/INDEX.JS";
import { Distribution } from "../assets/icons/INDEX.JS";
import { Reports } from "../assets/icons/INDEX.JS";
import { School } from "../assets/icons/INDEX.JS";
import { Grade } from "../assets/icons/INDEX.JS";
import { Program } from "../assets/icons/INDEX.JS";
import { Dental_Codes } from "../assets/icons/INDEX.JS";
import { Procedure_Codes } from "../assets/icons/INDEX.JS";
import { User } from "../assets/icons/INDEX.JS";
import { Import } from "../assets/icons/INDEX.JS";

const Side_Bar = ({ isNavOpen }) => {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [subMenuPosition, setSubMenuPosition] = useState({ top: 0, left: 0 });
  const reportsRef = useRef(null);

  const { isActive } = useActiveLink();

  const toggleReports = () => {
    setIsReportsOpen((prev) => !prev);
  };

  // Change side_nav_width propert in app.css if you change value here
  const side_nav_width = 230;
  useEffect(() => {
    if (reportsRef.current) {
      const { top, left, height } = reportsRef.current.getBoundingClientRect();
      setSubMenuPosition({ top: top + (height / 2) - 120, left: left + side_nav_width });
    }
  }, [isReportsOpen]);

  return (
    <>
      <div id="side_nav" className={`side_nav glassmorphism shadow ${isNavOpen ? "" : "open"}`}>
        <nav>
          <ul>
            <li>
              <Link to="#">
                <span>
                  Menu
                </span>
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
                </span></Link>
            </li>
            <li className={isActive("/patients") || isActive("/patients/patient_profile") ? "active" : ""}>
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
            <li className={isActive("/distribution") ? "active" : ""}>
              <Link to="/distribution">

                <span>
                  <img src={Distribution} alt="" />
                  <span>Distribution</span>
                </span></Link>
            </li>

            <li
              ref={reportsRef}
              className={`${isReportsOpen ? "reports_subnav_show" : ""}`}
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
                <span>
                  Maintenance
                </span>
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
            <li className={isActive("/dental_codes") ? "active" : ""}>
              <Link to="/dental_codes">

                <span>
                  <img src={Dental_Codes} alt="" />
                  <span>Dental Codes</span>
                </span>
              </Link>
            </li>
            <li className={isActive("/procedure_codes") ? "active" : ""}>
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
      
      <Reports_Sub_Menus
        toggleReports={toggleReports}
        position={subMenuPosition}
        isOpen={isReportsOpen}
      />
    </>
  );
};

const Reports_Sub_Menus = ({ toggleReports, position, isOpen }) => {
  const style = {
    top: `calc(${position.top}px) `,
    left: `${position.left}px`,
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? "auto" : "none",
  };

  return (
    <div
      className="reports_sub_menus glassmorphism shadow"
      style={style}
      onMouseEnter={toggleReports}
      onMouseLeave={toggleReports}
    >
      <ul>
        <li>
          <Link to="/reports/case_management">Case Management</Link>
        </li>
        <li>
          <Link to="/reports/activity">Activity</Link>
        </li>
        <li>
          <Link to="/reports/statistics_reports">Statistic Reports</Link>
        </li>
        <li>
          <Link to="/reports/state_reports_grade">State Reports Grade</Link>
        </li>
        <li>
          <Link to="/reports/end_of_year">End Of Year Report</Link>
        </li>
      </ul>
    </div>
  );
};

export default Side_Bar;
