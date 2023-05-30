import React from "react";
import image from "../image/hello.jpg";

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="about__StyledAboutSection-sc-1ownso9-0 bNXWUU "
        data-sr-id= "0"
        style={{
          visibility: "visible",
          opacity: "1",
          transform:
            " matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          transition:
            "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
          paddingTop: "10%",
        }}
      > 
        <h2
          className="numbered-heading"
          style={{ paddingRight: "45%", textAlign: "right", marginRight: "10%" }}
        >
         <u> About Me</u>
        </h2> 
        <fieldset>
        <div className="inner">
          <div className="about__StyledText-sc-1ownso9-1 kNIdQM">
            <div>
              <p
              className="my-5"
                style={{
                  paddingLeft: "32.5%",
                  textAlign: "left",
                  marginRight: "10%",
                  }}
              >
                As a Full Stack Developer, I bring a passion for creating
                innovative and intuitive web applications. My technical
                expertise includes proficiency in front-end development using
                HTML, CSS, JavaScript, and React. I am also skilled in back-end
                technologies such as Node.js. In addition, I have experience
                working with popular databases
                like MySQL, PostgreSQL, and MongoDB. I'm a Data Analyst with a
                passion for transforming complex data sets into insights. My
                expertise includes data modeling, data visualization,
                statistical analysis, and data mining.
                <div >
               <img
                className="img"
                  src={image}
                  width={"150px"}
                  alt="txet" 
                />
               </div>
               <ul className=" gap-5 mx-3 my-4" style={{ display: "flex" }}>
                  <li>
                    <h5>HTML</h5>
                  </li>
                  <li>
                    <h5>CSS(bootstrap)</h5>
                  </li>
                  <li>
                    <h5>JavaSciprt</h5>
                  </li>
                  </ul>
                  <ul className=" gap-5 mx-3" style={{ display: "flex" }}>
                  <li>
                    <h5>Pyhton</h5>
                  </li>
                  <li>
                    <h5>reactJS</h5>
                  </li>
                  </ul>
                  <ul className=" gap-5 mx-3" style={{ display: "flex" }}>
                  <li>
                    <h5>NodeJS</h5>
                  </li>
                  <li>
                    <h5>ExpressJS</h5>
                  </li>
                  <li>
                    <h5>MongoDB</h5>
                  </li>
                  </ul>
                  <ul className=" gap-5 mx-3" style={{ display: "flex" }}>
                  <li>
                    <h5>C++</h5>
                  </li>
                  <li>
                    <h5>JAVA</h5>
                  </li>
                </ul>
              </p>
            </div>
          
            <div className="gatsby-image-wrapper styleattribute">
              <img
                width="165"
                height="185"
                data-main-image=""
                sizes="(min-width: 500px) 50px, 100vw"
                decoding="async"
                src={image}
                alt="Headshot"
                style={{ objectFit: "cover", opacity: "1" }}
              />
            </div>
          </div>
        </div>
       </fieldset>
      </div>
    </div>
  );
}
