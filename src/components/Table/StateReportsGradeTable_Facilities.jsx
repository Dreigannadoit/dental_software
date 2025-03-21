import React from 'react'

const TestData = [
    {
        schoolname: "Elementary Elementary School",
        total_number_of_consent_forms_received_and_returned_at_this_site: [
            {
                distributed_forms: 
                { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                positive_consent: 
                { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
        ],
        total_num_of_students_screens: [
            {
                mass_Health:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                private:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                no_insurance:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                in_active:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                unknown_insurance:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
        ],
        dental_home_statues: [
            {
                with_a_dentist_of_record:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                without_a_dentist_of_record:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                unknown:
                { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
        ],
        referals: [
            {
                with_a_dentist_of_record:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                without_a_dentist_of_record:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                unknown:
                { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
        ],
        race: [
            {
                alaska:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                asian:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                black:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                spanish:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                white:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                others:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                no_documentation:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            }
        ],
        flouride:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        oral_prophylaxis:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        sealant:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        total_num_of_students_sealed:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        permanent_first_Molar_sealed:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        permanent_second_Molar_sealed:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        other_teeth_sealed: 
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },

        core_exp_and_other_dental_needs: [
            {
                caries_experience:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                untreated_dental_caries:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                urgent_dental_needs:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                other_dental_needs:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
        ],
        sum_total:
            { lessThanOrEqualTo18: 350, lessThan26_or_lgreaterThanOrEqualTo26: 200, lessThan65_or_lgreaterThanOrEqualTo65: 400, total: 900 },

    },
];

const StateReportsGradeTable_Facilities = ({ data = TestData }) => {
    const grades = [
        "lessThanOrEqualTo18",
        "lessThan26_or_lgreaterThanOrEqualTo26",
        "lessThan65_or_lgreaterThanOrEqualTo65",
        "total"
    ];

    return (
        <div className="table-container-wrapper">
            <div className="table-container">
                <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Category</th>
                            {grades.map((grade) => (
                                <th key={grade}>{grade.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='full'>
                            <td colSpan="16">
                                Total # of Consent Forms Received and Returned at This Site
                            </td>
                        </tr>
                        {TestData[0].total_number_of_consent_forms_received_and_returned_at_this_site.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category.replace(/_/g, " ").toUpperCase()}</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            <td colSpan="16">
                                Total # of Students Screens:
                            </td>
                        </tr>
                        {TestData[0].total_num_of_students_screens.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category.replace(/_/g, " ").toUpperCase()}</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            <td colSpan="16">
                                Dental Home Statues:
                            </td>
                        </tr>
                        {TestData[0].dental_home_statues.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category.replace(/_/g, " ").toUpperCase()}</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            <td colSpan="16">
                                Referrals:
                            </td>
                        </tr>
                        {TestData[0].referals.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category.replace(/_/g, " ").toUpperCase()}</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            <td colSpan="16">
                                Race/Etnicity:
                            </td>
                        </tr>
                        {TestData[0].race.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category.replace(/_/g, " ").toUpperCase()}</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            {/* Category name */}
                            <td>FLUORIDE</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].flouride[grade]}
                                </td>
                            ))}
                        </tr>
                        <tr className='full'>
                            {/* Category name */}
                            <td>PROPHY</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].oral_prophylaxis[grade]}
                                </td>
                            ))}
                        </tr>
                        <tr className='full'>
                            {/* Category name */}
                            <td>SEALANT</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].sealant[grade]}
                                </td>
                            ))}
                        </tr>
                        <tr className='full'>
                            {/* Category name */}
                            <td>TOTAL # OF STUDENT SEALED:</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].sealant[grade]}
                                </td>
                            ))}
                        </tr>
                        <tr className='full'>
                            {/* Category name */}
                            <td>1ST MOLAR:</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].permanent_first_Molar_sealed[grade]}
                                </td>
                            ))}
                        </tr>
                        <tr className='full'>
                            {/* Category name */}
                            <td>2ND MOLAR:</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].permanent_second_Molar_sealed[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className='full'>
                            <td colSpan="16">
                                Core Exp. & other dental needs
                            </td>
                        </tr>
                        {TestData[0].core_exp_and_other_dental_needs.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category.replace(/_/g, " ").toUpperCase()}</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            {/* Category name */}
                            <td>Sum Total</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].sum_total[grade]}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StateReportsGradeTable_Facilities