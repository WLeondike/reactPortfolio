import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs bg-dark">
      <h2 className="nav-item ml-5 mediumaquamarine" id="headerFont">
          William Leondike
      </h2>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={
            props.currentPage === "About" ? "nav-link active" : "nav-link"
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
            props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
