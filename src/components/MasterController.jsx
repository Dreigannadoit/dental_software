import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MasterController = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`master-controller ${isActive ? 'active' : ''}`}>
            {/* Toggle Button */}
            <button onClick={toggleClass}>
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
            </button>

            {/* Navigation Menu */}
            <nav id='master-controller'>
                <ul>
                    <li><p><b> Master Navigation </b></p></li>
                    <li><Link to="/">Login/Registration</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/patients">Patients</Link></li>
                    <li><Link to="/patients/patient_profile">Patient Profile</Link></li>
                    <li><Link to="/chart">Chart</Link></li>
                    <li><Link to="/eligibility">Eligibility</Link></li>
                    <li><Link to="/distribution">Distribution</Link></li>

                    <br />

                    <li><Link to="/reports">Reports</Link></li>
                    <ul>
                        <li><Link to="/reports/case_management">Case Management</Link></li>
                        <li><Link to="/reports/activity">Activity</Link></li>
                        <li><Link to="/reports/statistics_reports">Statistic Reports</Link></li>
                        <li><Link to="/reports/state_reports_grade">State Reports Grade</Link></li>
                        <li><Link to="/reports/end_of_year">End Of Year Report</Link></li>
                    </ul>

                    <br />

                    <li><Link to="/schools">Schools</Link></li>
                    <li><Link to="/grade">Grade</Link></li>
                    <li><Link to="/program">Program</Link></li>
                    <li><Link to="/dental_codes">Dental Codes</Link></li>
                    <li><Link to="/procedure_codes">Procedure Codes</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/import">Import</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MasterController;
