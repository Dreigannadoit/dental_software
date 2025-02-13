import React from 'react'

const Standard_Mix = ({ toothActions, selectedTeeth, removeMode, onToothClick, onRemoveAction, isAdult, isChild, setTeethData, teethData }) => {
    return (
        <div className='standard_mix_case dental_chart'>
            <table>
                <tbody>

                    <tr className='upper_teeth tooth_container'>

                        {teethData.slice(0, 16).map((teeth, index) => {
                            // Check if "Missing" is applied to this tooth and set opacity
                            const toothStyle = toothActions[index] && toothActions[index].some(action => action.importValue === "M")
                                ? { opacity: 0 }
                                : {};

                            return (
                                <td
                                    key={index}
                                    onClick={() => onToothClick(index)} // Handle tooth selection on click
                                    className={selectedTeeth.includes(index) ? "selected" : ""} // Highlight selected tooth
                                >
                                    <div className="">
                                        <div className="dental_codes_inserted">
                                            {toothActions[index] && toothActions[index].map((action, actionIndex) => (
                                                <div
                                                    key={actionIndex}
                                                    className='f-center dental_symbols'
                                                    style={{ backgroundColor: action.backgroundColor, color: action.color }}
                                                    onClick={() => removeMode && onRemoveAction(index, actionIndex)} // Remove action if removeMode is active
                                                >
                                                    {action.importValue}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="tooth">
                                            {teeth.toothType === "primary" && (
                                                <>
                                                    <p>{teeth.primaryLabel}</p>
                                                    <img
                                                        src={teeth.primaryImage}
                                                        className={teeth.primaryClass}
                                                        alt=""
                                                        style={toothStyle}
                                                    />
                                                </>
                                            )}
                                            {teeth.toothType === "permanent" && (
                                                <>
                                                    <p>{teeth.permanentLabel}</p>
                                                    <img
                                                        src={teeth.permanentImage}
                                                        className={teeth.permanentClass}
                                                        alt=""
                                                        style={toothStyle}
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </td>
                            );
                        })}
                    </tr>

                    <tr className='directions'>
                        <td>L</td>
                        <td colSpan="14"></td>
                        <td>R</td>
                    </tr>

                    <tr className='lower_teeth tooth_container'>
                        {teethData.slice(16, 32).reverse().map((teeth, index) => {
                            const toothIndex = 32 - index - 1;

                            // Apply opacity if "Missing" is selected for this tooth
                            const toothStyle = toothActions[toothIndex] && toothActions[toothIndex].some(action => action.importValue === "M")
                                ? { opacity: 0 }
                                : {};

                            return (
                                <td
                                    key={toothIndex}
                                    onClick={() => onToothClick(toothIndex)}
                                    className={selectedTeeth.includes(toothIndex) ? "selected" : ""}
                                >
                                    <div className="">

                                        <div className="dental_codes_inserted">
                                            {toothActions[toothIndex] && toothActions[toothIndex].map((action, actionIndex) => (
                                                <div
                                                    key={actionIndex}
                                                    className='f-center dental_symbols'
                                                    style={{ backgroundColor: action.backgroundColor, color: action.color }}
                                                    onClick={() => removeMode && onRemoveAction(toothIndex, actionIndex)} // Remove if checkbox is checked
                                                >
                                                    {action.importValue}
                                                </div>
                                            ))}
                                        </div>


                                        <div className="tooth">
                                            {teeth.toothType === "primary" && (
                                                <>
                                                    <img
                                                        src={teeth.primaryImage}
                                                        className={teeth.primaryClass}
                                                        alt=""
                                                        style={toothStyle}
                                                    />
                                                    <p>{teeth.primaryLabel}</p>
                                                </>
                                            )}
                                            {teeth.toothType === "permanent" && (
                                                <>
                                                    <img
                                                        src={teeth.permanentImage}
                                                        className={teeth.permanentClass}
                                                        alt=""
                                                        style={toothStyle}
                                                    />
                                                    <p>{teeth.permanentLabel}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Standard_Mix;