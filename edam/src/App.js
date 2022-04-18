import './App.css';
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from  "./pages/Homepage/Homepage";
import Contactus from './pages/Contactus/Contactus';  
import Gallery  from './pages/Gallery/Gallery';
import Guilds from './pages/Guilds/Guilds';
import Joinus from './pages/Joinus/Joinus';
import Team from './pages/Team/Team';
import Work from './pages/Work/Work';
function App() {
  return (
      // <Home />
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} ></Route>
        <Route path='/aboutus' element={<Contactus />} ></Route>
        <Route path='/contactus' element={<Gallery />} ></Route>
        <Route path='/gallery' element={<Guilds />} ></Route>
        <Route path='/guilds' element={<Joinus />} ></Route>
        <Route path='/joinus' element={<Team />} ></Route>
        <Route path='/team' element={<Work />} ></Route>

          
      </Routes>

    </Router>

  );
}

export default App;
