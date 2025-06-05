import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import './App.css';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/secondPage" element={<SecondPage/>}/>
        <Route path="/thirdPage" element={<ThirdPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
