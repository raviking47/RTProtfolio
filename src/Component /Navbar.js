import React from "react";
import { Link } from "react-router-dom";
// import image from '../image/hello.jpg'
export default function Navbar() {
  return (
    <div>
   <nav className="nav-ul">
    
   <ul className=" bodyX nav-tabs rounded-5 shadow-sm my-3 gap-2 p-3  small " id="pillNav2" role="tablist" style={{textAlign:'right',color:"#5cbddd",listStyle:'none',cursor:'pointer' ,}} >
  <li className="nav-item" style={{textAlign:'left',marginRight:'40%',fontFamily:'cur',fontSize:'30px'}}> <u> <i> HOW ARE YOU ?</i></u> </li>
   <li className="nav-item"  >
    <Link to='/' className="nav-link   rounded-5">00.Home</Link>
   
  </li>
  <li className="nav-item">
    <Link to='/about' className="nav-link rounded-5">01.About</Link>
  </li>
  <li className="nav-item" role="presentation">
    <Link to='/skills' className="nav-link rounded-5" >02.Skill</Link>
  </li>
  <li className="nav-item" role="presentation">
    <Link className="nav-link rounded-5" to='/work'>03.Work</Link>
  </li>
  <li className="nav-item" role="presentation">
    <Link className="nav-link rounded-5"  role="tab" to='contact'>04.Contact</Link>
  </li>
</ul>
   </nav>
   
    </div>
  );
}
