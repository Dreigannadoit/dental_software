import React from 'react'
import { csdpProgramTrendsSeries, test_user, csdpProgramTrendsSeriesLabels, oralHealthStatusSummaryLabels, oralHealthStatusSummarySeries, childrenReceivingServiceSeries, childrenReceivingServiceLabels, gradeData, ageData, raceData } from '../../test_data'
import '../../css/dashboard.css'
import DateTime from '../../components/DateTime'
import { bannerFull } from '../../assets/img'
import Dental_Charts from '../../components/Dental_Charts'
import Pie_Dental_Charts from '../../components/Pie_Dental_Charts'
import DashboardTable from '../../components/DashboardTable'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="initals f-center">
        <Welcome_Block />
        <Active_Schools />
        <Active_Students />
        <Total_Screened />
      </div>

      <div className="statistic_charts">
        <div className="line_charts f-center">
          <Dental_Charts
            chartLabel="CSDP Program Trends"
            chartType="line"
            series={csdpProgramTrendsSeries}
            xLabels={csdpProgramTrendsSeriesLabels}
          />

          <Dental_Charts
            chartLabel="Oral Health Status (%) Summary"
            chartType="bar"
            series={oralHealthStatusSummarySeries}
            xLabels={oralHealthStatusSummaryLabels}
          />
          
          <Dental_Charts
            chartLabel="% Of Children Receiving The Following Service"
            chartType="bar"
            series={childrenReceivingServiceSeries}
            xLabels={childrenReceivingServiceLabels}
          />
        </div>
        
        <div className="pie_charts f-center">
          <Pie_Dental_Charts chartLabel="Grade" series={gradeData} />
          <Pie_Dental_Charts chartLabel="Age" series={ageData} />
          <Pie_Dental_Charts chartLabel="Race" series={raceData} />
        </div>
      </div>

      <div className="tables">
        <DashboardTable />
      </div>
    </div>
  );
}

const Welcome_Block = () => {
  return (
    <div className="welcome_block shadow ">
      {test_user.map((user, index) => (
        <div key={index} className='dotted-bg'>
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