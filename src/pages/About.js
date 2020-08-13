import React from "react";
import headshot from "../assets/images/headshot.png"

const About = () => (
  <section className="container-lg" id="container">
      <div className="row">
        <div className="col-md-9 bg-white p-3 my-5 text-black">
          <h2 className="mediumaquamarine" id="headerFont">
            <strong>About Me</strong>
          </h2>
          <hr />
          <article className="row single-post mt-5 no-gutters">
            <section className="col-md-12">
              <p>
                <img
                  className="float-left"
                  style={{width: "182px", height: "232px", marginRight: "15px"}}
                  src={headshot}
                  alt="Headshot of myself"
                />
                Growing up I've always been around technology. My father has
                always been a very 'tech-savvy' person and I have had a great
                amount of exposure to different technological advances. I've
                always loved technology. I believe that technology has caused so
                many advances in our lives today, let alone the simplicities
                technology has brought. We are able to access the internet from
                almost anywhere with the touch of your fingers, to being able to
                make different decisions for a character in a movie through an
                interactive film. I'll always stand by technology, and
                appreciate everything it's done for not only myself, but
                everyone around the world. We continue to adapt and overcome the
                challenges that come our way and I feel that technology has had
                a great impact on our success for survival.
              </p>
              <p>
                I was born in Camden, New Jersey but we didn't live there long.
                Before my first birthday, we moved down to Florida and I have
                lived here ever since. Volusia county is considered my home and
                I lived there for over 20 years. I love the beach and anything
                that gets me out on the water or even just being in the sun in
                general. Now that I live in Central Florida, I'm not able to
                access the beach as easily anymore. In my spare time, I enjoy
                longboarding or kayaking any chance I get. When I was younger,
                my father introduced me to golfing, but as of recently it has
                become more of a passion for myself. I try to get out onto the
                golf course every week I am able to.
              </p>
              <p className="text-center">
                Feel free to check out my
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                <a 
                  href="./assets/resume/Full-Stack Resume.pdf"
                  target="_blank"
                  >Resume</a>
                <br />
                Contact me at:
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a 
                  href="mailto:billyleondike@gmail.com?subject=Mail from my Website"
                  target="_blank"
                  >billyleondike@gmail.com</a>
                <i className="fa fa-mobile fa-lg" aria-hidden="true"></i>
                <a 
                  href="tel:386-405-4144"
                  target="_blank"
                  >386-405-4144</a> 
                <br /> 
                Follow these links to my
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <a
                  href="https://linkedin.com/in/williamleondike"
                  target="_blank"
                  >LinkedIn</a>
                and
                <i className="fa fa-github" aria-hidden="true"></i>
                <a 
                  href="https://github.com/WLeondike" 
                  target="_blank" 
                  >GitHub</a>
                profile pages.
              </p>
            </section>
          </article>
        </div>
      </div>
    </section>
);

export default About;
