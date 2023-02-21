import ImageOne from "../components/ImageOne";
import Bar from "../components/Bar";
import ImageRow from "../components/ImageRow";
import About from "../components/About";
import Slideshow from "../components/Slideshow";

function Home() {
    return (
        <div>
            <Bar/> 
            <ImageOne/>
            <About/>
            <ImageRow />
            <Slideshow/>
        </div>
    )
}

export default Home;