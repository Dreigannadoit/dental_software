import React from 'react'

const ProgramTrendsTable = ({data}) => {
    return (
        <div className="table">
            <table>
                <thead className="shadow">
                    <tr>
                        <th></th>
                        <th># Student Serve</th>
                        <th># Receiving Sealants</th>
                        <th># Receiving Fluoride</th>
                        <th># Receiving Prophy</th>
                        <th># of Referrals</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((school, index) => (
                            <tr key={index} className="shadow">
                                <td>{school.school}</td>
                                <td>{school.numStudentsServed}</td>
                                <td>{school.numReceivingSealant}</td>
                                <td>{school.numReceivingFlouride}</td>
                                <td>{school.numReceivingPhrophy}</td>
                                <td>{school.numReferals}</td>
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
    );
}

export default ProgramTrendsTable;