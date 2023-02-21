import { Parallax } from 'react-parallax';
import Food from '../images/food.jpg';

const ImageOne = () => (
    <Parallax className="image2" bgImage={Food} strength={800}>
        <div className='content1'>
            <span className='img-txt'>Delicious Meals</span>
        </div>
    </Parallax>
);

export default ImageOne;