import React, { useState } from 'react'
import "../../css/Charts.css"
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import "../../css/Charts.css"
import {
  primary_1,
  primary_2,
  primary_3,
  primary_4,
  primary_5,
  primary_6,
  primary_7,
  primary_8,
  primary_9,
  primary_10,
  primary_11,
  primary_12,
  primary_13,
  primary_14,
  primary_15,
  primary_16,
  primary_17,
  primary_18,
  primary_19,
  primary_20,
} from '../../assets/img/primary_teeth/primary_teeth';

const actionButtons = [
  {
    label: "Decay",
    importValue: "D",
    backgroundColor: "red",
  },
  {
    label: "Filled",
    importValue: "F",
    backgroundColor: "blue",
  },
  {
    label: "Missing",
    importValue: "M",
    backgroundColor: "#e3b824",
  },
  {
    label: "Sealant",
    importValue: "S",
    backgroundColor: "#27a019",
  },
  {
    label: "Sealant Plase",
    importValue: "PS",
    backgroundColor: "#d1562c",
  },
  {
    label: "Retained Sealant",
    importValue: "RS",
    backgroundColor: "#891db4",
  },
  {
    label: "Partial Eruption",
    importValue: "PE",
    backgroundColor: "#f3f934",
  },
  {
    label: "Unerepted",
    importValue: "UE",
    backgroundColor: "#f99f34",
  },
  {
    label: "Stainless Steel Crown",
    importValue: "SS",
    backgroundColor: "#e2c9ab",
  },
  {
    label: "Untreated Caries",
    importValue: "UC",
    backgroundColor: "#1a5298",
  },
  {
    label: "Silver Diamine Flouride",
    importValue: "SDF",
    backgroundColor: "#37f7d1",
  },
]

const teethChatContent = [
  {
    image: primary_1,
    label: "A",
    class: "tooth_1",
    actionsInputed: [
      {
        importValue: "SDF",
        backgroundColor: "#37f7d1",
      },
      {
        importValue: "UC",
        backgroundColor: "#1a5298",
      },
      {
        importValue: "SS",
        backgroundColor: "#e2c9ab",
      },
    ]
  },
  {
    image: primary_2,
    label: "2",
    class: "tooth_2",
    actionsInputed: []
  },
  {
    image: primary_3,
    label: "3",
    class: "tooth_3",
    actionsInputed: []
  },
  {
    image: primary_4,
    label: "4",
    class: "tooth_4",
    actionsInputed: []
  },
  {
    image: primary_5,
    label: "5",
    class: "tooth_5",
    actionsInputed: []
  },
  {
    image: primary_6,
    label: "6",
    class: "tooth_6",
    actionsInputed: []
  },
  {
    image: primary_7,
    label: "7",
    class: "tooth_7",
    actionsInputed: []
  },
  {
    image: primary_8,
    label: "8",
    class: "tooth_8",
    actionsInputed: []
  },
  {
    image: primary_9,
    label: "9",
    class: "tooth_9",
    actionsInputed: []
  },
  {
    image: primary_10,
    label: "10",
    class: "tooth_10",
    actionsInputed: []
  },
  {
    image: primary_11,
    label: "11",
    class: "tooth_11",
    actionsInputed: []
  },
  {
    image: primary_12,
    label: "12",
    class: "tooth_12",
    actionsInputed: []
  },
  {
    image: primary_13,
    label: "13",
    class: "tooth_13",
    actionsInputed: []
  },
  {
    image: primary_14,
    label: "14",
    class: "tooth_14",
    actionsInputed: []
  },
  {
    image: primary_15,
    label: "15",
    class: "tooth_15",
    actionsInputed: []
  },
  {
    image: primary_16,
    label: "16",
    class: "tooth_16",
    actionsInputed: []
  },
  {
    image: primary_17,
    label: "17",
    class: "tooth_17",
    actionsInputed: []
  },
  {
    image: primary_18,
    label: "18",
    class: "tooth_18",
    actionsInputed: []
  },
  {
    image: primary_19,
    label: "19",
    class: "tooth_19",
    actionsInputed: []
  },
  {
    image: primary_20,
    label: "20",
    class: "tooth_20",
    actionsInputed: []
  },

];

const Chart = ({ patient, patientID }) => {

  return (
    <>
      <div className="tooth_wrapper">
        <div className="menu">
          <div className="switch_tooth_layout_button">
            <button>Primary</button>
            <button>Permanent</button>
            <button>Standard Mix</button>
          </div>
          <div className="use_case">
            
          </div>
        </div>
        <div className="tooth_container">

        </div>
      </div>
    </>
  )
}


export default Chart