import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Component /About';
import Navbar from './Component /Navbar';
import StartUp from './Component /StartUp';
import Footer from './Component /Footer';
import Skills from './Component /Skills';
import Work from './Component /Work';
import Contact from './Component /Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>
      {/* <StartUp/> */}
      {/* <About/> */}
      <Routes>
       <Route exact path="/" Component={StartUp}/>
       <Route exact path='/about' Component={About} />
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/work' element={<Work/>}/> 
       <Route path='/contact' element={<Contact/>}/> 
     
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
