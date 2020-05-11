import axios from "axios";
export let Login = (data) => {
  return (dispatch) => {
    // console.table(data);
    axios
      .post("http://localhost:3003/api/v/login", data)
      .then((result) => {
        // console.log(result.data);
        localStorage.setItem("Name", result.data.name);
        dispatch({ type: "LOGIN_VALID", payload: result.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_LOGIN", payload: err });
      });
  };
};
export let Logout = () => {
  return (dispatch) => {
    localStorage.clear("Name");
    dispatch({ type: "LOGOUT" });
  };
};
