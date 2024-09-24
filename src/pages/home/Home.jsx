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
              <h2>PRODUCTS</h2>
              <Link to='/products' className="top-link">
                <p>VIEW ALL</p>
              </Link>
            </div>
            
            <div className="home-products-list">
              <div className="homeLeft-Items">
                {NavigationLinks.map((link) => (
                  <div className="homeLeft-item" id={link.id}>
                    <Link to="/products" className="link-main">
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
                  <img src="/assets/shipment.jpg" className='swiper-background' alt="PCB" />

                  <div className="homeSwiper-zeal">
                    <img src='/assets/zeal-logo-1.png' alt="ZEAL LOGO" />
                   </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/shipment.jpg" className='swiper-background' alt="PCB" />

                  <div className="homeSwiper-image-desc">
                    <p><span>I</span>mporting and distributing quality electronic equipments to meet your demands!</p>
                    <Link to="/products">
                      <button>Explore products</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/electrical.jpg" className='swiper-background' alt="PCB" />

                  <div className="homeSwiper-image-desc swiper-services-desc">
                    <p><span>O</span>ffering full range of electrical services to keep your home and business powered up!</p>
                    <Link to='/services-and-installations'>
                      <button>Explore Services</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/machines.jpg" className='swiper-background' alt="PCB" />

                  <div className="homeSwiper-image-desc swiper-recycling-desc">
                    <p><span>C</span>ommitted to sustainable recycling solutions that reduce waste and protect our planet!</p>
                    <Link to='/recycling'>
                      <button>Explore recycling</button>
                    </Link>
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
                <ul>
                  <li>Power Distribution</li>
                  <li>Electrical Installation</li>
                  <li>Automation Equipments</li>
                  <li>Wiring and Cabling</li>
                  <li>Hardware and Fasteners</li>
                </ul>
              </div>
              <div className="companyService_image">
                <img src="/assets/import.png" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <Link to="/products">
                <button>Explore</button>
              </Link>
            </div>
          </div>
          <div className="companyService_Item">
            <h2>SERVICING & INSTALLATIONS</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <ul>
                  <li>System Design</li>
                  <li>System Installation</li>
                  <li>Ongoing Maintenance</li>
                  <li>Service Upgrades</li>
                  <li>System Inspection</li>
                </ul>
              </div>
              <div className="companyService_image">
                <img src="/assets/service-symbol.png" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <Link to="/services-and-installations">
                <button>Explore</button>
              </Link>
            </div>
          </div>
          <div className="companyService_Item">
            <h2>RECYCLING OF MATERIALS</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <ul>
                  <li>Material Collection</li>
                  <li>Sorting and Separation</li>
                  <li>Cleaning and Preparation</li>
                  <li>Processing and Refinement</li>
                  <li>Recycling and Distribution</li>
                </ul>
              </div>
              <div className="companyService_image">
                <img src="/assets/recycling-symbol.png" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <Link to="/recycling">
                <button>Explore</button>
              </Link>
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