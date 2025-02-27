import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Dental_Charts = ({ chartLabel, chartType, series, xLabels, stacked=false }) => {
  return (
    <div aria-label={chartLabel} className="graph f-center glassmorphism shadow">
      <div style={{ width: "100%" }}>
        <ApexChart
          chartLabel={chartLabel}
          chartType={chartType}
          series={series}
          xLabels={xLabels}
          stacked={stacked}
        />
      </div>
    </div>
  );
};

const ApexChart = ({ chartLabel, chartType, series, xLabels, stacked }) => {
  const options = {
    chart: {
      type: {chartType},
      stacked: stacked, // Toggle stacking
      stackType: stacked ? "100%" : undefined, // 100% stack if true
    },
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
