import './App.css';
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Test from './test';
function App() {
  return (
      // <Home />
    <Router>
      <Routes>
        <Route exact path='/' element={<Test />} ></Route>
        <Route exact path='/home' element={<Home />} ></Route>
        {/* <Route exact path='/test' component={test} ></Route> */}
          
      </Routes>

    </Router>

  );
}

export default App;
