let initState = {
  message: null,
  error: false,
  error_message: null,
  name: null,
};

let AuthenticationReducer = (state = initState, actions) => {
  switch (actions.type) {
    case "LOGIN_VALID":
      return {
        ...state,
        name: actions.payload.name,
        message: actions.payload.message,
      };
    case "ERROR_LOGIN":
      return { ...state, error_message: actions.payload, error: true };
    case "LOGOUT":
      return { ...state, name: null, message: null };
    default:
      return state;
  }
};
export default AuthenticationReducer;
