import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import * as actions from "../../Store/Action";
let NaveBar = (props) => {
  const history = useHistory();
  const [navLists, setNavLists] = useState([]);
  const Unvalid_Users = [
    { to: "/", link: "Home" },
    { to: "/contact", link: "Contact" },
    { to: "/admit", link: "Adminission" },
    { to: "/login", link: "Login" },
  ];
  const ValidUser = [
    { to: "/", link: "Home" },
    { to: "/contact", link: "Contact" },
    { to: "/admit", link: "Adminission" },
    { to: "/viewTable", link: "Received Applications" },
  ];
  useEffect(() => {
    localStorage.getItem("Name")
      ? setNavLists(ValidUser)
      : setNavLists(Unvalid_Users);
  }, [props.authUser]);

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Champs World</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          {navLists.map((list, key) => (
            <Nav.Link key={key}>
              <Link to={list.to}>{list.link}</Link>
            </Nav.Link>
          ))}

          {localStorage.getItem("Name") && (
            <Nav.Link>
              <Link
                onClick={() => {
                  props.authLogout();
                  history.push("/");
                  window.location.reload();
                }}
              >
                Logout
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
let mapStateToProps = (state) => {
  return {
    authUser: state.AuthenticationReducer.message,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    authLogout: () => dispatch(actions.Logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NaveBar);
