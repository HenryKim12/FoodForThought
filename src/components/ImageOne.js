import { Parallax } from 'react-parallax';
import Fridge from '../images/outsideFridge.jpg';
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
            <span className='img-txt'>Food For Thought.</span>
            <Button className="findRecipeButton" onClick={routeChange}>Find a Recipe</Button>
        </div>
    </Parallax>
    );
}

export default ImageOne;