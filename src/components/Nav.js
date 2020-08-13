import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs bg-dark">
      <h2 className="nav-item ml-4 mediumaquamarine" id="headerFont">
        William Leondike
      </h2>
      <li className="nav-item ml-auto">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={
            props.currentPage === "About"
              ? "nav-link active mediumaquamarine"
              : "nav-link"
          }
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={
            props.currentPage === "Portfolio"
              ? "nav-link active mediumaquamarine"
              : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item mr-4">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={
            props.currentPage === "Contact"
              ? "nav-link active mediumaquamarine"
              : "nav-link"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
