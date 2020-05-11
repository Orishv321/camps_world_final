import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../Store/Action";
import back from "../../Assets/Images/undraw_Login_v483.svg";
let Login = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const [errorMsg, setErrorMessage] = useState();
  useEffect(() => {
    props.authUser && props.authUser === "Success"
      ? props.history.push("/viewTable")
      : setErrorMessage(props.authUser);
  }, [props.authUser]);

  let handelLogin = (data) => {
    // console.log(data);
    props.loginUsers(data);
  };
  return (
    <div className="g-row">
      {/* image container */}
      <div className="img-container">
        <div>
          <img height="500px" src={back} />
        </div>
      </div>

      <div style={{ justifyContent: "center", alignSelf: "center" }}>
        <h1>Login</h1>
        {errorMsg && <small className="error-msg"> {errorMsg}</small>}
        <form className="col" onSubmit={handleSubmit(handelLogin)}>
          <div className="g-row">
            <div className="m-3r">
              <label>Email :</label>
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email"
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
          <div>
            {errors.email && (
              <small className="error-msg">{errors.email.message}</small>
            )}
          </div>
          <div className="g-row">
            <div className="m-3r">
              <label>Password :</label>

              <input
                type="password"
                name="password"
                placeholder="Enter a valid password"
                ref={register({
                  required: " Password is empty",
                  pattern: {
                    value: /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,16})$/,
                    message: "password should be alphanumeric ",
                  },
                })}
              />
            </div>
          </div>
          <div>
            {errors.password && (
              <small className="error-msg">{errors.password.message}</small>
            )}
          </div>
          <div>
            <button className="btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    authUser: state.AuthenticationReducer.message,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    loginUsers: (data) => dispatch(actions.Login(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
