import React, { useEffect, useState } from 'react'
import { logo } from '../assets/icons/INDEX.JS'
import { userAvatar } from '../assets/icons/INDEX.JS'
import { navIcon } from '../assets/icons/INDEX.JS'
import UserProfileDropdown from './UserProfileDropdown'
import { useLocation } from 'react-router-dom'

// Map route paths to readable page names
const pageNames = {
    '/profile': 'User Profile',
    '/dashboard': 'Dashboard',
    '/calendar': 'Calendar',
    '/patients': 'Patients',
    '/patients/patient_profile': 'Patient Profile',
    '/chart': 'Chart',
    '/chart/chartOfPatient': 'Chart',
    '/eligibility': 'Eligibility',
    '/distribution': 'Distribution',
    '/reports': 'Reports',
    '/reports/case_management': 'Case Management',
    '/reports/activity': 'Activity',
    '/reports/statistics_reports': 'Statistics Reports',
    '/reports/state_reports_grade': 'State Reports Grade',
    '/reports/end_of_year': 'End Of Year Report',
    '/schools': 'Schools',
    '/grade': 'Grade',
    '/program': 'Program',
    '/dental_codes': 'Dental Codes',
    '/procedure_codes': 'Procedure Codes',
    '/users': 'Users',
    '/import': 'Import',
};

const Header = ({ toggleSideNav }) => {
    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false)

    const current_page = pageNames[location.pathname] || 'Patient Profile'; // Temporary Fix

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header glassmorphism shadow ${showDropdown ? 'show_dropdown' : ''} ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="side_nav_controller f-center">
                    <button aria-label="Toggle Side Navigation" onClick={toggleSideNav}>
                        <img src={navIcon} alt="Navigation Icon" />
                    </button>
                </div>

                <div className="current_page f-center">
                    <h2>{current_page}</h2>
                </div>

                
                <div className="user_avatar f-center">
                    {/* Remove For Official Site */}
                    <button
                        className={isDarkMode ? 'dark-mode-active' : ''}
                        onClick={() => setIsDarkMode((prev) => !prev)}
                    >
                        Dark Mode
                    </button>
                    <img 
                        src={userAvatar} 
                        alt="User Avatar" 
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={toggleDropdown}
                    />
                </div>
            </div>

            <UserProfileDropdown toggleDropdown={toggleDropdown} />
        </>
    );
};

export default Header