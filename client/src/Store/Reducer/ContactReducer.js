let initState = {
  message: null,
  error: false,
  error_message: null,
  contact_messages: [],
};
let ContactReducer = (state = initState, actions) => {
  switch (actions.type) {
    case "GET_CONTACTS":
      return { ...state, contact_messages: actions.payload };
    case "ADMINISSION_ADDED":
      return { ...state, message: actions.payload };

    case "ERROR_CONTACT":
      return { ...state, error: true, error_message: actions.payload };
    default:
      return state;
  }
};
export default ContactReducer;
