import { BarChart, LineChart } from '@mui/x-charts'
import React from 'react'

const uData = [4000, 3000, 2000];
const pData = [2400, 1398, 9800];
const xLabels = [
  '2022',
  '2023',
  '2024',
];

const CSDP_Program_Trends = () => {
  return (
    <div>
      CSDP_Program_Trends

      <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
  )
}

export default CSDP_Program_Trends