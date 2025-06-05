import { useNavigate, useLocation } from "react-router-dom";
import './Homepage.css';

function FourthPage() {
  const location = useLocation();
  const {email, password} = location.state;
  
  return (
    <div className="App">
        <h1>Fourth Page</h1>
        <h2>Email = {email}</h2>
        <h2>Password = {password}</h2>
    </div>
  );

}

export default FourthPage;
