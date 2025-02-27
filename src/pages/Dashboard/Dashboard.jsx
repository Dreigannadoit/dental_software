import React, { Suspense, lazy } from "react";
import { csdpProgramTrendsSeries, test_user, csdpProgramTrendsSeriesLabels, oralHealthStatusSummaryLabels, oralHealthStatusSummarySeries, childrenReceivingServiceSeries, childrenReceivingServiceLabels, gradeData, ageData, raceData, csdpsStatisticsBySchool } from "../../test_data";
import "../../css/dashboard.css";
import DateTime from "../../components/DateTime";
import { bannerFull } from "../../assets/img";


const Dental_Charts  = lazy(() => import("../../components/Charts/Dental_Charts"));
const Pie_Dental_Charts  = lazy(() => import("../../components/Charts/Pie_Dental_Charts"));
const DashboardTable = lazy(() => import("../../components/Table/DashboardTable"));

const Dashboard = () => {
  return (
    <div className="dashboard auto-sizing">
      <div className="initals f-center">
        <Welcome_Block />

        <div className="numerical_data">
          <Active_Schools />
          <Active_Students />
          <Total_Screened />
        </div>
      </div>

      <div className="statistic_charts">
        {/* TODO: Add suspende to components not in the pages later */}
        <Suspense fallback={<div>Loading Charts...</div>}>
          <div className="line_charts f-center">
            <Dental_Charts
              chartLabel="CSDP Program Trends"
              chartType="area"
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
              stacked={true}
            />
          </div>

          <div className="pie_charts f-center">
            <Pie_Dental_Charts chartLabel="Grade" series={gradeData} />
            <Pie_Dental_Charts chartLabel="Age" series={ageData} />
            <Pie_Dental_Charts chartLabel="Race" series={raceData} />
          </div>
        </Suspense>
      </div>

      <div className="tables">
        <Suspense fallback={<div>Loading Table...</div>}>
          <h1>CSDP's Statistics By School</h1>
          <br />
          <DashboardTable tableTitle="CSDP's Statistics By School" data={csdpsStatisticsBySchool} />
        </Suspense>

        <Suspense fallback={<div>Loading Table...</div>}>
          <h1>CSDP's Statistics By School</h1>
          <br />
          <DashboardTable tableTitle="CSDP's Statistics By Facilities" data={csdpsStatisticsBySchool}/>
        </Suspense>
      </div>
    </div>
  );
};

const Welcome_Block = () => {
  return (
    <div className="welcome_block shadow ">
      {test_user.map((user, index) => (
        <div key={index} className='dotted-bg'>
          <img src={bannerFull} alt="" />
          <div className="greetings">
            <DateTime />
            <h1>Welcome Back!</h1>
            <h2>{user.username}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

const Active_Schools = React.memo(() => {
  return (
    <div className="active_schools active_data shadow">
      <h2>Active Schools</h2>
      <h1>190</h1>
    </div>
  );
});

const Active_Students = React.memo(() => {
  return (
    <div className="active_students active_data shadow">
      <h2>Active Students</h2>
      <h1>190</h1>
    </div>
  );
});

const Total_Screened = React.memo(() => {
  return (
    <div className="total_screened active_data shadow">
      <h2>Total Screened</h2>
      <h1>190</h1>
    </div>
  );
});



export default Dashboard