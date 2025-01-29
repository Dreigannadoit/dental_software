import React from 'react'

const DemographicChracteristicsTable = ({ data }) => {
    const gradeLevels = ["", "Pre K", "K", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className="table">
            <table>
                <thead className="shadow">
                    <tr>
                        {gradeLevels.map((grade, index) => (
                            <th key={index}>
                                {grade}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((ethinicity, index) => (
                            <tr key={index} className="shadow">
                                <td>{ethinicity.race}</td>
                                <td>{ethinicity.pre_k}</td>
                                <td>{ethinicity.k}</td>
                                <td>{ethinicity.grade_1}</td>
                                <td>{ethinicity.grade_2}</td>
                                <td>{ethinicity.grade_3}</td>
                                <td>{ethinicity.grade_4}</td>
                                <td>{ethinicity.grade_5}</td>
                                <td>{ethinicity.grade_6}</td>
                                <td>{ethinicity.grade_7}</td>
                                <td>{ethinicity.grade_8}</td>
                                <td>{ethinicity.grade_9}</td>
                                <td>{ethinicity.grade_10}</td>
                                <td>{ethinicity.grade_11}</td>
                                <td>{ethinicity.grade_12}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>No Record</td>
                            <td>No Record</td>
                            <td>No Record</td>
                            <td>No Record</td>
                            <td>No Record</td>
                            <td>No Record</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DemographicChracteristicsTable