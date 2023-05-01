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
              to="/loan"
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
              to="/upload"
            >
              Upload Banners
            </Link>
          </li>

          <li>
            <Link
              className={
                splitLocation[1] === "create-product"
                  ? "link-sidebar-kowaja active"
                  : "link-sidebar-kowaja"
              }
              to="/create-product"
            >
              Create Products
            </Link>
          </li>

          <li>
            <Link
              className={
                splitLocation[1] === "create-news"
                  ? "link-sidebar-kowaja active"
                  : "link-sidebar-kowaja"
              }
              to="/create-news"
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
