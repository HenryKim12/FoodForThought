import { Parallax } from 'react-parallax';
import Tomato from '../images/tomato.jpg';

const ImageOne = () => (
    <Parallax className="image3" bgImage={Tomato} strength={800}>
        <div className='content1'>
            <span className='img-txt'>With Simple Ingredients</span>
        </div>
    </Parallax>
);

export default ImageOne;