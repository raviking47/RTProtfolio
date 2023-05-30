import React from "react";
import image from '../image/q.jpg'

export default function StartUp() {
  return (
    <div>
      <fieldset style={{display:"-ms-inline-flexbox"}}>
        <section className="hero__StyledHeroSection-sc-116xg8t-0 jnUoFC" style={{display:"-ms-inline-flexbox"}}>
          <div className="fadeup-enter-done" style={{transitionDelay: "100ms"}}>
            <h4 style={{textAlign:"left" , marginLeft:"10%",marginTop:"15%"}}>Hi, my name is</h4>
          </div>
          <div className="fadeup-enter-done" style={{transitionDelay: "100ms"}}>
            <h1 className="my-2" style={{fontSize:"80px",textAlign:"left" , marginLeft:"10%" }}><u>Ravi Tomer.</u></h1>
          </div>
          <div className="fadeup-enter-done" style={{transitionDelay: "100ms"}}>
            <h3 className="big-heading my-2" style={{textAlign:"left" , marginLeft:"10%"}}>I build things for the Web and <br />
            Data Science field<datalist>
              
            </datalist>.</h3>
          </div>
          <div className="fadeup-enter-done my-4"   style={{ transitionDelay:"20ms",textAlign:"left" , marginLeft:"10%",marginBottom:'10%'}}>
            
            <p style={{paddingRight:'50%'}}>
            <img
                className="imageX"
                  src={image}
                  // width={"150px"}
                  alt="txet" 
                
                />
            Hello! My name is Ravi Tomer and I enjoy creating things that
            live on the internet. My interest in web development and Data
            Science started back in 2021. I am develop many project like
                Textutils and Notes app and Calcuator and so on. 
       </p>
          </div>
        
        </section>
      </fieldset>
    </div>
  );
}
