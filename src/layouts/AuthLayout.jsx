import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import '../assets/css/sidebar.css';
import {
  Navbar,
  NavDropdown,
  Form,
  Button,
  Image,
  NavItem,
  Dropdown,
  Popover,
  Container,
  Nav,
  FormControl
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import profileImg from "../assets/icons/userAvatar.png";
import bellIcon from "../assets/icons/notifbell.svg";


// Somehow in windows OS innerwidth is off by 1 pixel
const getIsMobile = () => window.matchMedia('(max-width: 1000px)').matches;
const nav = document.getElementById('nav-bar'),
toggle = document.getElementById('header-toggle'),
bodypd = document.getElementById('body-pd'),
headerpd = document.getElementById('header');

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
   

      nav.classList.add("show");
      // toggle.classList.add('bx-x')
      bodypd.classList.add('body-pd')
      headerpd.classList.add('header-pd')

      console.log(sidebarToggle);
      //set state "sidebarToggle" to true
      setSidebarToggle(true);
    } else {
      //remove class on body
      document.body.classList.remove("sb-sidenav-toggled");
      console.log(sidebarToggle);
      //set state "sidebarToggle" to false
      setSidebarToggle(false);
    }
  };

  //hook useEffect
  useEffect(() => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if(toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show');
          // change icon
          toggle.classList.toggle('bx-x');
          // add padding to body
          bodypd.classList.toggle('body-pd');
          // add padding to header
          headerpd.classList.toggle('body-pd');
        });
      }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if(linkColor) {
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink));

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
      <header className="header body-pd" id="header">
        <div className="header_toggle bx-x" id="header-toggle">
          <Link className="toggler-nav">
            Toggle
          </Link>
        </div>
        <div className="header_img"> <Image src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div>
      </header>
      <Sidebar />
      <div className="d-flex" id="wrapper">
        <div id="page-content-wrapper">
          <div className="container">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutAdmin;
