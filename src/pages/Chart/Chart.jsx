import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import Permanent_Chart from '../../components/Charts/Permanent_Chart';
import Primary_Chart from '../../components/Charts/Primary_Chart';
import Standard_Mix from '../../components/Charts/Standard_Mix';
import useAnimation from '../../hooks/useFormAnimate';
import ReactDOM from "react-dom";
import { AdultTooth, Alert, backarrow, ChildTooth, Delete, File_Edit, Patients, PermanentTooth, PermanentToPrimary, PrimaryTooth, PrimaryToPermanent, StandardMix } from '../../assets/icons';
import AnimatedButton from '../../components/AnimatedButton';
import { teethChartContent } from '../../constants';
import Popup from '../../components/PopUps/Popup';
import usePopup from '../../hooks/usePopUp';

// Component Definition
const Chart = ({ patient, patientID }) => {
    const [chartType, setChartType] = useState('primary');
    const [isAdult, setIsAdult] = useState(false);
    const [isChild, setIsChild] = useState(false);
    const [addCodeForm, setAddCodeForm] = useState(false); // Only opens when adding codes
    const [selectedTeeth, setSelectedTeeth] = useState([]); // Track multiple selected teeth
    const [toothActions, setToothActions] = useState({}); // { toothIndex: [toothIndex: action, toothIndex: action] ... }
    const [removeMode, setRemoveMode] = useState(false);
    const [isLayoutSwitched, setIsLayoutSwitched] = useState(false);
    const [history, setHistory] = useState([]); // Array to store history entries
    const [isSwitchingLayout, setIsSwitchingLayout] = useState(false); // Add state to track switching layout
    const [renderChart, setRenderChart] = useState(true); // initially render chart
    const [pendingChartType, setPendingChartType] = useState(null); // Store the chart type selected before confirmation
    const [selectedActionIndices, setSelectedActionIndices] = useState(new Set());
    const [isMissingSelected, setIsMissingSelected] = useState(false);


    // Initialize teethData with showPrimary or showPermanent set to true for specific labels
    const [teethData, setTeethData] = useState(teethChartContent.map(tooth => ({
        ...tooth,
        showPrimary: tooth.type === "primary",
        showPermanent: tooth.type === "permanent",
    })));
    

    const {
        isVisible: showSwitchToothLayoutPopup,
        isExiting,
        popupData: selectedToothType,
        openPopup: openSwitchToothLayoutPopup,
        closePopup: closeSwitchToothLayoutPopup,
    } = usePopup();

    // **RESET TOOTH ACTIONS ON CHART TYPE CHANGE**
    useEffect(() => {
        setToothActions({}); // Reset all tooth actions
        setSelectedTeeth([]); // Clear selected teeth when chart type changes
    }, [chartType]);

    const confirmSwitchToothLayout = () => {
        setIsSwitchingLayout(true); // Set flag before switching
        closeSwitchToothLayoutPopup();

        // Delay to ensure popup closes before layout switch happens
        setTimeout(() => {
            if (pendingChartType) {
                setChartType(pendingChartType);  // Update chartType with the pending value
            }
            setIsSwitchingLayout(false);  // Reset flag after switching
            setPendingChartType(null);  // Clear the pending chart type
        }, 500); //  Adjust the timeout value based on your popup animation duration
    };

    useEffect(() => {
        if (chartType === 'standardMix') {
            // Ensure that the initial state for standardMix chart is correctly populated
            setTeethData(prevData => {
                return prevData.map(tooth => ({
                    ...tooth,
                    showPrimary: tooth.type === "primary",
                    showPermanent: tooth.type === "permanent",
                }));
            });
        }
    }, [chartType]);

    const confirmStandardMixLayout = () => {
        setIsSwitchingLayout(true); // Set flag before switching
        closeSwitchToothLayoutPopup();

        // Delay to ensure popup closes before layout switch happens
        setTimeout(() => {
            setIsLayoutSwitched(prev => !prev);
            setTeethData(prevData => {
                return prevData.map((tooth, index) => {
                    let newType;

                    if (!isLayoutSwitched) { // Switch to alternate layout
                        if ([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].includes(index)) {
                            newType = 'permanent';
                        } else {
                            newType = 'primary';
                        }
                    } else { // Switch back to original layout
                        if ([2, 6, 7, 8, 9, 13, 18, 22, 23, 24, 25, 29].includes(index)) {
                            newType = 'permanent'
                        }
                        else if ([0, 1, 3, 4, 5, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 26, 27, 28, 30, 31].includes(index)) {
                            newType = 'primary'
                        }
                        else {
                            newType = tooth.type
                        }
                    }

                    return {
                        ...tooth,
                        type: newType,
                        showPrimary: newType === 'primary',
                        showPermanent: newType === 'permanent',
                    };
                });
            });
            setIsSwitchingLayout(false);  // Reset flag after switching
        }, 500); //  Adjust the timeout value based on your popup animation duration
    };


    const handleToothClick = (index) => {
        setSelectedTeeth(prevSelected => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter(teethIndex => teethIndex !== index); // Deselect
            } else {
                return [...prevSelected, index]; // Select
            }
        });
    };

    const logToothConversion = (teeth, toType) => {
        const toothLabels = teeth.map(index => {
             const tooth = teethData[index];
            let label;

            if (chartType === 'primary') {
                label = tooth.primaryLabel;
            } else if (chartType === 'permanent') {
                label = tooth.permanentLabel;
            } else { // chartType === 'standardMix'
               
                if(tooth.showPrimary) {
                   label = tooth.primaryLabel || tooth.permanentLabel || String(index + 1);
                } else {
                   label = tooth.permanentLabel || tooth.primaryLabel || String(index + 1);
                }
            }

            return label || String(index + 1);
        });

        const newHistoryEntry = {
            teeth: toothLabels,
            actions: [`Switched to ${toType}`],
            date: new Date(),
        };
        setHistory(prevHistory => [...prevHistory, newHistoryEntry]);
    };


    const handleChangeToPermanentSubmit = useCallback(() => {
        setTeethData(prevTeeth => {
            const updatedTeeth = prevTeeth.map((tooth, index) => {
                if (selectedTeeth.includes(index)) {
                    return {
                        ...tooth,
                        showPrimary: false,
                        showPermanent: true,
                        type: 'permanent',
                    };
                }
                return tooth;
            });
            logToothConversion(selectedTeeth, "Permanent");
            return updatedTeeth;
        });
        setSelectedTeeth([]); // Reset selection
    }, [selectedTeeth, teethData, chartType, setHistory]);

    const handleChangeToPrimarySubmit = useCallback(() => {
        setTeethData(prevTeeth => {
            const updatedTeeth = prevTeeth.map((tooth, index) => {
                if (selectedTeeth.includes(index)) {
                    return {
                        ...tooth,
                        showPrimary: true,
                        showPermanent: false,
                        type: 'primary',
                    };
                }
                return tooth;
            });
            logToothConversion(selectedTeeth, "Primary");
            return updatedTeeth;
        });
        setSelectedTeeth([]); // Reset selection
    }, [selectedTeeth, teethData, chartType, setHistory]);

    const handleRemoveAction = (toothIndex, actionIndex) => {
        const removedAction = toothActions[toothIndex][actionIndex].label; //Get the action label before remove

        setToothActions(prevToothActions => {
            const updatedActions = { ...prevToothActions };
            const filteredActions = updatedActions[toothIndex].filter((_, i) => i !== actionIndex);
            updatedActions[toothIndex] = filteredActions;  // Update with the filtered array

            if (updatedActions[toothIndex].length === 0) {
                delete updatedActions[toothIndex]; // Remove the tooth if no actions left
            }

            // Log the removal
            const toothLabel = getToothLabel(toothIndex);
            logToothAction([toothLabel], [`Removed: ${removedAction}`]);


            return updatedActions;
        });
    };

     const handleChartTypeChange = (newChartType) => {
        setPendingChartType(newChartType); // Store the chart type for later use
        openSwitchToothLayoutPopup(newChartType + ' Chart');
    };

    const getToothLabel = (index) => {
        const tooth = teethData[index];
        if (!tooth) return String(index + 1);  // Fallback in case of error
    
        if (chartType === 'primary') {
            // For primary chart, use the primaryLabel or fallback to a letter (A, B, C, etc.)
            return tooth.primaryLabel || String.fromCharCode(65 + index); // A = 65 in ASCII
        } else if (chartType === 'permanent') {
            // For permanent chart, use the permanentLabel or fallback to a number
            return tooth.permanentLabel || String(index + 1);
        } else { // chartType === 'standardMix'
            // For standard mix, decide based on showPrimary/showPermanent
            return tooth.showPrimary ? (tooth.primaryLabel || String.fromCharCode(65 + index)) : (tooth.permanentLabel || String(index + 1));
        }
    };

    const logToothAction = (teeth, actions) => {
        const toothLabels = teeth.map(index => getToothLabel(index));

        const newHistoryEntry = {
            teeth: teeth, // Pass the tooth labels or identifiers directly
            actions: actions,
            date: new Date(),
        };
        setHistory(prevHistory => [...prevHistory, newHistoryEntry]);
    };

    useEffect(() => {
        if (selectedActionIndices.size > 0) {
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

                logToothAction(selectedTeeth, selectedActions.map(action => action.label))
                setSelectedTeeth([]);
            }
            setSelectedActionIndices(new Set());
             setIsMissingSelected(false);
        }
    }, [selectedActionIndices, selectedTeeth, setToothActions, setSelectedTeeth, setHistory, logToothAction]);

   const handleButtonClick = (index) => {
        setSelectedActionIndices(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(index)) {
                newSelected.delete(index); // Deselect
                 setIsMissingSelected(false);
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



    return (
        <>
            {showSwitchToothLayoutPopup && (
                <Popup
                    type="Inform"
                    title="Are You Sure?"
                    message={`You are switching to the ${selectedToothType} layout.`}
                    icon={Alert}
                    onConfirm={confirmSwitchToothLayout}
                    onCancel={closeSwitchToothLayoutPopup}
                    confirmLabel="Yes, Switch"
                    cancelLabel="Cancel"
                    isExiting={isExiting}
                    customClass="delete-popup"
                />
            )}
            <div className='dental_chart'>
                <div className="tooth_wrapper">
                    <div className="menu">
                        <div className="switch_tooth_layout_button">
                            <div className="chart_type">
                                <button
                                    className={chartType === 'primary' ? "active" : ""}
                                    onClick={() => handleChartTypeChange('primary')}
                                    disabled={isSwitchingLayout}
                                >
                                    <img src={PrimaryTooth} alt="" />
                                </button>
                                <button
                                    className={chartType === 'permanent' ? "active" : ""}
                                    onClick={() => handleChartTypeChange('permanent')}
                                    disabled={isSwitchingLayout}
                                >
                                    <img src={PermanentTooth} alt="" />
                                </button>
                                <button
                                    className={chartType === 'standardMix' ? "active" : ""}
                                    onClick={() => handleChartTypeChange('standardMix')}
                                    disabled={isSwitchingLayout}
                                >
                                    <img src={StandardMix} alt="" />
                                </button>
                                {chartType === 'standardMix' && (
                                    <>
                                        <button disabled={isSwitchingLayout} onClick={confirmStandardMixLayout}>
                                            Switch Layout
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="transform_tooth">
                                {chartType === 'standardMix' && (
                                    <>
                                        <button onClick={handleChangeToPermanentSubmit} disabled={isSwitchingLayout}>
                                            <img src={PrimaryToPermanent} alt="" />
                                        </button>
                                        <button onClick={handleChangeToPrimarySubmit} disabled={isSwitchingLayout}>
                                            <img src={PermanentToPrimary} alt="" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="use_case">
                            <label htmlFor="remove">
                                Remove
                                <Checkbox
                                    checked={removeMode}
                                    onChange={() => setRemoveMode(prev => !prev)}
                                />
                            </label>
                        </div>
                    </div>
                     {renderChart && (
                        <div className="teeth_container">
                            {chartType === 'permanent' && (
                                <Permanent_Chart
                                    toothActions={toothActions}
                                    selectedTeeth={selectedTeeth}
                                    removeMode={removeMode}
                                    onToothClick={handleToothClick}
                                    onRemoveAction={handleRemoveAction}
                                    teethData={teethData}
                                />
                            )}
                            {chartType === 'primary' && (
                                <Primary_Chart
                                    toothActions={toothActions}
                                    selectedTeeth={selectedTeeth}
                                    removeMode={removeMode}
                                    onToothClick={handleToothClick}
                                    onRemoveAction={handleRemoveAction}
                                    teethData={teethData}
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
                    )}

                </div>

                <DentalCodeList
                    selectedTeeth={selectedTeeth}
                    setToothActions={setToothActions}
                    toothActions={toothActions}
                    setSelectedTeeth={setSelectedTeeth}
                    setHistory={setHistory}
                    history={history}
                    getToothLabel={getToothLabel}
                    handleButtonClick={handleButtonClick}
                    selectedActionIndices={selectedActionIndices}
                    setSelectedActionIndices={setSelectedActionIndices}
                    isMissingSelected={isMissingSelected}
                    setIsMissingSelected={setIsMissingSelected}
                    ACTION_BUTTONS={ACTION_BUTTONS}
                />

                <div className="history">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tooth</th>
                                    <th>Action</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{entry.teeth.join(', ')}</td>
                                        <td>{entry.actions.join(', ')}</td>
                                        <td>{entry.date.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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

const DentalCodeList = ({ selectedTeeth, setToothActions, toothActions, setSelectedTeeth, setHistory, history, getToothLabel, handleButtonClick, selectedActionIndices, setSelectedActionIndices, isMissingSelected, setIsMissingSelected, ACTION_BUTTONS }) => {

    // No need for a local selectedActionIndices or isMissingSelected, since they're now passed as props.
    // Remove useEffect to prevent conflicting with parent component's state updates.



    return (
        <div className={` dentalCodeList_container `}>
            <div className=" dentalCodeList ">
                <div className="links">

                    <AnimatedButton
                        type="routerLink"
                        classLabel="edit_patient"
                        label="Back"
                        icon={backarrow}

                        backgroundColor="#1E8631"
                        url="#"
                    />
                    <AnimatedButton
                        type="routerLink"
                        classLabel="edit_patient patient"
                        label="Profile"
                        icon={Patients}
                        backgroundColor="#1E8631"
                        url="#"
                    />
                </div>
                <br />
                <div>
                    <p><strong>Name:</strong> Allen Roberts</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>School:</strong> Generic Elementary School Name</p>
                    <p><strong>Grade:</strong> 7</p>
                    <p><strong>School Year:</strong> CSDP PROGRAM SY 2023-2024</p>
                </div>
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