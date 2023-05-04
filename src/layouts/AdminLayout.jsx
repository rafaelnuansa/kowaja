import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Navbar,
  NavDropdown,
  Form,
  Button,
  Image,
  NavItem,
  Dropdown,
  Popover,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import profileImg from "../assets/icons/userAvatar.png";
import bellIcon from "../assets/icons/notifbell.svg";

// Somehow in windows OS innerwidth is off by 1 pixel
const getIsMobile = () => window.matchMedia('(max-width: 1000px)').matches;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
}


const LayoutAdmin = ({ children }) => {
  //state toggle
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  const { currentUser, logoutUser } = useAuth();
  const [dataUser, setDataUser] = useState({
    email: "",
    displayName: "Nama User",
  });
  const isMobile = useIsMobile();
  //navigate
  const navigate = useNavigate();
  //function toggle hanlder
  const sidebarToggleHandler = (e) => {
    e.preventDefault();

    if (!sidebarToggle) {
      //add class on body
      document.body.classList.add("sidenav-toggled");

      //set state "sidebarToggle" to true
      setSidebarToggle(true);
    } else {
      //remove class on body
      document.body.classList.remove("sidenav-toggled");
      //set state "sidebarToggle" to false
      setSidebarToggle(false);
    }
  };

  const notificationDropdownHandler = (e) => {
    e.preventDefault();
    if (!notificationShow) {
      //add class on body
      const profDrop = document.getElementById('NotificationDropdown')
      profDrop.classList.add("show");

      //set state "notificationShow" to true
      setNotificationShow(true);
    } else {
      //remove class on body
      const profDrop = document.getElementById('NotificationDropdown')
      profDrop.classList.remove("show");
      //set state "notificationShow" to false
      setNotificationShow(false);
    }
  }
  const dropdownProfileHandler = (e) => {
    e.preventDefault();
    if (!sidebarToggle) {
      //add class on body
      const profDrop = document.getElementById('profileDropdown')
      profDrop.classList.add("show");

      //set state "sidebarToggle" to true
      setSidebarToggle(true);
    } else {
      //remove class on body
      const profDrop = document.getElementById('profileDropdown')
      profDrop.classList.remove("show");
      //set state "sidebarToggle" to false
      setSidebarToggle(false);
    }
  };
  //hook useEffect
  useEffect(() => {
    if (currentUser) {
      setDataUser({
        email: currentUser.email,
        displayName: currentUser.displayName || "Nama User",
      });
      console.log(currentUser);
    }
  }, [currentUser]);

  //function logout
  const handleLogout = async () => {
    try {
      // setShowLoading(true); // menunjukkan animasi loading
      await logoutUser();
      navigate("/login");
      toast.success(`You are logouted`, {
        duration: 3000,
        position: "top-right",
        style: {
          borderRadius: "10px",
        },
      });
    } catch (error) {
      toast(error);
    } finally {
      // setShowLoading(false); // menyembunyikan animasi loading
    }
  };

  return (
    <React.Fragment>

      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <nav className="topnav navbar navbar-expand justify-content-between justify-content-sm-start navbar-kowaja" id="kowajaNavbar">
            {isMobile &&
              <button className="btn btn-icon btn-transparent-dark ml-2" onClick={sidebarToggleHandler} id="sidebarToggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </button>
            }
            <Link className="navbar-brand pe-3 ps-4 ps-lg-0" href="#">
            </Link>
            <ul className="navbar-nav align-item-start">

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="search-kowaja d-none d-md-block me-2"
                  aria-label="Search"
                />
              </Form>
            </ul>
            <ul className="navbar-nav align-items-center ms-auto">
              <li className="nav-item dropdown mr-4 d-block d-md-block d-lg-block">
                <a className="dropdown-toggle-notification nav-link" href="#" onClick={notificationDropdownHandler} aria-expanded="true">
                <span className="count"></span>
                <i className="fa fa-bell"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow-lg border-0 dropdown-menu-left rounded shadow-custom" id="NotificationDropdown" aria-labelledby="navbarDropdownMenuLink"
                 style={!isMobile ? { width: "25rem" } : {}}
                >
                  <div className="notification-title">
                    <div className="text-center p-2">
                      <i className="fa fa-bell"></i> Notification
                    </div>
                  </div>
                  <hr style={{marginBottom: "0rem"}}/>
                    <ul className="list-group" style={{maxHeight: "300px",overflow: "auto",padding:"7px"}}>
                      <li className="information-unread read">
                        <a href="#" className="media text-decoration-none">
                          <div className="media-body">
                            <div className="notif-text text-dark">
                              Unread Notification here
                            </div>
                            <div className="notif-date">13 April 2023 21:13</div>
                          </div>
                        </a>
                      </li>
                      <li className="information-read">
                        <a href="#" className="media text-decoration-none">
                          <div className="media-body">
                            <div className="notif-text text-dark">
                              This notification is readed
                            </div>
                            <div className="notif-date">06 December 2022 00:22</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <hr/>
                      <div className="notification-title">
                        <div className="text-center p-2">
                          <a href="#" className="text-dark">
                            See All Notification <i className="fas fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <Link className="dropdown-toggle font-weight-bold text-dark" onClick={dropdownProfileHandler} style={{ paddingTop: "13px", lineHeight: "30px", paddingBottom: "9px", textDecoration: "none", marginRight: "15px" }} data-bs-toggle="dropdown" href="#">
                      {
                        !isMobile &&
                        <span style={{ marginRight: "5px" }}>
                        {currentUser.displayName}
                        </span> 
                      }
                      <Image src={profileImg} width="40" height="40" style={{ borderRadius: "50%" }} />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right mt-2 border-0 shadow-custom rounded" id="profileDropdown">
                      <Link onClick={handleLogout} className="dropdown-item">
                        Logout</Link>
                    </div>
                  </li>
                </ul>
              </nav>
              {children}

            </div>
        </div>
        <div className="d-none collapsing collapsed show active card-footer"></div>
    </React.Fragment>
  );
};

export default LayoutAdmin;