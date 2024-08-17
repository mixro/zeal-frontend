import './details.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Details = () => {
  return (
    <div className="details_container">
        <div className="featured_Products">
            <h2>FEATURED PRODUCTS</h2>
            <div className="featuredProducts_Item">
                <Swiper
                    slidesPerView={window.innerWidth >= 731 ? 4 : 1}
                    spaceBetween={30}
                    cssMode={true}
                    navigation={true}
                    pagination={false}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>Circuit breaker</p>
                                <p>Siemens</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/vfd.png' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>1812/1812R Series Inductors</p>
                                <p>Rexnord</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/cb.jpg' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>IoT Microntroller</p>
                                <p>NXP</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/pcb.jpg' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>Circuit breaker</p>
                                <p>Siemens</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/vfd.png' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>1812/1812R Series Inductors</p>
                                <p>Rexnord</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/cb.jpg' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>IoT Microntroller</p>
                                <p>NXP</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/pcb.jpg' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>Circuit breaker</p>
                                <p>Siemens</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/vfd.png' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>1812/1812R Series Inductors</p>
                                <p>Rexnord</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/cb.jpg' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container">
                            <div className="slider-name">
                                <p>IoT Microntroller</p>
                                <p>NXP</p>
                            </div>
                            <div className="slider-image">
                                <img src='/assets/pcb.jpg' alt='CB' />
                            </div>
                            <div className="slider-product-desc">
                                <p>Delevan's 1812 and 1812R series surface-mount inductors stand as a testament to unparalled performance in high-frequency and high-reliability applications</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        {/* <div className="featured_Services">
            <div className="featuredService_Item">
                <div className="featuredService-image">
                    <img src='/assets/pcb.jpg' alt='SERVICE' />
                </div>
            </div>
        </div>  */}

        <div className="our_business">
            <div className="ourBusiness-left">
                <h2>Our Business</h2>
                <div className="ourBusiness-description">
                    <p>We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. </p>
                    <p>We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. Our products are sourced from reputable manufactures and rigorously tested to ensure reliability, efficiency and safety</p>
                </div>
                <div className="ourBusiness_button">
                    <button>MORE</button>
                </div>
            </div>

            <div className="ourBusiness-right"></div>
        </div>
    </div>
  )
}

export default Details