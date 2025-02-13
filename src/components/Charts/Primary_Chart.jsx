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

const teethChatContentPrimary = [
    { image: primary_1, label: "A", class: "tooth_1 primary_tooth", actionsInputed: [{ importValue: "SDF", backgroundColor: "#37f7d1" }, { importValue: "UC", backgroundColor: "#1a5298" }, { importValue: "SS", backgroundColor: "#e2c9ab" }] },
    { image: primary_2, label: "B", class: "tooth_2 primary_tooth", actionsInputed: [] },
    { image: primary_3, label: "C", class: "tooth_3 primary_tooth", actionsInputed: [] },
    { image: primary_4, label: "D", class: "tooth_4 primary_tooth", actionsInputed: [] },
    { image: primary_5, label: "E", class: "tooth_5 primary_tooth", actionsInputed: [] },
    { image: primary_6, label: "F", class: "tooth_6 primary_tooth", actionsInputed: [] },
    { image: primary_7, label: "G", class: "tooth_7 primary_tooth", actionsInputed: [] },
    { image: primary_8, label: "H", class: "tooth_8 primary_tooth", actionsInputed: [] },
    { image: primary_9, label: "I", class: "tooth_9 primary_tooth", actionsInputed: [] },
    { image: primary_10, label: "J", class: "tooth_10 primary_tooth", actionsInputed: [] },
    { image: primary_11, label: "K", class: "tooth_11 primary_tooth", actionsInputed: [] },
    { image: primary_12, label: "L", class: "tooth_12 primary_tooth", actionsInputed: [] },
    { image: primary_13, label: "M", class: "tooth_13 primary_tooth", actionsInputed: [] },
    { image: primary_14, label: "N", class: "tooth_14 primary_tooth", actionsInputed: [] },
    { image: primary_15, label: "O", class: "tooth_15 primary_tooth", actionsInputed: [] },
    { image: primary_16, label: "P", class: "tooth_16 primary_tooth", actionsInputed: [] },
    { image: primary_17, label: "Q", class: "tooth_17 primary_tooth", actionsInputed: [] },
    { image: primary_18, label: "R", class: "tooth_18 primary_tooth", actionsInputed: [] },
    { image: primary_19, label: "S", class: "tooth_19 primary_tooth", actionsInputed: [] },
    { image: primary_20, label: "T", class: "tooth_20 primary_tooth", actionsInputed: [] },
];


const Primary_Chart = ({ toothActions, selectedTeeth, removeMode, onToothClick, onRemoveAction }) => {
    // toothActions: { 0: [action1, action2], 1: [], ...}
    return (
        <div className='primary_case dental_chart'>
            <table>
                <tbody>
                    <tr className='upper_teeth'>
                        <td></td>
                        <td></td>
                        <td></td>
                        {teethChatContentPrimary.slice(0, 10).map((teeth, index) => (
                            <td key={index}>
                                <div className="">
                                    <p>
                                        <span>{teeth.label}</span>
                                    </p>
                                </div>
                            </td>
                        ))}
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr className='upper_teeth tooth_container'>
                        <td></td>
                        <td></td>
                        <td></td>
                        {teethChatContentPrimary.slice(0, 10).map((teeth, index) => {
                            const toothStyle = toothActions[index] && toothActions[index].some(action => action.importValue === "M")
                                ? { opacity: 0 } // Set opacity to 0 if "Missing" is selected for this tooth
                                : {};

                            return (
                                <td
                                    key={index}
                                    onClick={() => onToothClick(index)}
                                    className={selectedTeeth.includes(index) ? "selected" : ""}
                                >
                                    <div className="">
                                        <div className="dental_codes_inserted">
                                            {toothActions[index] && toothActions[index].map((action, actionIndex) => (
                                                <div
                                                    key={actionIndex}
                                                    className='f-center dental_symbols'
                                                    style={{ backgroundColor: action.backgroundColor, color: action.color }}
                                                    onClick={() => removeMode && onRemoveAction(index, actionIndex)} // Remove if checkbox is checked
                                                >
                                                    {action.importValue}
                                                </div>
                                            ))}
                                        </div>
                                        <img src={teeth.image} className={`${teeth.class}`} alt="" style={toothStyle} /> {/* Apply opacity if "Missing" is selected */}
                                    </div>
                                </td>
                            );
                        })}
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr className='directions'>
                        <td>L</td>
                        <td colSpan="14"></td>
                        <td>R</td>
                    </tr>

                    <tr className='lower_teeth tooth_container'>
                        <td></td>
                        <td></td>
                        <td></td>
                        {teethChatContentPrimary.slice(10, 20).reverse().map((teeth, index) => {
                            const toothIndex = 20 - index - 1;

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
                                        <img src={teeth.image} className={`${teeth.class}`} alt="" style={toothStyle} /> {/* Apply opacity if "Missing" is selected */}
                                    </div>
                                </td>
                            );
                        })}
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr className='lower_teeth'>
                        <td></td>
                        <td></td>
                        <td></td>
                        {teethChatContentPrimary.slice(10, 20).reverse().map((teeth, index) => (
                            <td key={20 - index - 1}>
                                <div className="">
                                    <p>
                                        <span>{teeth.label}</span>
                                    </p>
                                </div>
                            </td>
                        ))}
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Primary_Chart;