import React from "react";
import { csdpsStatisticsBySchool } from "../test_data";

const DashboardTable = () => {
    return (
        <div className="table">
            <table>
                <thead className="shadow">
                    <tr>
                        <th>USER</th>
                        <th>ID No.</th>
                        <th>Status</th>
                        <th>Book Borrowed</th>
                        <th>Book Overdue</th>
                        <th>Previous Book Borrowed</th>
                    </tr>
                </thead>
                <tbody>
                    {csdpsStatisticsBySchool.length > 0 ? (
                        csdpsStatisticsBySchool.map((school, index) => (
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
};

export default DashboardTable;
