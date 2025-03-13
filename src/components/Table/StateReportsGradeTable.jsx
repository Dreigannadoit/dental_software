import React from 'react';

const StateReportsGradeTable = ({ data }) => {
    const labels = [
        { label: "School Name", class: "school_name" },
        { label: "Date:", class: "school_name" },
        { label: "Total # of Students Screens:", class: "row_label" },
        { label: "# MassHealth ", class: "" },
        { label: "# Private", class: "" },
        { label: "# No Insurance", class: "" },
        { label: "# In active", class: "" },
        { label: "# Unknown Insurance", class: "" },
        { label: "Dental Home Statues", class: "row_label" },
        { label: "# Student seen WITH Dentist Record", class: "" },
        { label: "# Student seen W/OUT Dentist Record", class: "" },
        { label: "Referrals:", class: "row_label" },
        { label: "# Student seen WITH Dentist Record", class: "" },
        { label: "# Student seen W/OUT Dentist Record", class: "" },
        { label: "Race", class: "row_label" },
        { label: "Alaska", class: "" },
        { label: "Asian", class: "" },
        { label: "Black", class: "" },
        { label: "Spanish", class: "" },
        { label: "White", class: "" },
        { label: "Others", class: "" },
        { label: "Not Doc", class: "" },
        { label: "Flouride:", class: "row_label" },
        { label: "Prophy:", class: "row_label" },
        { label: "Sealant:", class: "row_label" },
        { label: "Total # of Students sealed:", class: "row_label" },
        { label: "1st Molar:", class: "" },
        { label: "2nd Molar:", class: "" },
        { label: "Core Exp. & other dental needs", class: "row_label" },
        { label: "# Caries", class: "" },
        { label: "# Untreated", class: "" },
        { label: "# Urgent", class: "" },
        { label: "#Others", class: "" },
    ];

    const grades = [
        "Total", "PRE KINDER", "KINDERGARTEN", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade",
        "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade"
    ];

    const testData = new Array(grades.length).fill(100); // Placeholder test data

    return (
        <div className='StateReportsGradeTable_wrapper'>
            <div className="StateReportsGradeTable">
                <div className="colunm_side_labels">
                    {labels.map((label, index) => (
                        <div className={`block ${label.class}`} key={index}><p>{label.label}</p></div>
                    ))}
                </div>
                <div className="school_info">

                    <div className="top_labels">
                        <div className="row full">
                            <div className="block"><p>School Year</p></div>
                        </div>
                        <div className="row row_top_labels">
                            {grades.map((grade, index) => (
                                <div className="block" key={index}><p>{grade}</p></div>
                            ))}
                        </div>
                    </div>

                    <div className="row row_label full">
                        <div className="block">
                            <p></p>
                        </div>
                    </div>

                    {["num_mass_health", "num_Private", "num_no_insurance", "num_in_active", "num_unknown_insurance"].map((rowClass, rowIndex) => (
                        <div className={`row ${rowClass}`} key={rowIndex}>
                            {testData.map((num, index) => (
                                <div className="block" key={index}><p>{num}</p></div>
                            ))}
                        </div>
                    ))}

                    <div className="row row_label full">
                        <div className="block">
                            <p></p>
                        </div>
                    </div>

                    {["num_Student_seen_WITH_Dentist_Record", "num_Student_seen_W_OUT_Dentist_Record"].map((rowClass, rowIndex) => (
                        <div className={`row ${rowClass}`} key={rowIndex}>
                            {testData.map((num, index) => (
                                <div className="block" key={index}><p>{num}</p></div>
                            ))}
                        </div>
                    ))}

                    <div className="row row_label full">
                        <div className="block">
                            <p></p>
                        </div>
                    </div>

                    {["num_Student_seen_WITH_Dentist_Record", "num_Student_seen_W_OUT_Dentist_Record"].map((rowClass, rowIndex) => (
                        <div className={`row ${rowClass}`} key={rowIndex}>
                            {testData.map((num, index) => (
                                <div className="block" key={index}><p>{num}</p></div>
                            ))}
                        </div>
                    ))}

                    <div className="row row_label full">
                        <div className="block">
                            <p></p>
                        </div>
                    </div>

                    {["Alaska", "Asian", "Black", "Spanish", "White", "Others", "Not Doc"].map((rowClass, rowIndex) => (
                        <div className={`row ${rowClass}`} key={rowIndex}>
                            {testData.map((num, index) => (
                                <div className="block" key={index}><p>{num}</p></div>
                            ))}
                        </div>
                    ))}

                    {["Flouride", "Prophy", "Sealant", "Total_num_of_Students_sealed", "first_molar", "second_molar"].map((rowClass, rowIndex) => (
                        <div className={`row ${rowClass}`} key={rowIndex}>
                            {testData.map((num, index) => (
                                <div className="block" key={index}><p>{num}</p></div>
                            ))}
                        </div>
                    ))}

                    <div className="row row_label full">
                        <div className="block">
                            <p></p>
                        </div>
                    </div>



                    {["num_Caries", "num_Untreated", "num_Urgent", "num_Others"].map((rowClass, rowIndex) => (
                        <div className={`row ${rowClass}`} key={rowIndex}>
                            {testData.map((num, index) => (
                                <div className="block" key={index}><p>{num}</p></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StateReportsGradeTable;
