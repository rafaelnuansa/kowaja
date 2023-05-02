import React from "react";

//import Link
import { Link, useLocation } from "react-router-dom";
import bookIcon from "../assets/icons/book.svg";
import overviewIcon from "../assets/icons/overview.svg";
import ideaIcon from "../assets/icons/ideas.svg" 
import vectorIcon from "../assets/icons/vector.svg" 
import usersIcon from "../assets/icons/users.svg" 
import { Image } from "react-bootstrap";

function Sidebar() {

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
              <Image src={overviewIcon} className="icon-sidebar" />
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
            <Image src={ideaIcon} className="icon-sidebar" />
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
            <Image src={vectorIcon} className="icon-sidebar" />
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
            <Image src={usersIcon} className="icon-sidebar" />
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
            <Image src={bookIcon} className="icon-sidebar" />
              Create News
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
