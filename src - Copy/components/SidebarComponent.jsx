import React from "react";

//import Link
import { Link, useLocation } from "react-router-dom";

function SidebarComponent() {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <React.Fragment>
      <div className="sidebar-kowaja">
        <ul>
          <li>
            <Link
              className={
                splitLocation[1] === "dashboard"
                  ? "link-sidebar-kowaja active"
                  : "link-sidebar-kowaja"
              }
              to="/dashboard"
            >
              Overview
            </Link>
          </li>

          <li>
            <Link
              className={
                splitLocation[1] === "loan"
                  ? "link-sidebar-kowaja active"
                  : "link-sidebar-kowaja"
              }
              to="/dashboard"
            >
              Loan App Status
            </Link>
          </li>

          <li>
            <Link
              className={
                splitLocation[1] === "upload"
                  ? "link-sidebar-kowaja active"
                  : "link-sidebar-kowaja"
              }
              to="/dashboard"
            >
              Upload Banners
            </Link>
          </li>

          <li>
            <Link
              className={
                splitLocation[1] === "createproduct"
                  ? "link-sidebar-kowaja active"
                  : "link-sidebar-kowaja"
              }
              to="/dashboard"
            >
              Create Products
            </Link>
          </li>

          <li>
            <Link
              className={
                splitLocation[1] === "createnew"
                  ? "link-sidebar-kowaja active"
                  : "link-sidebar-kowaja"
              }
              to="/dashboard"
            >
              Create News
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default SidebarComponent;
