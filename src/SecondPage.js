import { useNavigate } from "react-router-dom";
import './Homepage.css';

function SecondPage() {
  const navigate = useNavigate();
  return (
    <div className="App">
        <h1>Second Page</h1>
        <button onClick={() => navigate("/thirdPage")}>Go to Third Page</button>
    </div>
  );

}

export default SecondPage;
