import { Parallax } from 'react-parallax';
import Tomato from '../images/tomato.jpg';

const ImageThree = () => (
    <Parallax className="image3" bgImage={Tomato} strength={800}>
        <div className='content1'>
            <span className='img-txt'></span>
        </div>
    </Parallax>
);

export default ImageThree;