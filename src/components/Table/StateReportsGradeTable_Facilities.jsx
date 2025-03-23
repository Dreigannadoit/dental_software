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
        total_num_of_Adults_screens:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        total_num_of_Adults_screens_insurance: [
            {
                mass_Health:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                dds_idd:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                private_insurance:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                no_insurance:
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
                american_indian_alaska:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                hispanic_latino:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                african_american_black_non_hispanic:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                native_hawaiian_or_other_pacific_islander:
                    { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 }
            },
            {
                asian:
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
                unknown_left_blank_on_form:
                    { lessThanOrEqualTo18: "35", lessThan26_or_lgreaterThanOrEqualTo26: "20", lessThan65_or_lgreaterThanOrEqualTo65: 40, total: "90" }
            }
        ],
        flouride_varnish:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        full_partial_dental_cleaning:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        minor_denture_adjustments:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        oral_cancer_screening:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        oral_hygiene_instruction:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        oral_prophylaxis:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        quadrant_scaling:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        radiographs:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        perform_dietary_screening_for_dental_disease_prevention_and_control:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        apply_carries_arresting_medicament:
            { lessThanOrEqualTo18: 35, lessThan26_or_lgreaterThanOrEqualTo26: 20, lessThan65_or_lgreaterThanOrEqualTo65: 40, total: 90 },
        place_temporary_restoration:
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
            {
                atypical_soft_tissue_lesions:
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
                            <th>{"≥ 18 - < 26 years old"}</th>
                            <th>{"≥ 26 - < 65 years old"}</th>
                            <th>{"≥ 65 years old"}</th>
                            <th>Total</th>
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
                                Total # of Adults screens:
                            </td>
                        </tr>

                        <tr>
                            {/* Category name */}
                            <td>Number of Adults screens:</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].total_num_of_Adults_screens[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className='full'>
                            <td colSpan="16">
                                Total # of Adults screens by Insurance
                            </td>
                        </tr>

                        {TestData[0].total_num_of_Adults_screens_insurance.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{
                                        category == "mass_Health" ? "Mass Health (Medicaid)" :
                                            category == "dds_idd" ? "dds / idd (Optional)" :
                                                category == "private_insurance" ? "private insurance" :
                                                    category == "no_insurance" ? "no insurance" :
                                                        category == "unknown_insurance" ? "unknown / left blank on form" : ""

                                    }</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            <td colSpan="16">
                                Total # of Adults Seen by dental home
                            </td>
                        </tr>
                        {TestData[0].dental_home_statues.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category == "unknown" ? "unknown / left blank on form" : category.replace(/_/g, " ").toUpperCase()}</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr className='full'>
                            <td colSpan="16">
                                Total # of Adults that were REFERRED:
                            </td>
                        </tr>
                        {TestData[0].referals.map((categoryObj, index) => {
                            const [category, data] = Object.entries(categoryObj)[0];
                            return (
                                <tr key={index}>
                                    <td>{category == "unknown" ? "unknown / left blank on form" : category.replace(/_/g, " ").toUpperCase()}</td>
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
                                    <td>{
                                        category == "american_indian_alaska" ? "american indian / alaska" :
                                            category == "hispanic_latino" ? "hispanic / latino" :
                                                category == "african_american_black_non_hispanic" ? "african america / black / non hispanic" :
                                                    category == "native_hawaiian_or_other_pacific_islander" ? "native hawaiian or other pacific islander" :
                                                        category == "asian" ? "asian" :
                                                            category == "white" ? "white" :
                                                                category == "others" ? "others" :
                                                                    category == "unknown_left_blank_on_form" ? "unknown / left blank on form" : ""

                                    }</td>
                                    {grades.map((grade) => (
                                        <td key={grade}>{data[grade]}</td>
                                    ))}
                                </tr>
                            );
                        })}

                        <tr className='full'>
                            <td colSpan="16">
                                Total Number of Adults Receiving Services
                            </td>
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>Flouride Varnish</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].flouride_varnish[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>Full/Partial Dental Cleaning</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].flouride_varnish[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>minor denture adjustments</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].minor_denture_adjustments[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>oral cancer screening</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].oral_cancer_screening[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>oral hygiene instruction</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].oral_hygiene_instruction[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>oral prophylaxis</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].oral_prophylaxis[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>quadrant scaling</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].quadrant_scaling[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>radiographs</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].radiographs[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>perform dietary screening for dental disease prevention and control</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].perform_dietary_screening_for_dental_disease_prevention_and_control[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>apply carries arresting medicament</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].apply_carries_arresting_medicament[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className=''>
                            {/* Category name */}
                            <td>place temporary restoration</td>
                            {/* Map each grade to display the corresponding value */}
                            {grades.map((grade) => (
                                <td key={grade}>
                                    {TestData[0].place_temporary_restoration[grade]}
                                </td>
                            ))}
                        </tr>

                        <tr className='full'>
                            <td colSpan="16">
                                Total # of Adults Having Caries Experience and Other Dental Needs
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