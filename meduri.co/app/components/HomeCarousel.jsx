//import Carousel from 'react-bootstrap/Carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Carousel1 from "../Assets/images/Carousel1.jpeg"
import Carousel2 from "../Assets/images/Carousel2.jpeg"
import Carousel3 from "../Assets/images/Carousel3.jpg"

// function HomeCarousel() {
//   return (
//   <div>
//     <Carousel>
//       <Carousel.Item interval={500}>
//         <Image src={Carousel1} alt='image1' height={300} width={400} />
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <Image src={Carousel2} alt='image2'  height={300} width={400}  />
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <Image src={Carousel3} alt='image3'  height={300} width={400} />
//       </Carousel.Item>
//     </Carousel>
//     </div>
//   );
// }

// export default HomeCarousel;



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


function HomeCarousel() {

 return <Carousel centerMode={true}
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  //deviceType={this.props.deviceType}
  //dotListClass="custom-dot-list-style"
  //itemClass="carousel-item-padding-40-px"
>
  <Image src={Carousel1} alt="image 1"/>
  <Image src={Carousel2} alt="image 2" />
  <Image src={Carousel3} alt="image 3" />

</Carousel>;
}


export default HomeCarousel;