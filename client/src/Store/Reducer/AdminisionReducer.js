let initState = {
  message: null,
  error: false,
  error_message: null,
  adminission_data: [],
};
let AdminisionReducer = (state = initState, actions) => {
  switch (actions.type) {
    case "POST_ADMINISSION":
      return { ...state, message: actions.payload };
    case "GET_ADMINISSION":
      return { ...state, adminission_data: actions.payload };
    case "ERROR_ADMINISSION":
      return { ...state, error: true, error_message: actions.payload };
    default:
      return state;
  }
};
export default AdminisionReducer;
