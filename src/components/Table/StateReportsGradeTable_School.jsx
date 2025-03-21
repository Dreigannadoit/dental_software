import React from 'react'

const TestData = [
    {
        schoolname: "Elementary Elementary School",
        total_number_of_consent_forms_received_and_returned_at_this_site: [
            {
                distributed_forms: 
                { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                positive_consent: 
                { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
        ],
        total_num_of_students_screens: [
            {
                mass_Health:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                private:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                no_insurance:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                in_active:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                unknown_insurance:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
        ],
        dental_home_statues: [
            {
                with_a_dentist_of_record:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                without_a_dentist_of_record:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                unknown:
                    { preK: "", kinder: "", grd1: "", grd2: "", grd3: "", grd4: "", grd5: "", grd6: "", grd7: "", grd8: "", grd9: "", grd10: "", grd11: "", grd12: "", total: "" }
            },
        ],
        referals: [
            {
                with_a_dentist_of_record:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                without_a_dentist_of_record:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                unknown:
                    { preK: "", kinder: "", grd1: "", grd2: "", grd3: "", grd4: "", grd5: "", grd6: "", grd7: "", grd8: "", grd9: "", grd10: "", grd11: "", grd12: "", total: "" }
            },
        ],
        race: [
            {
                alaska:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                asian:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                black:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                spanish:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                white:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                others:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                no_documentation:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            }
        ],
        flouride: {
            preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140
        },
        oral_prophylaxis: {
            preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140
        },
        sealant: {
            preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140
        },
        total_num_of_students_sealed: {
            preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140
        },
        permanent_first_Molar_sealed: {
            preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140
        },
        permanent_second_Molar_sealed: {
            preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140
        },
        other_teeth_sealed: {
            preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140
        },
        core_exp_and_other_dental_needs: [
            {
                caries_experience:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                untreated_dental_caries:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                ugent_dental_needs:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
            {
                other_dental_needs:
                    { preK: 60, kinder: 61, grd1: 46, grd2: 49, grd3: 50, grd4: 42, grd5: 60, grd6: 61, grd7: 50, grd8: 46, grd9: 0, grd10: 12, grd11: 14, grd12: 9, total: 140 }
            },
        ],
        sum_total: {
            preK: 600, kinder: 610, grd1: 460, grd2: 490, grd3: 500, grd4: 420, grd5: 600, grd6: 610, grd7: 500, grd8: 406, grd9: 0, grd10: 120, grd11: 140, grd12: 90, total: 2400
        },

    },
];

// D1 and D2 is missing

const StateReportsGradeTable_School = ({ data = TestData }) => {
    const grades = ["preK", "kinder", "grd1", "grd2", "grd3", "grd4", "grd5", "grd6", "grd7", "grd8", "grd9", "grd10", "grd11", "grd12", "total"];

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

export default StateReportsGradeTable_School