import React from 'react';
import { test_user } from '../test_data';
import { exit } from '../assets/icons/INDEX.JS';

const UserProfileDropdown = ({ toggleDropdown }) => {
    return (
        <div 
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className='user_profile_dropdown glassmorphism shadow'
        >
            {test_user.map((user, index) => (
                <div className="user_info" key={index}>
                    <img src={user.profilePicture} alt={`${user.username}'s profile`} />
                    <div>
                        <p>{user.username}</p>
                        <p>{user.role}</p>
                    </div>
                </div>
            ))}

            <hr />

            <div className="logout">
                <img src={exit} alt="" />
                <button>Logout</button>
            </div>
        </div>
    );
};

export default UserProfileDropdown;