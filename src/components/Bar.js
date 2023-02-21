import Navbar from 'react-bootstrap/Navbar';

function Bar() {
  return (
    <Navbar className="bar" bg="dark">
      <ul className='menuOptions'>
        <li className='main'>
          <a href="/">Food For Thought</a>
        </li>
        <div>
          <li className='side'>
            <a href="/recipe">Recipe</a>
          </li>
        </div>
      </ul>
    </Navbar>
  );
}

export default Bar;