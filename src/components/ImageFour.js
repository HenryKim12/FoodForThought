import { Parallax } from 'react-parallax';
import Broccoli from "../images/broccoli.jpg"

const ImageFour = () => (
    <Parallax className="image3" bgImage={Broccoli} strength={800}>
        <div className='content1'>
            <span className='img-txt'>Delicious Meals with Simple Ingredients</span>
        </div>
    </Parallax>
)

export default ImageFour;