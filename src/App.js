
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navigator from './Components/Navigator/Navigator';
import Home from './Pages/Home/Home';

import FilmsDetails from './Pages/FilmsDetails/FilmsDetails';
import About from './Pages/About/About';
import Films from './Pages/Films/Films';



function App() {
  return (
    <Router>
    <div className="App">
     <Navigator / >
    
     
     
      
       

</div>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/films" element={<Films/>}/>
          <Route path="/films/:id" element={<FilmsDetails/>}/>
          <Route path="/about" element={<About/>}/>
          
        
        </Routes>
     
   
    </Router>
  );
}

export default App;
