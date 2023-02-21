import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Bar() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/recipe";
    navigate(path);
  }

  return (
    <Navbar className="bar" bg="dark">
      <ul className='menuOptions'>
        <li>
          <a href="./home">Food For Thought</a>
        </li>
        <div className="other">
          <li>
            <a onClick={routeChange}>Recipe</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
        </div>
      </ul>
    </Navbar>
  );
}

export default Bar;