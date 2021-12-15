import "./Slider.scss";
import axios from 'axios';
import { useEffect, useState } from "react";
import Slider from "react-slick";
import client from "../../images/client.jpg";
import digital from "../../images/digital-marketing.jpg";
import cyber from "../../images/cyber-security.jpg";
import hardware from "../../images/hardware.jpg";
import human from "../../images/human-resources.jpg";
import machine from "../../images/machine-learning.jpg";
import mobile from "../../images/mobile-dev.jpg";
import programming from "../../images/programming.jpg";
import sales from "../../images/sales.jpg";
import ux from "../../images/UX-design.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import getData from "../../actions/geOnBoard.JS";

const images = [client, digital, cyber, hardware, human, machine, mobile, programming, sales, ux];

function SliderCarrousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('https://www.getonbrd.com/api/v0/categories?per_page=10&page=1')
        .then(response => setData(response.data.data))
  },[]);

  /* useEffect(()=>{
    const loadData = async() =>{
    const {datos} = await getData();
    setDataDB(datos);
  }
  loadData();
}, []) */

console.log(data);
  data.map((items, index) => {
    
  })
  

  return (
    <div className="container">
      <h1 className="title">¡Te necesitan si eres parte de esto!</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            {/* {data.map((item, index) => (
            <h1 key={index}>
              {item.id}              
            </h1>))} */}
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCarrousel;