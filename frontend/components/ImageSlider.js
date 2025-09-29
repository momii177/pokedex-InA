import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/carousel/1.jpg" alt="Banner 1" className="w-full h-100 object-cover rounded-xl" />
      </div>
      <div>
        <img src="/carousel/2.jpg" alt="Banner 2" className="w-full h-100 object-cover rounded-xl" />
      </div>
      <div>
        <img src="/carousel/3.jpg" alt="Banner 3" className="w-full h-100 object-cover rounded-xl" />
      </div>
    </Slider>
  );
}
