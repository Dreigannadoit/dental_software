import React from 'react'
import Header from '../../components/Header'
import Side_Bar from '../../components/Side_Bar'
import { test_user } from '../../test_data'

const Dashboard = () => {
  return (
    <>
      <Welcome_Block />
    </>
  )
}

const Welcome_Block = () => {
  return (
    <div className="welcome_block">
      {test_user.map((user, index) => (
        <div key={index}>
          <p>{user.username}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
};


export default Dashboard