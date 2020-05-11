import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import * as actions from "../../Store/Action";

let Adminission = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  useEffect(() => {
    props.adminissionMessage && props.adminissionMessage === "Success"
      ? setMessage("The application was send")
      : setMessage("An error Occured Please try again");
  }, [props.adminissionMessage]);
  let adminissionHandelete = (data) => {
    // console.log(data);
    props.postAdmission(data);
  };
  return (
    <div className="application-form-page ">
      {/* the header  */}
      <div
        className="g-row space-around"
        style={{
          justifyItems: "center",
        }}
      >
        <div>
          <center>
            <h1>CHAMPS WORLD</h1>
          </center>
          <center>
            <div>Dallu, Chagal, Kathmandu</div>
          </center>
          <center>
            <div>9849180494/9808581308</div>
          </center>
          <center>
            <div>
              or <a href="https://www.facebook.com/champsworld1">FaceBook</a>
            </div>
          </center>
        </div>
      </div>
      {/* appolcation info */}
      <div className="m-3r">
        <center>
          <h1>APPLICANT FORM</h1>
          To Be Filled by Parent or Guardian
        </center>
      </div>

      {/* form start */}
      <form onSubmit={handleSubmit(adminissionHandelete)}>
        <div className="border-all">
          <div className="col" style={{ marginTop: "1rem" }}>
            {/* 0 */}
            <div className="g-row">
              <div>
                <label>Class Applied For :</label>{" "}
                <select
                  style={{ width: "10rem" }}
                  className="w3-select"
                  name="classApplied"
                  ref={register({ required: "Please chouse a class " })}
                >
                  <option disabled>............</option>

                  <option value="Playgroup">Playgroup</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Prep_1">Prep 1</option>
                  <option value="Prep_2">Prep 2</option>
                </select>
              </div>
              <div>
                <label>Email : </label>
                <input
                  name="email"
                  type="text"
                  placeholder=" Email required the approve the student"
                  ref={register({
                    required: " Email is empty",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Unvalid Email please try again",
                    },
                  })}
                />
              </div>
            </div>
            <div className="g-row">
              <div>
                {errors.classApplied && (
                  <small className="error-msg">
                    {errors.classApplied.message}
                  </small>
                )}
              </div>
              <div>
                {errors.email && (
                  <small className="error-msg">{errors.email.message}</small>
                )}
              </div>
            </div>

            {/* 1 */}
            <div className="g-row">
              <div>
                <label>Name of Pupil : </label>
                <input
                  name="namePupil"
                  type="text"
                  ref={register({
                    required: "Name is empty",
                    pattern: {
                      value: /^[a-z A-Z]{3,20}$/,
                      message: "Name only contain alphabetes",
                    },
                  })}
                />
              </div>
              <div className="row space-around">
                <div>
                  <label>Girl : </label>
                  <input
                    name="gender"
                    type="radio"
                    value="girl"
                    ref={register({ required: "Please chouse a gender" })}
                  />
                </div>
                <div>
                  <label>Boy : </label>
                  <input
                    name="gender"
                    type="radio"
                    value="boy"
                    ref={register({ required: "Please chouse a gender" })}
                  />
                </div>
              </div>
            </div>

            <div className="g-row">
              <div>
                {errors.namePupil && (
                  <small className="error-msg">
                    {errors.namePupil.message}
                  </small>
                )}
              </div>
              <div>
                {errors.gender && (
                  <small className="error-msg">{errors.gender.message}</small>
                )}
              </div>
            </div>
            {/* 2 */}
            <div className="g-row">
              <div>
                <label>Date Of Birth : </label>
                <input
                  name="dob"
                  type="date"
                  ref={register({ required: "Date of Birth is required" })}
                />
              </div>
              {errors.dob && (
                <small className="error-msg">{errors.dob.message}</small>
              )}
            </div>
            {/* 3 */}
            <div className="g-row">
              <div>
                <label>Place Of Birth : </label>
                <input
                  name="placedob"
                  type="text"
                  ref={register({
                    required: "Place Of Birth is empty",
                    pattern: {
                      value: /^[#.0-9a-zA-Z\s,-]{10,30}$/,
                      message: "Enter a valid address",
                    },
                  })}
                />
              </div>
              <div>
                <label>Nationality : </label>
                <input
                  name="nationality"
                  type="text"
                  ref={register({
                    required: "Nationality is empty",
                    pattern: {
                      value: /^[a-z A-Z]{3,20}$/,
                      message: "Nationality only contain alphabetes",
                    },
                  })}
                />
              </div>
            </div>
            <div className="g-row">
              <div>
                {errors.placedob && (
                  <small className="error-msg">{errors.placedob.message}</small>
                )}
              </div>
              <div>
                {errors.nationality && (
                  <small className="error-msg">
                    {errors.nationality.message}
                  </small>
                )}
              </div>
            </div>

            {/* 5 */}
            <div className="g-row">
              <div>
                <label>Religion : </label>
                <input
                  name="religion"
                  type="text"
                  ref={register({
                    required: "Religion is empty",
                    pattern: {
                      value: /^[a-z A-Z]{3,20}$/,
                      message: "Religion only contain alphabetes",
                    },
                  })}
                />
              </div>
            </div>
            <div className="g-row">
              <div>
                {errors.religion && (
                  <small className="error-msg">{errors.religion.message}</small>
                )}
              </div>
            </div>

            {/* 6 */}
            <div className="g-row ">
              <div className="col border-all">
                <label style={{ alignSelf: "center " }}> Father</label>
                <div>
                  <label>Name : </label>
                  <input
                    name="fName"
                    type="text"
                    ref={register({
                      required: "Name is empty",
                      pattern: {
                        value: /^[a-z A-Z]{3,20}$/,
                        message: "Name only contain alphabetes",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.fName && (
                    <small className="error-msg">{errors.fName.message}</small>
                  )}
                </div>

                <div>
                  <label>Occupation : </label>
                  <input
                    name="fOccupation"
                    type="text"
                    ref={register({
                      required: "Occupation is empty",
                      pattern: {
                        value: /^[a-z A-Z]{3,20}$/,
                        message: "Occupation only contain alphabetes",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.fOccupation && (
                    <small className="error-msg">
                      {errors.fOccupation.message}
                    </small>
                  )}
                </div>
                <div>
                  <label>Mobile No : </label>
                  <input
                    name="fMobileNo"
                    type="text"
                    ref={register({
                      required: " Phone no is empty",
                      pattern: {
                        value: /^[0-9]{10,10}$/,
                        message: " Phone no should contain only 10 numbers",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.fMobileNo && (
                    <small className="error-msg">
                      {errors.fMobileNo.message}
                    </small>
                  )}
                </div>
                <div>
                  <label>Off. No : </label>
                  <input
                    name="fOffNo"
                    type="text"
                    placeholder=" 014412345"
                    ref={register({
                      required: " Phone no is empty",
                      pattern: {
                        value: /^[0-9]{9,9}$/,
                        message: " Phone no should contain only 9 numbers",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.fOffNo && (
                    <small className="error-msg">{errors.fOffNo.message}</small>
                  )}
                </div>
              </div>
              <div className="col border-all">
                <label style={{ alignSelf: "center " }}> Mother</label>
                <div>
                  <label>Name : </label>
                  <input
                    name="mName"
                    type="text"
                    ref={register({
                      required: "Name is empty",
                      pattern: {
                        value: /^[a-z A-Z]{3,20}$/,
                        message: "Name only contain alphabetes",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.mName && (
                    <small className="error-msg">{errors.mName.message}</small>
                  )}
                </div>
                <div>
                  <label>Occupation : </label>
                  <input
                    name="mOccupation"
                    type="text"
                    ref={register({
                      required: "Occupation is empty",
                      pattern: {
                        value: /^[a-z A-Z]{3,20}$/,
                        message: "Occupation only contain alphabetes",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.mOccupation && (
                    <small className="error-msg">
                      {errors.mOccupation.message}
                    </small>
                  )}
                </div>
                <div>
                  <label>Mobile No : </label>
                  <input
                    name="mMobileNo"
                    type="text"
                    ref={register({
                      required: " Phone no is empty",
                      pattern: {
                        value: /^[0-9]{10,10}$/,
                        message: " Phone no should contain only 10 numbers",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.mMobileNo && (
                    <small className="error-msg">
                      {errors.mMobileNo.message}
                    </small>
                  )}
                </div>
                <div>
                  <label>Off. No : </label>
                  <input
                    name="mOffNo"
                    type="text"
                    placeholder=" 014412345"
                    ref={register({
                      required: " Phone no is empty",
                      pattern: {
                        value: /^[0-9]{9,9}$/,
                        message: " Phone no should contain only 9 numbers",
                      },
                    })}
                  />
                </div>
                <div>
                  {errors.mOffNo && (
                    <small className="error-msg">{errors.mOffNo.message}</small>
                  )}
                </div>
              </div>
            </div>
            {/* form end */}

            {/* 7 */}
            <div className="g-row" style={{ marginTop: "1rem" }}>
              <div>
                <label>Full Address :</label>
                <input
                  type="text"
                  name="pFAddress"
                  ref={register({
                    required: "Address is empty",
                    pattern: {
                      value: /^[#.0-9a-zA-Z\s,-]{10,30}$/,
                      message: "Enter a valid address",
                    },
                  })}
                />
              </div>
            </div>
            <div>
              {errors.pFAddress && (
                <small className="error-msg">{errors.pFAddress.message}</small>
              )}
            </div>
            <div>
              <label>Details Of Guardian</label>
              <div className="g-row">
                <div>
                  <label>Name : </label>
                  <input
                    name="gName"
                    type="text"
                    ref={register({
                      required: "Name is empty",
                      pattern: {
                        value: /^[a-z A-Z]{3,20}$/,
                        message: "Name only contain alphabetes",
                      },
                    })}
                  />
                </div>
                <div>
                  <label>Full Address : </label>
                  <input
                    name="fAddress"
                    type="text"
                    ref={register({
                      required: "Address is empty",
                      pattern: {
                        value: /^[#.0-9a-zA-Z\s,-]{10,30}$/,
                        message: "Enter a valid address",
                      },
                    })}
                  />
                </div>
                <div>
                  <label>Contact Nos :</label>
                  <input
                    name="allContactNo"
                    type="text"
                    ref={register({
                      required: "Phone no is empty",
                      pattern: {
                        value: /^[0-9]{10,10}$/,
                        message: "Requires a valid number",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="g-row">
                <div>
                  {errors.gName && (
                    <small className="error-msg">{errors.gName.message}</small>
                  )}
                </div>
                <div>
                  {errors.fAddress && (
                    <small className="error-msg">
                      {errors.fAddress.message}
                    </small>
                  )}
                </div>
                <div>
                  {errors.allContactNo && (
                    <small className="error-msg">
                      {errors.allContactNo.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            {/* 8 */}
            <div>
              <label>Medical History Of The Student</label>
              <div className="g-row">
                <div>
                  <label>Blood Group :</label>
                  <input
                    name="bloodGroup"
                    type="text"
                    placeholder=" AB+"
                    ref={register({
                      required: "Blood Group is empty",
                      pattern: {
                        value: /^[#.A-Z\s,+ -]{1,4}$/,
                        message: "Enter a valid Blood Group",
                      },
                    })}
                  />
                </div>
                <div>
                  <label>Vaccinations :</label>
                  <input
                    name="vaccinationsTaken"
                    type="text"
                    ref={register({
                      required: "Vaccinations is empty",
                      pattern: {
                        value: /^[#.0-9a-zA-Z\s,-]{3,30}$/,
                        message: "All types of Vaccinations",
                      },
                    })}
                  />
                </div>
                <div>
                  <label>Any Allergies:</label>
                  <input
                    name="anyAllergies"
                    type="text"
                    placeholder=" if no Allergies type none"
                    ref={register({
                      required: "Allergies is empty",
                      pattern: {
                        value: /^[#.0-9a-zA-Z\s,-]{3,30}$/,
                        message:
                          "All types of Allergies if no Allergies type none",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="g-row">
                <div>
                  {errors.bloodGroup && (
                    <small className="error-msg">
                      {errors.bloodGroup.message}
                    </small>
                  )}
                </div>
                <div>
                  {errors.vaccinationsTaken && (
                    <small className="error-msg">
                      {errors.vaccinationsTaken.message}
                    </small>
                  )}
                </div>
                <div>
                  {errors.anyAllergies && (
                    <small className="error-msg">
                      {errors.anyAllergies.message}
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-all">
          <div
            className="col"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <div>
              <div className="g-row">
                <div>
                  <label>Place :</label>
                  <input
                    type="text"
                    name="place"
                    placeholder=" ktm nepal"
                    ref={register({
                      required: "Address is empty",
                      pattern: {
                        value: /^[#.0-9a-zA-Z\s,-]{10,30}$/,
                        message: "Enter a valid address",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="g-row">
                <div>
                  {errors.place && (
                    <small className="error-msg">{errors.place.message}</small>
                  )}
                </div>
              </div>

              <div>
                <input type="checkbox" className="w3-check" required />
                <label style={{ marginLeft: "1rem" }}>
                  I declare that the details mentioned above about my child are
                  true . I shall abide by the rule & regulations of the school
                </label>
              </div>
              <div>
                <button className="btn-submit">Submit</button>
              </div>
              {message && <small className="error-msg">{message}</small>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    adminissionMessage: state.AdminisionReducer.message,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    postAdmission: (data) => dispatch(actions.postingAdminissionForm(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Adminission);
