import React from "react";

const Portfolio = () => (
  <main class="container-lg" id="container">
    <section className="row">
      <section className="col-md-9 bg-white p-3 my-5 text-black">
        <h2 className="mediumaquamarine" id="headerFont">
          <strong>Portfolio</strong>
        </h2>
        <hr />
        <section className="row">
          <div className="img1">
            <p className="banner">
              <a
                href="https://stream-junkie.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                StreamJunkie
              </a>
            </p>
          </div>

          <div className="img2">
            <p className="banner">
              <a
                href="https://gitgudtogether.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                GitGud Together
              </a>
            </p>
          </div>
        </section>

        <section className="row">
          <div className="img3">
            <p className="banner">
              <a
                href="https://wleondike.github.io/webAPIs/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                Code Quiz
              </a>
            </p>
          </div>

          <div className="img4">
            <p className="banner">
              <a
                href="https://wleondike.github.io/thirdPartyAPIs/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                Day Planner
              </a>
            </p>
          </div>
        </section>

        <section className="row">
          <div className="img5">
            <p className="banner">
              <a
                href="https://wleondike-eat-da-burger.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                Burger Logger
              </a>
            </p>
          </div>
        </section>
      </section>
    </section>
  </main>
);

export default Portfolio;
