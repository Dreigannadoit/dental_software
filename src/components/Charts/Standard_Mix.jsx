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
    { image: primary_1, label: "1", class: "tooth_1", actionsInputed: [{ importValue: "SDF", backgroundColor: "#37f7d1" }, { importValue: "UC", backgroundColor: "#1a5298" }, { importValue: "SS", backgroundColor: "#e2c9ab" }] },
    { image: primary_2, label: "2", class: "tooth_2", actionsInputed: [] },
    { image: primary_3, label: "3", class: "tooth_3", actionsInputed: [] },
    { image: primary_4, label: "4", class: "tooth_4", actionsInputed: [] },
    { image: primary_5, label: "5", class: "tooth_5", actionsInputed: [] },
    { image: primary_6, label: "6", class: "tooth_6", actionsInputed: [] },
    { image: primary_7, label: "7", class: "tooth_7", actionsInputed: [] },
    { image: primary_8, label: "8", class: "tooth_8", actionsInputed: [] },
    { image: primary_9, label: "9", class: "tooth_9", actionsInputed: [] },
    { image: primary_10, label: "10", class: "tooth_10", actionsInputed: [] },
    { image: primary_11, label: "11", class: "tooth_11", actionsInputed: [] },
    { image: primary_12, label: "12", class: "tooth_12", actionsInputed: [] },
    { image: primary_13, label: "13", class: "tooth_13", actionsInputed: [] },
    { image: primary_14, label: "14", class: "tooth_14", actionsInputed: [] },
    { image: primary_15, label: "15", class: "tooth_15", actionsInputed: [] },
    { image: primary_16, label: "16", class: "tooth_16", actionsInputed: [] },
    { image: primary_17, label: "17", class: "tooth_17", actionsInputed: [] },
    { image: primary_18, label: "18", class: "tooth_18", actionsInputed: [] },
    { image: primary_19, label: "19", class: "tooth_19", actionsInputed: [] },
    { image: primary_20, label: "20", class: "tooth_20", actionsInputed: [] },
];


const Standard_Mix = ({ toothActions, selectedTeeth, removeMode, onToothClick, onRemoveAction }) => {
    // toothActions: { 0: [action1, action2], 1: [], ...}

    return (
        <div className='primary_case'>
            <table>
                <tbody>
                    <tr className='upper_teeth'>
                        {teethChatContentPrimary.slice(0, 10).map((teeth, index) => (
                            <td key={index}>
                                <div className="">
                                    <p>
                                        <span>{teeth.label}</span>
                                    </p>
                                </div>
                            </td>
                        ))}
                    </tr>
                    <tr className='upper_teeth tooth_container'>
                        {teethChatContentPrimary.slice(0, 10).map((teeth, index) => (
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
                    <tr className='directions'>
                        <td>L</td>
                        <td colSpan="8"></td>
                        <td>R</td>
                    </tr>
                    <tr className='lower_teeth tooth_container'>
                        {teethChatContentPrimary.slice(10, 20).map((teeth, index) => (
                            <td
                                key={index + 10}
                                onClick={() => onToothClick(index + 10)}
                                className={selectedTeeth.includes(index + 10) ? "selected" : ""}
                            >

                                <div className="">
                                    <div className="dental_codes_inserted">
                                        {toothActions[index + 10] && toothActions[index + 10].map((action, actionIndex) => (
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
                    <tr className='lower_teeth'>
                        {teethChatContentPrimary.slice(10, 20).map((teeth, index) => (
                            <td key={index}>
                                <div className="">
                                    <p>
                                        <span>{teeth.label}</span>
                                    </p>
                                </div>
                            </td>
                        ))}
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Standard_Mix;