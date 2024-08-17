import { Link } from "react-router-dom";
import "./home.css";
import { NavigationLinks } from "../../dummyData";
import Details from "../../components/details/Details";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_top">
          <div className="homeTop_left">
            <div className="homeLeft-top">
              <p>PRODUCTS</p>
              <p>VIEW ALL</p>
            </div>
            
            <div className="home-products-list">
              <div className="homeLeft-Items">
                {NavigationLinks.map((link) => (
                  <div className="homeLeft-item" id={link.id}>
                    <Link to={link.path} className="link-main">
                      <p>{link.name}</p>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="homeLeft-Items medium-screen">
                {NavigationLinks.map((link) => (
                  <div className="homeLeft-item" id={link.id}>
                    <Link to={link.path} className="link-main">
                      <p>{link.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="homeTop_right">
            <Swiper
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper1"
            >
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/plc.jpg" alt="PCB" />

                  <div className="homeSwiper-image-desc">
                    <p>The world's largest selection of electronic component in stock for immediate shipment!</p>
                    <button>Delivery time and cost</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/pcb.jpg" alt="PCB" />

                  <div className="homeSwiper-image-desc">
                    <p>The world's largest selection of electronic component in stock for immediate shipment!</p>
                    <button>Delivery time and cost</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/pcb.jpg" alt="PCB" />

                  <div className="homeSwiper-image-desc">
                    <p>The world's largest selection of electronic component in stock for immediate shipment!</p>
                    <button>Delivery time and cost</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="company-services">
          <div className="companyService_Item">
            <h2>IMPORTING & DISTRIBUTING</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <p>We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. Our products are sourced from reputable manufactures and rigorously tested to ensure reliability, efficiency and safety</p>
              </div>
              <div className="companyService_image">
                <img src="/assets/pcb.jpg" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <button>Explore</button>
            </div>
          </div>
          <div className="companyService_Item">
            <h2>SERVICING & INSTALLATION</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <p>We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. Our products are sourced from reputable manufactures and rigorously tested to ensure reliability, efficiency and safety</p>
              </div>
              <div className="companyService_image">
                <img src="/assets/pcb.jpg" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <button>Explore</button>
            </div>
          </div>
          <div className="companyService_Item">
            <h2>RECYCLING OF MATERIALS</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <p>We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. Our products are sourced from reputable manufactures and rigorously tested to ensure reliability, efficiency and safety</p>
              </div>
              <div className="companyService_image">
                <img src="/assets/pcb.jpg" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <button>Explore</button>
            </div>
          </div>
        </div>

        <div className="home-details">
          <Details />
        </div>
      </div>
    </div>
  )
}

export default Home