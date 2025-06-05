import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import './App.css';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/secondPage" element={<SecondPage/>}/>
        <Route path="/thirdPage" element={<ThirdPage/>}/>
        <Route path="/fourthPage" element={<FourthPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
