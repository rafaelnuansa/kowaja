//import React
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
//import component bootstrap
import { Navbar, NavDropdown, Form, Button } from "react-bootstrap";
//import Sidebar
import SidebarComponent from "../components/SidebarComponent";
//hook link
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth } from "../Firebase";

const LayoutAdmin = ({ children }) => {
  //state toggle
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { logoutUser } = UserAuth();
  const [showLoading, setShowLoading] = useState(false);
  const [user, setUser] = useState(auth);
  //navigate
  const navigate = useNavigate();

  //function toggle hanlder
  const sidebarToggleHandler = (e) => {
    e.preventDefault();

    if (!sidebarToggle) {
      //add class on body
      document.body.classList.add("sb-sidenav-toggled");

      //set state "sidebarToggle" to true
      setSidebarToggle(true);
    } else {
      //remove class on body
      document.body.classList.remove("sb-sidenav-toggled");

      //set state "sidebarToggle" to false
      setSidebarToggle(false);
    }
  };

  //hook useEffect
  useEffect(() => {
  }, []);

  //function logout
  const handleLogout = async () => {
    try {
      setShowLoading(true); // menunjukkan animasi loading
      await logoutUser();
      navigate("/login");
      toast.success(`You are logout.`, {
        duration: 4000,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      toast(error);
    } finally {
      setShowLoading(false); // menyembunyikan animasi loading
    }
  };

  const userName = user.displayName;
  return (
    <React.Fragment>
      <div className="d-flex sb-sidenav-toggled" id="wrapper">
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center"></div>
          <SidebarComponent />
        </div>
        <div id="page-content-wrapper">
          <Navbar className="navbar navbar-expand-lg navbar-light navbar-kowaja">
            <div className="container-fluid">
              <Button
                className="btn btn-kowaja d-block d-md-none"
                onClick={sidebarToggleHandler}
              >
                Menu
              </Button>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="search-kowaja d-none d-md-block me-2"
                  aria-label="Search"
                />
              </Form>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <NavDropdown title={userName} id="basic-nav-dropdown">
                    
                    <NavDropdown.Item onClick={handleLogout}>
                      {" "}
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </ul>
              </div>
            </div>
          </Navbar>
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutAdmin;
