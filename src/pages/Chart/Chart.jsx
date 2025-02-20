import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import Permanent_Chart from '../../components/Charts/Permanent_Chart';
import Primary_Chart from '../../components/Charts/Primary_Chart';
import Standard_Mix from '../../components/Charts/Standard_Mix';
import useAnimation from '../../hooks/useFormAnimate';
import ReactDOM from "react-dom";
import { AdultTooth, ChildTooth, PermanentTooth, PermanentToPrimary, PrimaryTooth, PrimaryToPermanent, StandardMix } from '../../assets/icons';
import AnimatedButton from '../../components/AnimatedButton';
import { teethChatContentStandardMix } from '../../constants';

// Component Definition
const Chart = ({ patient, patientID }) => {
    const [chartType, setChartType] = useState('primary');
    const [isAdult, setIsAdult] = useState(false);
    const [isChild, setIsChild] = useState(false);
    const [addCodeForm, setAddCodeForm] = useState(false); // Only opens when adding codes
    const [selectedTeeth, setSelectedTeeth] = useState([]); // Track multiple selected teeth
    const [toothActions, setToothActions] = useState({}); // { toothIndex: [action1, action2], ... }
    const [removeMode, setRemoveMode] = useState(false);

    // Define the labels of teeth that should be set to true
    const upperTeethLabels = ["3", "A", "5", "C", "7", "8", "9", "10", "H", "12", "J", "14"];
    const lowerTeethLabels = ["19", "K", "L", "M", "23", "24", "25", "26", "R", "S", "T", "30"];

    // Initialize teethData with showPrimary or showPermanent set to true for specific labels
    const [teethData, setTeethData] = useState(
        teethChatContentStandardMix.map(tooth => {
            const isUpperTooth = upperTeethLabels.includes(tooth.primaryLabel) || upperTeethLabels.includes(tooth.permanentLabel);
            const isLowerTooth = lowerTeethLabels.includes(tooth.primaryLabel) || lowerTeethLabels.includes(tooth.permanentLabel);

            if (isUpperTooth || isLowerTooth) {
                return {
                    ...tooth,
                    showPrimary: tooth.type === "primary",
                    showPermanent: tooth.type === "permanent",
                };
            }
            return {
                ...tooth,
                showPrimary: false,
                showPermanent: false,
            };
        })
    );

    // **RESET TOOTH ACTIONS ON CHART TYPE CHANGE**
    useEffect(() => {
        setToothActions({}); // Reset all tooth actions
    }, [chartType]);

    const handlePrimaryChart = () => setChartType('primary');
    const handlePermanentChart = () => setChartType('permanent');
    const handleStandardMixChart = () => setChartType('standardMix');

    const handleToothClick = (index) => {
        setSelectedTeeth(prevSelected => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter(teethIndex => teethIndex !== index); // Deselect
            } else {
                return [...prevSelected, index]; // Select
            }
        });
    };

    // Callback function to update tooth actions from DentalCodeList
    // const handleActionsSubmit = useCallback((actions) => {
    //     if (selectedTeeth.length > 0) {
    //         setToothActions(prevToothActions => {
    //             const updatedActions = { ...prevToothActions };

    //             selectedTeeth.forEach(index => {
    //                 updatedActions[index] = [
    //                     ...(updatedActions[index] || []),
    //                     ...actions
    //                 ];
    //             });

    //             return updatedActions;
    //         });

    //         setSelectedTeeth([]); // Reset selected teeth after submission
    //         setAddCodeForm(false); // Close form
    //     }
    // }, [selectedTeeth]);

    const handleChangeToPermanentSubmit = useCallback(() => {
        setTeethData(prevTeeth =>
            prevTeeth.map((tooth, index) => {
                if (selectedTeeth.includes(index)) {
                    return {
                        ...tooth,
                        showPrimary: false,
                        showPermanent: true,
                        toothType: 'permanent',
                    };
                }
                return tooth;
            })
        );
        setSelectedTeeth([]); // Reset selection
    }, [selectedTeeth]);

    const handleChangeToPrimarySubmit = useCallback(() => {
        setTeethData(prevTeeth =>
            prevTeeth.map((tooth, index) => {
                if (selectedTeeth.includes(index)) {
                    return {
                        ...tooth,
                        showPrimary: true,
                        showPermanent: false,
                        toothType: 'primary',
                    };
                }
                return tooth;
            })
        );
        setSelectedTeeth([]); // Reset selection
    }, [selectedTeeth]);

    const handleRemoveAction = (toothIndex, actionIndex) => {
        setToothActions(prevToothActions => {
            const updatedActions = { ...prevToothActions };
            updatedActions[toothIndex] = updatedActions[toothIndex].filter((_, i) => i !== actionIndex);

            if (updatedActions[toothIndex].length === 0) {
                delete updatedActions[toothIndex]; // Remove the tooth if no actions left
            }

            return updatedActions;
        });
    };

    return (
        <div className='dental_chart'>
            <div className="tooth_wrapper">
                <div className="menu">
                    <div className="switch_tooth_layout_button">
                        <div className="chart_type">
                            <button className={chartType === 'primary' ? "active" : ""} onClick={handlePrimaryChart}>
                                <img src={PrimaryTooth} alt="" />
                            </button>
                            <button className={chartType === 'permanent' ? "active" : ""} onClick={handlePermanentChart}>
                                <img src={PermanentTooth} alt="" />

                            </button>
                            <button className={chartType === 'standardMix' ? "active" : ""} onClick={handleStandardMixChart}>
                                <img src={StandardMix} alt="" />

                            </button>
                        </div>

                        <div className="transform_tooth">
                            {chartType === 'standardMix' && (
                                <>
                                    <button onClick={handleChangeToPermanentSubmit}>
                                        <img src={PrimaryToPermanent} alt="" />
                                    </button>
                                    <button onClick={handleChangeToPrimarySubmit}>
                                        <img src={PermanentToPrimary} alt="" />
                                    </button>
                                </>
                            )}
                        </div>


                        {/* <button className='add_dental_code_btn' onClick={() => {
                            if (selectedTeeth.length > 0) {
                                setAddCodeForm(true);
                            } else {
                                alert("Select at least one tooth first.");
                            }
                        }}>
                            Add Dental Code
                        </button> */}
                    </div>

                    <div className="use_case">
                        <label htmlFor="remove">
                            Remove
                            <Checkbox
                                checked={removeMode}
                                onChange={() => setRemoveMode(prev => !prev)}
                            />
                        </label>

                        <label htmlFor="history">
                            History
                            <Checkbox />
                        </label>
                    </div>
                </div>
                <div className="teeth_container">
                    {chartType === 'permanent' && (
                        <Permanent_Chart
                            toothActions={toothActions}
                            selectedTeeth={selectedTeeth}
                            removeMode={removeMode}
                            onToothClick={handleToothClick}
                            onRemoveAction={handleRemoveAction}
                        />
                    )}
                    {chartType === 'primary' && (
                        <Primary_Chart
                            toothActions={toothActions}
                            selectedTeeth={selectedTeeth}
                            removeMode={removeMode}
                            onToothClick={handleToothClick}
                            onRemoveAction={handleRemoveAction}
                        />
                    )}
                    {chartType === 'standardMix' && (
                        <Standard_Mix
                            toothActions={toothActions}
                            selectedTeeth={selectedTeeth}
                            removeMode={removeMode}
                            onToothClick={handleToothClick}
                            onRemoveAction={handleRemoveAction}
                            isAdult={isAdult}
                            isChild={isChild}
                            teethData={teethData}
                            setTeethData={setTeethData}
                        />
                    )}
                </div>
            </div>

            <DentalCodeList
                // exitUser={() => setAddCodeForm(false)}  NO LONGER NEEDED
                // onSubmit={handleActionsSubmit} // Pass the submit function  NO LONGER NEEDED
                selectedTeeth={selectedTeeth}
                setToothActions={setToothActions}
                toothActions={toothActions}
                setSelectedTeeth={setSelectedTeeth}
            />
        </div>
    );
};
// Moved the data outside the component
const ACTION_BUTTONS = [
    { label: "Decay", importValue: "D", backgroundColor: "red", color: "black" },
    { label: "Filled", importValue: "F", backgroundColor: "blue", color: "white" },
    { label: "Missing", importValue: "M", backgroundColor: "#e3b824", color: "black" },
    { label: "Sealant", importValue: "S", backgroundColor: "#27a019", color: "black" },
    { label: "Sealant Plase", importValue: "PS", backgroundColor: "#d1562c", color: "black" },
    { label: "Retained Sealant", importValue: "RS", backgroundColor: "#891db4", color: "black" },
    { label: "Partial Eruption", importValue: "PE", backgroundColor: "#f3f934", color: "black" },
    { label: "Unerepted", importValue: "UE", backgroundColor: "#f99f34", color: "black" },
    { label: "Stainless Steel Crown", importValue: "SS", backgroundColor: "#e2c9ab", color: "black" },
    { label: "Untreated Caries", importValue: "UC", backgroundColor: "#1a5298", color: "white" },
    { label: "Silver Diamine Flouride", importValue: "SDF", backgroundColor: "#37f7d1", color: "black" },
];

const DentalCodeList = ({ selectedTeeth, setToothActions, toothActions, setSelectedTeeth }) => {
    const [selectedActionIndices, setSelectedActionIndices] = useState(new Set());

    // Auto-Submit Effect
    useEffect(() => {
        //  Wrap the logic in a conditional to check if any actions are actually selected. Prevents execution every render.
        if (selectedActionIndices.size > 0) {
            // Convert the Set to an array of indices
            const selectedIndicesArray = Array.from(selectedActionIndices);
            const selectedActions = ACTION_BUTTONS.filter((action, index) => selectedIndicesArray.includes(index));

            if (selectedTeeth.length > 0) {
                setToothActions(prevToothActions => {
                    const updatedActions = { ...prevToothActions };

                    selectedTeeth.forEach(index => {
                        updatedActions[index] = [
                            ...(updatedActions[index] || []),
                            ...selectedActions
                        ];
                    });

                    return updatedActions;
                });

                setSelectedTeeth([]); // Reset selected teeth after submission
            }
            // Reset selected action indices after submitting actions
            setSelectedActionIndices(new Set());
        }
    }, [selectedActionIndices, selectedTeeth, setToothActions, setSelectedTeeth]);  // Dependencies for the effect

    const handleButtonClick = (index) => {
        setSelectedActionIndices(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(index)) {
                newSelected.delete(index); // Deselect
            } else {
                // Handle "Missing" logic
                if (ACTION_BUTTONS[index].label === "Missing") {
                    newSelected.clear(); // Deselect all other actions
                    setIsMissingSelected(true);
                }
                else if (isMissingSelected) {
                    return new Set(); // If missing is selected return the new set without changing anything
                }

                newSelected.add(index); // Select
                setIsMissingSelected(false);
            }
            return newSelected;
        });
    };

    const [isMissingSelected, setIsMissingSelected] = useState(false);

    return (
        <div className={` dentalCodeList_container `}>
            <div className=" dentalCodeList ">
                <div className="selection_menu">
                    <div className="botton_container">
                        {ACTION_BUTTONS.map((action, index) => (
                            <button
                                key={index}
                                style={{
                                    backgroundColor: action.backgroundColor,
                                    color: action.color,
                                    opacity: selectedActionIndices.has(index) ? 0.5 : 1, // Reduce opacity if selected
                                }}
                                className="action-button"
                                onClick={() => handleButtonClick(index)}
                                disabled={isMissingSelected && action.label !== "Missing"}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



Chart.propTypes = {
    patient: PropTypes.object,
    patientID: PropTypes.string,
};

export default Chart;