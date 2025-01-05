import React from 'react'
import { test_user } from '../../test_data'
import '../../css/dashboard.css'
import DateTime from '../../components/DateTime'
import { bannerFull } from '../../assets/img'
import CSDP_Program_Trends from '../../components/CSDP_Program_Trends_Line_Graph'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="initals f-center">
        <Welcome_Block />
        <Active_Schools />
        <Active_Students />
        <Total_Screened />
      </div>

      <div className="graphs">
        <div className="line_charts">
          <CSDP_Program_Trends />
        </div>
        <div className="pie_charts">

        </div>
      </div>

      <div className="tables">

      </div>
    </div>
  )
}

const Welcome_Block = () => {
  return (
    <div className="welcome_block shadow">
      {test_user.map((user, index) => (
        <div key={index}>
          <img src={bannerFull} alt="" />
          <DateTime />
          <h1>Welcom Back!</h1>
          <h2>{user.username}</h2>
        </div>
      ))}
    </div>
  );
};

const Active_Schools = () => {
  return (
    <div className="active_schools active_data shadow">
      <h2>Active Schools</h2>
      <h1>190</h1>
    </div>
  );
};

const Active_Students = () => {
  return (
    <div className="active_students active_data shadow">
      <h2>Active Students</h2>
      <h1>190</h1>
    </div>
  );
};

const Total_Screened = () => {
  return (
    <div className="total_screened active_data shadow">
      <h2>Total Screened</h2>
      <h1>190</h1>
    </div>
  );
};


export default Dashboard