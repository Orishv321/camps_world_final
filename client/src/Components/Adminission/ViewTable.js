import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Action";
let ViewTable = (props) => {
  const [adminissionData, setAdminissionData] = useState();
  useEffect(() => {
    props.getAdminissionData();
  }, []);
  useEffect(() => {
    props.adminissionData && setAdminissionData(props.adminissionData);
  }, [props.adminissionData]);
  return (
    <div className="col">
      {/* <div>The Search input div</div>
      <div>The serarched ingo Div</div> */}
      <div className="view-table">
        {adminissionData &&
          Object.values(adminissionData).map((admit, key) => (
            <div key={key} className="data-container border-all ">
              <div>
                <label>FormDate : </label> {admit.formDate}
              </div>
              <div>
                <label>Email : </label> {admit.email}
              </div>
              <div>
                <label>Class Applied : </label> {admit.classApplied}
              </div>
              <div>
                <label>Pupil Name : </label> {admit.namePupil}
              </div>
              <div>
                <label>Gender : </label> {admit.gender}
              </div>
              <div>
                <label>Date of Birth : </label> {admit.dob}
              </div>
              <div>
                <label>Place of Birth : </label> {admit.placedob}
              </div>
              <div>
                <label>Nationality : </label> {admit.nationality}
              </div>
              <div>
                <label>Religion : </label> {admit.religion}
              </div>
              <div className="g-row">
                <div className="col border-all ">
                  <label>Father</label>
                  <div>
                    <label>Name : </label> {admit.fName}
                  </div>
                  <div>
                    <label>Occupation : </label> {admit.fOccupation}
                  </div>
                  <div>
                    <label>MobileNo : </label> {admit.fMobileNo}
                  </div>
                  <div>
                    <label>OffNo : </label> {admit.fOffNo}
                  </div>
                </div>
                <div className="col border-all ">
                  <label>Mother</label>
                  <div>
                    <label>Name : </label> {admit.mName}
                  </div>
                  <div>
                    <label>Occupation : </label> {admit.mOccupation}
                  </div>
                  <div>
                    <label>MobileNo : </label> {admit.mMobileNo}
                  </div>
                  <div>
                    <label>OffNo : </label> {admit.mOffNo}
                  </div>
                </div>
              </div>

              <div>
                <label>Patents Full Address : </label> {admit.pFAddress}
              </div>
              <div>
                <label>Guardian Name : </label> {admit.gName}
              </div>
              <div>
                <label>Full Address : </label> {admit.fAddress}
              </div>
              <div>
                <label>All ContactNo : </label> {admit.allContactNo}
              </div>
              <div>
                <label>Blood Group : </label> {admit.bloodGroup}
              </div>
              <div>
                <label>Vaccinations Taken : </label> {admit.vaccinationsTaken}
              </div>
              <div>
                <label>Any Allergies : </label> {admit.anyAllergies}
              </div>
              <div>
                <label>Place : </label> {admit.place}
              </div>
              <div className="row">
                {admit.accepted != true && (
                  <button
                    className="btn-submit"
                    onClick={() =>
                      props.acceptAdminission(admit._id, admit.email)
                    }
                    style={{ marginLeft: "1rem" }}
                  >
                    Accept
                  </button>
                )}
                {admit.accepted != false && (
                  <button
                    className="btn-deny"
                    onClick={() =>
                      props.rejectAdminission(admit._id, admit.email)
                    }
                    style={{ marginLeft: "2rem" }}
                  >
                    reject
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    adminissionData: state.AdminisionReducer.adminission_data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAdminissionData: () => dispatch(actions.getingAdminissionData()),
    acceptAdminission: (id, email) =>
      dispatch(actions.acceptAdminission(id, email)),
    rejectAdminission: (id, email) =>
      dispatch(actions.rejectAdminission(id, email)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewTable);
