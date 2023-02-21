import { Parallax } from 'react-parallax';
import Lemon from "../images/lemon.jpg";

const ImageFive = () => (
        <Parallax className="image3" bgImage={Lemon} strength={800}>
            <div className='content1'>
                <span className='img-txt'></span>
            </div>
        </Parallax>
)

export default ImageFive;