import img1 from '../../../../assets/banner/img1.png'
import img2 from '../../../../assets/banner/img2.png'
import img3 from '../../../../assets/banner/img3.png'
import img4 from '../../../../assets/banner/img4.png'
import img5 from '../../../../assets/banner/img5.png'
import img6 from '../../../../assets/banner/img6.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Banner = () => {
    
    return (
        <Carousel>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
    );
};

export default Banner;