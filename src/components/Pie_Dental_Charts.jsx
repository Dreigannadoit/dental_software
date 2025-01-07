import { PieChart } from "@mui/x-charts";
import React from "react";

const Pie_Dental_Charts = ({ chartLabel, series }) => {
  const pieParams = {
    height: 200,
    width: 400,
    margin: { right: 5 },
    slotProps: { 
      legend: { hidden: true },
      tooltip: {
        sx: {
          backgroundColor: "#000000", // Set tooltip background color to dark grey
          color: "white", // Optional: Make text white for contrast
        },
      },
    },
    series: [
      {
        data: series,
        innerRadius: 70,
        outerRadius: 120,
        highlightScope: { fade: "global", highlight: "item" },
        faded: { innerRadius: 90, additionalRadius: -10, color: "gray" },
        tooltip: {
          formatter: (item) =>
            `${item.label}: ${item.value} (${((item.value / totalValue) * 100).toFixed(2)}%)`,
        },
        // Remove the white outline here
        style: {
          border: 'none' ,
          strokeWidth: 0,
        }
      },
    ],
  };

  const totalValue = series.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="graph f-center glassmorphism shadow pie_chart">
      <h1>{chartLabel}</h1>
      <PieChart  
        colors={['#7577EF', '#A5B94E', '#BE29C6', '#D1FFF7', '#F14D4D', '#FFCB78']}  
        {...pieParams} 
      />
    </div>
  );
};

export default Pie_Dental_Charts;