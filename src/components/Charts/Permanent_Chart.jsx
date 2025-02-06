import {
    Permanent_1, Permanent_2, Permanent_3, Permanent_4, Permanent_5, Permanent_6,
    Permanent_7, Permanent_8, Permanent_9, Permanent_10, Permanent_11, Permanent_12,
    Permanent_13, Permanent_14, Permanent_15, Permanent_16, Permanent_17, Permanent_18,
    Permanent_19, Permanent_20, Permanent_21, Permanent_22, Permanent_23, Permanent_24,
    Permanent_25, Permanent_26, Permanent_27, Permanent_28, Permanent_29, Permanent_30,
    Permanent_31, Permanent_32
} from '../../assets/img/permanent_teeth/permanent_teeth';

const teethChatContentPermanent = [
    { image: Permanent_1, label: "1", class: "tooth_1", actionsInputed: [{ importValue: "SDF", backgroundColor: "#37f7d1" }, { importValue: "UC", backgroundColor: "#1a5298" }, { importValue: "SS", backgroundColor: "#e2c9ab" }] },
    { image: Permanent_2, label: "2", class: "tooth_2", actionsInputed: [] },
    { image: Permanent_3, label: "3", class: "tooth_3", actionsInputed: [] },
    { image: Permanent_4, label: "4", class: "tooth_4", actionsInputed: [] },
    { image: Permanent_5, label: "5", class: "tooth_5", actionsInputed: [] },
    { image: Permanent_6, label: "6", class: "tooth_6", actionsInputed: [] },
    { image: Permanent_7, label: "7", class: "tooth_7", actionsInputed: [] },
    { image: Permanent_8, label: "8", class: "tooth_8", actionsInputed: [] },
    { image: Permanent_9, label: "9", class: "tooth_9", actionsInputed: [] },
    { image: Permanent_10, label: "10", class: "tooth_10", actionsInputed: [] },
    { image: Permanent_11, label: "11", class: "tooth_11", actionsInputed: [] },
    { image: Permanent_12, label: "12", class: "tooth_12", actionsInputed: [] },
    { image: Permanent_13, label: "13", class: "tooth_13", actionsInputed: [] },
    { image: Permanent_14, label: "14", class: "tooth_14", actionsInputed: [] },
    { image: Permanent_15, label: "15", class: "tooth_15", actionsInputed: [] },
    { image: Permanent_16, label: "16", class: "tooth_16", actionsInputed: [] },
    { image: Permanent_17, label: "17", class: "tooth_17", actionsInputed: [] },
    { image: Permanent_18, label: "18", class: "tooth_18", actionsInputed: [] },
    { image: Permanent_19, label: "19", class: "tooth_19", actionsInputed: [] },
    { image: Permanent_20, label: "20", class: "tooth_20", actionsInputed: [] },
    { image: Permanent_21, label: "21", class: "tooth_21", actionsInputed: [] },
    { image: Permanent_22, label: "22", class: "tooth_22", actionsInputed: [] },
    { image: Permanent_23, label: "23", class: "tooth_23", actionsInputed: [] },
    { image: Permanent_24, label: "24", class: "tooth_24", actionsInputed: [] },
    { image: Permanent_25, label: "25", class: "tooth_25", actionsInputed: [] },
    { image: Permanent_26, label: "26", class: "tooth_26", actionsInputed: [] },
    { image: Permanent_27, label: "27", class: "tooth_27", actionsInputed: [] },
    { image: Permanent_28, label: "28", class: "tooth_28", actionsInputed: [] },
    { image: Permanent_29, label: "29", class: "tooth_29", actionsInputed: [] },
    { image: Permanent_30, label: "30", class: "tooth_30", actionsInputed: [] },
    { image: Permanent_31, label: "31", class: "tooth_31", actionsInputed: [] },
    { image: Permanent_32, label: "32", class: "tooth_32", actionsInputed: [] }
];


const Permanent_Chart = ({ toothActions, selectedTeeth, removeMode, onToothClick, onRemoveAction }) => {
    return (
        <div className='permanent_case'>
            <table>
                <tbody>
                    {/* Upper Teeth Labels */}
                    <tr className='upper_teeth'>
                        {teethChatContentPermanent.slice(0, 16).map((teeth, index) => (
                            <td key={index}>
                                <div className="">
                                    <p><span>{teeth.label}</span></p>
                                </div>
                            </td>
                        ))}
                    </tr>

                    {/* Upper Teeth Interactive */}
                    <tr className='upper_teeth tooth_container'>
                        {teethChatContentPermanent.slice(0, 16).map((teeth, index) => (
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
                                    <img src={teeth.image} alt="" />
                                </div>
                            </td>
                        ))}
                    </tr>

                    {/* Directions Row */}
                    <tr className='directions'>
                        <td>L</td>
                        <td colSpan="14"></td>
                        <td>R</td>
                    </tr>

                    {/* Lower Teeth Interactive */}
                    <tr className='lower_teeth tooth_container'>
                        {teethChatContentPermanent.slice(16, 32).map((teeth, index) => (
                            <td
                                key={index + 16}
                                onClick={() => onToothClick(index + 16)}
                                className={selectedTeeth.includes(index + 16) ? "selected" : ""}
                            >
                                <div className="">
                                    <div className="dental_codes_inserted">
                                        {toothActions[index + 16] && toothActions[index + 16].map((action, actionIndex) => (
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
                                    <img src={teeth.image} alt="" />
                                </div>
                            </td>
                        ))}
                    </tr>

                    {/* Lower Teeth Labels */}
                    <tr className='lower_teeth'>
                        {teethChatContentPermanent.slice(16, 32).map((teeth, index) => (
                            <td key={index}>
                                <div className="">
                                    <p><span>{teeth.label}</span></p>
                                </div>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Permanent_Chart