import React from "react";
import image1 from "../image/1.png";
import image2 from "../image/2.png";
import image4 from "../image/4.png";
import image5 from "../image/5.png";


export default function Work() {
  return (
    <>
  <div className="container my-4">
  <img src={image1} className="my-3" alt="..." height="280px" width="350px" style={{alignItems:'left'}} />
<h2>Calculator Project in JavaScript</h2>
<textarea className="textareaX" cols="80" rows="4" disabled> The Calculator Project in JavaScript is a simple web application that allows users to perform basic arithmetic operations. Built using the JavaScript programming language, it provides an interactive and user-friendly interface for performing calculations within a web browser.</textarea>
  </div>
  <div className="container my-4">
  <img src={image2} className="my-3" alt="..." height="280px" width="650px" style={{alignItems:'left'}} />
<h2>Digital Project in JavaScript</h2>
<textarea className="textareaX" cols="80" rows="5" disabled> The Digital Project in JavaScript is an interactive web application that emulates a digital representation of a real-world device, such as a digital clock, countdown timer, or stopwatch. Developed using the JavaScript programming language, it leverages the power of JavaScript to provide dynamic and engaging digital experiences. </textarea>
  </div>
  <div className="container my-4">
  <img src={image4} className="my-3" alt="..." height="280px" width="650px" style={{alignItems:'left'}} />
<h2>Stopwatch Project in JavaScript</h2>
<textarea className="textareaX" cols="80" rows="4" disabled> The Stopwatch Project in JavaScript is a web application that emulates a digital stopwatch, allowing users to measure elapsed time with precision. Built using the JavaScript programming language, it leverages the capabilities of JavaScript to create an interactive and accurate stopwatch. </textarea>
  </div>
  <div className="container my-4">
  <img src={image5} className="my-3" alt="..." height="480px" width="650px" style={{alignItems:'left'}} />
<h2>Tip Calculator Project in JavaScript</h2>
<textarea  className="textareaX" cols="80" rows="5" disabled> The Tip Calculator Project in JavaScript is a web-based application that calculates the appropriate tip amount based on the total bill and user-defined tip percentage. Developed using JavaScript, it provides a convenient tool for individuals to quickly determine the tip amount they should leave for a service rendered.  </textarea>
  </div>
     
  
    </>
  );
}
