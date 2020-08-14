import React from "react";
import resume from "../assets/resume/Full-Stack-Resume.pdf"

const Contact = () => (
  <div className="container" id="container">
    <div className="row">
      <div className="col-md-9 bg-white p-3 my-5 text-black">
        <h2 className="mediumaquamarine" id="headerFont">
          <strong>Contact</strong>
        </h2>
        <hr />
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1" className="mediumaquamarine">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="John Smith"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1" className="mediumaquamarine">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="emailaddress@example.com"
            />
          </div>
          <div className="form-group">
            <label
              for="exampleFormControlTextarea1"
              className="mediumaquamarine"
            >
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
        <button type="button" className="btn btn-lg btn-dark" enable>
          Submit
        </button>
        <br />
        <br />
        <p className="text-center">
          Feel free to check out my
          <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <br />
          Contact me at:
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <a
            href="mailto:billyleondike@gmail.com?subject=Mail from my Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            billyleondike@gmail.com
          </a>
          <i className="fa fa-mobile fa-lg" aria-hidden="true"></i>
          <a href="tel:386-405-4144" target="_blank" rel="noopener noreferrer">
            386-405-4144
          </a>
          <br />
          Follow these links to my
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <a
            href="https://linkedin.com/in/williamleondike"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          and
          <i className="fa fa-github" aria-hidden="true"></i>
          <a
            href="https://github.com/WLeondike"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          profile pages.
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
