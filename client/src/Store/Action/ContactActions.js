import axios from "axios";
const getContacts = () => {
  return (dispatch) => {
    axios
      .get("/api/v/feedback")
      .then((result) => {
        // console.log("form get");
        // console.log(result.data.data);
        dispatch({ type: "GET_CONTACTS", payload: result.data.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_CONTACT", payload: err });
      });
  };
};

const postContacts = (data) => {
  return (dispatch) => {
    axios
      .post("/api/v/feedback", data)
      .then((result) => {
        getContacts()(dispatch);
        dispatch({ type: "ADMINISSION_ADDED", payload: result.data.message });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_CONTACT", payload: err });
      });
  };
};
export { getContacts, postContacts };
