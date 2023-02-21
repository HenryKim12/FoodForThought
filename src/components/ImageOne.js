import { Parallax } from 'react-parallax';
import Fridge from '../images/fridge.jpg';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function ImageOne() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/recipe"
        navigate(path);
    }

    return (
        <Parallax className="image1" bgImage={Fridge} strength={800}>
        <div className='content'>
            <span className='img-txt'>Food For Thought</span>
            <p>Find what you can make with the ingredients in your fridge!</p>
            <Button onClick={routeChange}>Find Recipe</Button>
        </div>
    </Parallax>
    );
}

export default ImageOne;