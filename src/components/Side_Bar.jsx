import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useActiveLink from '../hooks/useActiveLinks';

const Side_Bar = () => {
  const { isActive } = useActiveLink();

  return (
    <div className="side_nav glassmorphism shadow">
      <nav>
        <ul>
          <li className={isActive('/dashboard') ? 'active' : ''}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={isActive('/calendar') ? 'active' : ''}>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className={isActive('/patients') ? 'active' : ''}>
            <Link to="/patients">Patients</Link>
          </li>
          <li className={isActive('/chart') ? 'active' : ''}>
            <Link to="/chart">Chart</Link>
          </li>
          <li className={isActive('/eligibility') ? 'active' : ''}>
            <Link to="/eligibility">Eligibility</Link>
          </li>
          <li className={isActive('/distribution') ? 'active' : ''}>
            <Link to="/distribution">Distribution</Link>
          </li>

          <li className={`${isActive('/reports') ? 'active' : ''} reports_subnav`}>
            <Link to="#">
              <span>Reports</span>
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
            <Reports_Sub_Menus />
          </li>

          <li className={isActive('/schools') ? 'active' : ''}>
            <Link to="/schools">Schools</Link>
          </li>
          <li className={isActive('/grade') ? 'active' : ''}>
            <Link to="/grade">Grade</Link>
          </li>
          <li className={isActive('/program') ? 'active' : ''}>
            <Link to="/program">Program</Link>
          </li>
          <li className={isActive('/dental_codes') ? 'active' : ''}>
            <Link to="/dental_codes">Dental Codes</Link>
          </li>
          <li className={isActive('/procedure_codes') ? 'active' : ''}>
            <Link to="/procedure_codes">Procedure Codes</Link>
          </li>
          <li className={isActive('/users') ? 'active' : ''}>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Reports_Sub_Menus = () => {
  return (
    <div className="reports_sub_menus glassmorphism shadow">
      <ul>
        <li><Link to="/reports/case_management">Case Management</Link></li>
        <li><Link to="/reports/activity">Activity</Link></li>
        <li><Link to="/reports/statistics_reports">Statistic Reports</Link></li>
        <li><Link to="/reports/state_reports_grade">State Reports Grade</Link></li>
        <li><Link to="/reports/end_of_year">End Of Year Report</Link></li>
      </ul>
    </div>
  );
};

export default Side_Bar;