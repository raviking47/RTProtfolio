import React, { useState } from "react";

export default function Skills() {
  const [text, setText] = useState('Check My Skill...');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonHtml = () => {
    setText(`             Html / Html 5
             Proficiency : - Excellent
             Last Use:- May 2023`);
  };
  const handleButtonCss = () => {
    setText(`             CSS (tailwind css)
             Proficiency : - Excellent
             Last Use:- May 2023`);
  };
  const handleButtonJS = () => {
    setText(`             JavaScript
             Proficiency : - Excellent
             Last Use:- May 2023`);
  };
  const handleButtonR= () => {
    setText(`             React JS
             Proficiency : - Excellent
             Last Use:- May 2023`);
  };const handleButtonN = () => {
    setText(`             Node JS
             Proficiency : - Excellent
             Last Use:- May 2023`);
  };const handleButtonE = () => {
    setText(`             Express JS
             Proficiency  : - Excellent
             Last Use:- May 2023`);
  };const handleButtonM = () => {
    setText(`             MySql
             Proficiency : - Excellent
             Last Use:- April 2022`);
  };
  const handleButtonP = () => {
    setText(`             PSql PostgreSQL
             Proficiency : - Excellent
             Last Use:- Dec 2022`);
  };
  const handleButtonMo = () => {
    setText('MongoDB               :- Excellent             Last Use:- May 2023');
  };
  const handleButtonJava = () => {
    setText(`             Java
             Proficiency : - Intermediate
             Last Use:- June 2021`);
  };
  const handleButtonC = () => {
    setText(`             C++
             Proficiency : - Excellent
             Last Use:- May 2023`);
  };
  const handleButtonPython = () => {
    setText(`             Python
             Proficiency : - Excellent
             Last Use:- May 2023`);
  };
  const handleButtonDM = () => {
    setText(`             Data Modeling
             Proficiency : - Good
             Last Use:- April 2023`);
  };
  const handleButtonS = () => {
    setText(`             Statistical analysis
             Proficiency : - Good
             Last Use:- May 2023`);
  };
  const handleButtonV = () => {
    setText(`      Data visualization
             Proficiency : - Good
             Last Use:- May 2023`);
  };
  const handleButtonDSA = () => {
    setText(`data structures & algorithms
             Proficiency : - Intermediate
             Last Use:- May 2023`);
  };
  return (<>
    <div className=" d-grid gap-2 col-4  mx-auto" >
        <h2>Skill</h2>
        <textarea cols="5" rows="5" value={text} onChange={handleChange} className="textareaX" disabled/>
    </div>
    <hr/>
    <h3>Web Development Skill</h3>
 
    <div className="d-grid gap-2 d-md-block justify-content-md-end mx-5 my-5">
  <button onClick={handleButtonHtml} className="textareaXbtn me-md-2 btn-lg" type="button">HTML / HTML 5</button>
  <button onClick={handleButtonCss} className="textareaXbtn  me-md-2  btn-lg " type="button">CSS</button>
  <button onClick={handleButtonJS} className="textareaXbtn  me-md-2 btn-lg" type="button">JAVASCRIPT</button>
     </div>
     
     <div className="d-grid gap-2 d-md-block justify-content-md-start mx-5 my-5">
  <button onClick={handleButtonR} className="textareaXbtn  me-md-2 btn-lg" type="button">REACT JS</button>
  <button onClick={handleButtonN} className="textareaXbtn  me-md-2  btn-lg " type="button">NODE JS</button>
  <button onClick={handleButtonE} className="textareaXbtn  me-md-2 btn-lg" type="button">EXPRESS JS</button>
     </div>
     

     <div className="d-grid gap-2 d-md-block justify-content-md-end mx-5 my-5">
  <button onClick={handleButtonM} className="textareaXbtn  me-md-2 btn-lg" type="button">MYSOL</button>
  <button onClick={handleButtonP} className="textareaXbtn  me-md-2  btn-lg " type="button">PSQL(PostgreSQL)</button>
  <button onClick={handleButtonMo} className="textareaXbtn  me-md-2 btn-lg" type="button">MONGO DB</button>
     </div>
     <hr/>
     <h3>Core Lanuage</h3>
 
     <div className="d-grid gap-2 d-md-block justify-content-md-start mx-5 my-5">
  <button onClick={handleButtonJava} className="textareaXbtn  me-md-2 btn-lg" type="button">JAVA</button>
  <button  onClick={handleButtonC}className="textareaXbtn  me-md-2 btn-lg" type="button">C++</button>
  <button onClick={handleButtonPython} className="textareaXbtn  me-md-2  btn-lg " type="button">Python</button>

     </div>
     <hr/>
   <h3>Data Science and Machine learning Skill</h3>
<div className="d-grid gap-2 d-md-block justify-content-md-end mx-5 my-5">
  <button onClick={handleButtonPython} className="textareaXbtn  me-md-2  btn-lg " type="button">Python</button>
<button onClick={handleButtonDM}className="textareaXbtn  me-md-2 btn-lg" type="button">Data modeling</button>
<button onClick={handleButtonS} className=" textareaXbtn  me-md-2  btn-lg " type="button">Statistical analysis</button>
<button onClick={handleButtonV}className="textareaXbtn  me-md-2 btn-lg" type="button">Data visualization</button>
<button onClick={handleButtonDSA} className="textareaXbtn  me-md-2 btn-lg" type="button">data structures & algorithms</button>

</div>

    </>
  );
}
