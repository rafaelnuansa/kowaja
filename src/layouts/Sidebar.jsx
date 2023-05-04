import React from "react";

//import Link
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as NewsIcon } from "../assets/icons/book.svg";
import { ReactComponent as OverviewIcon } from "../assets/icons/overview.svg";
import { ReactComponent as IdeaIcon} from "../assets/icons/ideas.svg"
import { ReactComponent as VectorIcon } from "../assets/icons/vector.svg"
import { ReactComponent as UsersIcon } from "../assets/icons/users.svg"
// import { Image } from "react-bootstrap";
// import "../assets/css/sidebar.css"

function Sidebar() {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <React.Fragment>
      <div id="layoutSidenav_nav">
        <div className="d-none sidenav-toggled"></div>
        <nav className="sidenav shadow-right sidenav-light">
          <div className="sidenav-footer bg-white border-0">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center mb-2">
              </div>
            </div>
          </div>
          <div className="sidenav-menu pb-3 mt-2">
            <div className="nav accordion" id="accordionSidenav">
              <Link
                className={
                  splitLocation[1] === "dashboard"
                    ? "nav-link link-sidebar-kowaja active"
                    : "nav-link link-sidebar-kowaja"
                }
                to="/dashboard">
                <div className="nav-link-icon">
                  <OverviewIcon />
                </div>
                Overview
              </Link>

              <Link
                className={
                  splitLocation[1] === "loan"
                    ? "nav-link link-sidebar-kowaja active"
                    : "nav-link link-sidebar-kowaja"
                }
                to="/loan">
                <div className="nav-link-icon">
                  <IdeaIcon />
                </div>
                Loan App Status
              </Link>

              <Link
                className={
                  splitLocation[1] === "upload"
                    ? "nav-link link-sidebar-kowaja active"
                    : "nav-link link-sidebar-kowaja"
                }
                to="/upload">
                <div className="nav-link-icon">
                  <VectorIcon />
                </div>
                Upload Banners
              </Link>

              <Link
                className={
                  splitLocation[1] === "create-product"
                    ? "nav-link link-sidebar-kowaja active"
                    : "nav-link link-sidebar-kowaja"
                }
                to="/create-product">
                <div className="nav-link-icon">
                  <UsersIcon />
                </div>
                Create Products
              </Link>
              
              <Link
                className={
                  splitLocation[1] === "create-news"
                    ? "nav-link link-sidebar-kowaja active"
                    : "nav-link link-sidebar-kowaja"
                }
                to="/create-news">
                <div className="nav-link-icon">
                  <NewsIcon />
                </div>
                Create News
              </Link>



              <div className="collapse " id="collapseDashboards" data-bs-parent="#accordionSidenav">
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                </nav>
              </div>
            </div>
          </div>

        </nav>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;