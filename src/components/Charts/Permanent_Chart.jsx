import React from 'react'

const Permanent_Chart = ({ toothActions, selectedTeeth, removeMode, onToothClick, onRemoveAction, teethData }) => {
    const renderTooth = (index, isLower = false) => {
        const tooth = teethData[index]
        const hasMissing = toothActions[index]?.some(a => a.importValue === "M")
        const isSelected = selectedTeeth.includes(index)
        const toothType = tooth.showPrimary ? 'primary' : 'permanent'
    
        return (
          <td key={index} onClick={() => onToothClick(index)} className={isSelected ? "selected" : ""}>
            <div>
              <div className="dental_codes_inserted">
                {toothActions[index]?.map((action, i) => (
                  <div
                    key={i}
                    className='f-center dental_symbols'
                    style={{ backgroundColor: action.backgroundColor, color: action.color }}
                    onClick={() => removeMode && onRemoveAction(index, i)}
                  >
                    {action.importValue}
                  </div>
                ))}
              </div>
              <div className="tooth">
                {[tooth.showPrimary, tooth.showPermanent].map((show, i) => (
                  show && (
                    <React.Fragment key={i}>
                      {!isLower && <p className={tooth[`${toothType}Class`]}>{tooth[`${toothType}Label`]}</p>}
                      <img
                        src={tooth[`${toothType}Image`]}
                        className={tooth[`${toothType}Class`]}
                        alt=""
                        style={{ opacity: hasMissing ? 0 : 1 }}
                      />
                      {isLower && <p className={tooth[`${toothType}Class`]}>{tooth[`${toothType}Label`]}</p>}
                    </React.Fragment>
                  )
                ))}
              </div>
            </div>
          </td>
        )
      }
    
      return (
        <div className='permanent dental_chart'>
          <table>
            <tbody>
              <tr className='upper_teeth tooth_container'>
                {teethData.slice(0, 16).map((_, i) => renderTooth(i))}
              </tr>
              
              <tr className='directions'>
                <td>L</td><td colSpan="14"></td><td>R</td>
              </tr>
    
              <tr className='lower_teeth tooth_container'>
                {teethData.slice(16, 32).reverse().map((_, i) => renderTooth(31 - i, true))}
              </tr>
            </tbody>
          </table>
        </div>
      )
};

export default Permanent_Chart;