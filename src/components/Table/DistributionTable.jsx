import React from "react";

const DistributionTable = ({ data }) => {
  return (
    <div className="table">
      <table>
        <thead className={`shadow fixed-header`}>
          <tr>
            <th>School Name</th>
            <th>Enrolled</th>
            <th>Distr.</th>
            <th>Number of Classrooms</th>
            <th>Number of Consent Packer</th>
            <th>Total Number of Forms Distr.</th>
            <th>Consents</th>
            <th>Nurse / Contact Person</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Render sections for each level */}
          {data.map((programYear, index) => (
            <React.Fragment key={index}>
              {/* Pre K Section */}
              <tr>
                <td colSpan="9" className="section-header">
                  {programYear.year} - Pre K
                </td>
              </tr>
              {programYear.preK.length > 0 ? (
                programYear.preK.map((record, index) => (
                  <tr key={index}>
                    <td>{record.name}</td>
                    <td>{record.enrolled}</td>
                    <td>{record.distribution ? "Yes" : "No"}</td>
                    <td>{record.classroomNum}</td>
                    <td>{record.consentPackerNum}</td>
                    <td>{record.totalFormsDisNum}</td>
                    <td>{record.consents}</td>
                    <td>{record.nurse_contact_person}</td>
                    <td>
                        <button>save</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No records for Pre K</td>
                </tr>
              )}

              {/* K-5 Section */}
              <tr>
                <td colSpan="9" className="section-header">
                  {programYear.year} - K-5
                </td>
              </tr>
              {programYear.k5.length > 0 ? (
                programYear.k5.map((record, index) => (
                  <tr key={index}>
                    <td>{record.name}</td>
                    <td>{record.enrolled}</td>
                    <td>{record.distribution ? "Yes" : "No"}</td>
                    <td>{record.classroomNum}</td>
                    <td>{record.consentPackerNum}</td>
                    <td>{record.totalFormsDisNum}</td>
                    <td>{record.consents}</td>
                    <td>{record.nurse_contact_person}</td>
                    <td>
                        <button>save</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No records for K-5</td>
                </tr>
              )}

              {/* Middle 6-8 Section */}
              <tr>
                <td colSpan="9" className="section-header">
                  {programYear.year} - Middle 6-8
                </td>
              </tr>
              {programYear.m6_8.length > 0 ? (
                programYear.m6_8.map((record, index) => (
                  <tr key={index}>
                    <td>{record.name}</td>
                    <td>{record.enrolled}</td>
                    <td>{record.distribution ? "Yes" : "No"}</td>
                    <td>{record.classroomNum}</td>
                    <td>{record.consentPackerNum}</td>
                    <td>{record.totalFormsDisNum}</td>
                    <td>{record.consents}</td>
                    <td>{record.nurse_contact_person}</td>
                    <td>
                        <button>save</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No records for Middle 6-8</td>
                </tr>
              )}

              {/* High 9-12 Section */}
              <tr>
                <td colSpan="9" className="section-header">
                  {programYear.year} - High 9-12
                </td>
              </tr>
              {programYear.high9_12.length > 0 ? (
                programYear.high9_12.map((record, index) => (
                  <tr key={index}>
                    <td>{record.name}</td>
                    <td>{record.enrolled}</td>
                    <td>{record.distribution ? "Yes" : "No"}</td>
                    <td>{record.classroomNum}</td>
                    <td>{record.consentPackerNum}</td>
                    <td>{record.totalFormsDisNum}</td>
                    <td>{record.consents}</td>
                    <td>{record.nurse_contact_person}</td>
                    <td>
                        <button>save</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No records for High 9-12</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistributionTable;
