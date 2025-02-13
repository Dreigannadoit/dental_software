import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import Permanent_Chart from '../../components/Charts/Permanent_Chart';
import Primary_Chart from '../../components/Charts/Primary_Chart';
import Standard_Mix from '../../components/Charts/Standard_Mix';
import useAnimation from '../../hooks/useFormAnimate';
import ReactDOM from "react-dom";
import { AdultTooth, ChildTooth } from '../../assets/icons';
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
    const [teethData, setTeethData] = useState(
        teethChatContentStandardMix.map(tooth => ({
            ...tooth,
            toothType: "primary" // Ensure all teeth are primary initially
        }))
    );

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
    const handleActionsSubmit = useCallback((actions) => {
        if (selectedTeeth.length > 0) {
            setToothActions(prevToothActions => {
                const updatedActions = { ...prevToothActions };

                selectedTeeth.forEach(index => {
                    updatedActions[index] = [
                        ...(updatedActions[index] || []),
                        ...actions
                    ];
                });

                return updatedActions;
            });

            setSelectedTeeth([]); // Reset selected teeth after submission
            setAddCodeForm(false); // Close form
        }
    }, [selectedTeeth]);

    const handleChangeToPermanentSubmit = useCallback(() => {
        setTeethData(prevTeeth =>
            prevTeeth.map((tooth, index) => {
                if (selectedTeeth.includes(index)) {
                    return {
                        ...tooth,
                        toothType: 'permanent',
                        primaryImage: "#", // Hide primary
                        primaryLabel: "",
                        permanentImage: teethChatContentStandardMix[index].permanentImage, // Restore permanent image
                        permanentLabel: teethChatContentStandardMix[index].permanentLabel, // Restore label
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
                        toothType: 'primary',
                        permanentImage: "#", // Hide permanent
                        permanentLabel: "",
                        primaryImage: teethChatContentStandardMix[index].primaryImage, // Restore primary image
                        primaryLabel: teethChatContentStandardMix[index].primaryLabel, // Restore label
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
        <>
            {addCodeForm && (
                <DentalCodeList
                    exitUser={() => setAddCodeForm(false)}
                    onSubmit={handleActionsSubmit} // Pass the submit function
                />
            )}
            <div className="tooth_wrapper">
                <div className="menu">
                    <div className="switch_tooth_layout_button">
                        <button className={`${chartType === 'primary' ? "active" : ""}`} onClick={handlePrimaryChart}>Primary</button>
                        <button className={`${chartType === 'permanent' ? "active" : ""}`} onClick={handlePermanentChart}>Permanent</button>
                        <button className={`${chartType === 'standardMix' ? "active" : ""}`} onClick={handleStandardMixChart}>Standard Mix</button>

                        {chartType === 'standardMix' && (
                            <>
                                <AnimatedButton
                                    type="button"
                                    classLabel="adult_btn chart_menu_btn"
                                    label="Adult"
                                    icon={AdultTooth}
                                    backgroundColor=""
                                    method={handleChangeToPermanentSubmit}
                                />
                                {/* Button to turn tooth to Primary Tooth */}
                                <AnimatedButton
                                    type="button"
                                    classLabel="child_btn chart_menu_btn"
                                    label="Child"
                                    icon={ChildTooth}
                                    backgroundColor=""
                                    method={handleChangeToPrimarySubmit}
                                />
                            </>
                        )}
                        <button className='add_dental_code_btn' onClick={() => {
                            if (selectedTeeth.length > 0) {
                                setAddCodeForm(true);
                            } else {
                                alert("Select at least one tooth first.");
                            }
                        }}>
                            Add Dental Code
                        </button>
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
        </>
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

const DentalCodeList = ({ exitUser, onSubmit }) => {
    const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);
    const [checkedStates, setCheckedStates] = useState(ACTION_BUTTONS.map(() => false));
    const [isMissingSelected, setIsMissingSelected] = useState(false); // Track if "Missing" is selected

    const handleCheckboxClick = (index) => {
        const actionLabel = ACTION_BUTTONS[index].label;

        if (actionLabel === "Missing") {
            if (isMissingSelected) {
                // If "Missing" is already selected, deselect it and allow other selections
                setCheckedStates(ACTION_BUTTONS.map(() => false)); // Deselect all checkboxes
                setIsMissingSelected(false); // Deselect "Missing"
            } else {
                // If "Missing" is selected, deselect all other checkboxes
                setCheckedStates(ACTION_BUTTONS.map((_, i) => i === index)); // Only keep "Missing" selected
                setIsMissingSelected(true); // Enable "Missing" selection mode
            }
        } else {
            // If "Missing" is selected, prevent selecting other actions
            if (isMissingSelected) return;

            // Toggle the selected state for other checkboxes
            setCheckedStates(prevCheckedStates => {
                const newCheckedStates = [...prevCheckedStates];
                newCheckedStates[index] = !newCheckedStates[index];
                return newCheckedStates;
            });
        }
    };

    useEffect(() => {
        triggerEnter();
    }, [triggerEnter]);

    const handleCancel = () => {
        triggerExit(() => {
            if (exitUser) exitUser();
        });
    };

    const handleSubmit = () => {
        const selectedActions = ACTION_BUTTONS.filter((action, index) => checkedStates[index]);
        onSubmit(selectedActions); // Pass selected actions
        triggerExit(() => {
            if (exitUser) exitUser();
        });
    };

    return ReactDOM.createPortal(
        <div className={`form_container dentalCodeList_container glassmorphism shadow ${!isInitialized
            ? ""
            : isVisible
                ? "enter-animation"
                : "exit-animation"
            }`}>
            <button className="form_background" onClick={handleCancel}></button>
            <div className="form dentalCodeList glassmorphism shadow">
                <h1>Input Dental Code</h1>
                <div className="selection_menu">
                    <div className="botton_container">
                        {ACTION_BUTTONS.map((action, index) => (
                            <div
                                key={index}
                                style={{ backgroundColor: action.backgroundColor, color: action.color }}
                                className="checkbox-wrapper-41"
                                onClick={() => handleCheckboxClick(index)}
                            >
                                <label htmlFor={`input_label_${index}`}>{action.label}</label>
                                <input
                                    type="checkbox"
                                    id={`input_label_${index}`}
                                    checked={checkedStates[index]}
                                    readOnly
                                    disabled={isMissingSelected && action.label !== "Missing"} // Disable other selections if "Missing" is selected
                                />
                            </div>
                        ))}
                    </div>
                    <div className="selected_buttons">
                        <h3>Selected Code</h3>
                        <div className="selected_values">
                            {ACTION_BUTTONS.filter((action, index) => checkedStates[index]).map((action, index) => (
                                <div className='f-center dental_symbols' key={index} style={{ backgroundColor: action.backgroundColor, color: action.color }}>
                                    {action.importValue}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-buttons">
                    <button
                        type="submit"
                        className="submit-btn"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};



Chart.propTypes = {
    patient: PropTypes.object,
    patientID: PropTypes.string,
};

export default Chart;
