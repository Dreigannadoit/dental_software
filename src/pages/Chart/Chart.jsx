import React from 'react'
import "../../css/Charts.css"
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import "../../css/Charts.css"


const Chart = () => {

  return (
    <>
      <div className="teeth_chart_wrapper">
        <div className="teeth_chart_container">
          <div className="controller">
            <div className="teeth_tpye">
              <button>Primary</button>
              <button>Permanent</button>
              <button>Standard Mix</button>
            </div>

            <div className="table_actions">
              <div className="history_checkbox">
                <label htmlFor="history check box">
                  Remove
                 <Checkbox />
                </label>
              </div>
              <div className="history_checkbox">
                <label htmlFor="history check box">
                  History
                 <Checkbox />
                </label>
              </div>
            </div>
          </div>

          <div className="teeth_chart">
            <table>
              <tbody>
                <tr>
                  <td>body</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div className="options">
          <div className="return_options">
            <Link>Patient Profile</Link>
            <Link>Chart</Link>
          </div>

          <div className="patient_info">

          </div>

          <div className="actions">

          </div>
        </div>
      </div>
    </>
  )
}

const history = () => {
  return (
    <div className=""></div>
  )
}

export default Chart