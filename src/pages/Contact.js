import React from "react";

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
              <label for="exampleFormControlInput1" className="mediumaquamarine"
                >Name</label
              >
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1" className="mediumaquamarine"
                >Email address</label
              >
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="emailaddress@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1" className="mediumaquamarine"
                >Message</label
              >
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
        </div>
      </div>
      </div>
);

export default Contact;
