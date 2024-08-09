import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Carousel1 from "../Assets/images/Carousel1.jpeg"
import Carousel2 from "../Assets/images/Carousel2.jpeg"
import Carousel3 from "../Assets/images/Carousel3.jpg"

function HomeCarousel() {
  return (
  <div>
    <Carousel>
      <Carousel.Item interval={500}>
        <Image src={Carousel1} alt='imagg1' height={300} width={400} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src={Carousel2} alt='image2'  height={300} width={400}  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src={Carousel3} alt='image3'  height={300} width={400} />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HomeCarousel;