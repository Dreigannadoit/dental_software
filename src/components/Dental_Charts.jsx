import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Dental_Charts = ({ chartLabel, chartType, series, xLabels }) => {
  return (
    <div aria-label={chartLabel} className="graph f-center glassmorphism shadow">
      <div style={{ width: "100%" }}>
        <ApexChart
          chartLabel={chartLabel}
          chartType={chartType}
          series={series}
          xLabels={xLabels}
        />
      </div>
    </div>
  );
};

const ApexChart = ({ chartLabel, chartType, series, xLabels }) => {
  const options = {
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      categories: xLabels,
      tickAmount: 10,
    },
    title: {
      text: chartLabel,
      align: "left",
      style: {
        fontFamily: '"Josefin Sans", serif',
        fontSize: "22px",
        color: "#666",
        fontWeight: "600",
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type={chartType} height={280} />
    </div>
  );
};

export default Dental_Charts;
