import './details.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Details = () => {
  return (
    <div className="details_container">
        <div className="featured_Products">
            <h2>FEATURED PRODUCTS</h2>
            <div className="featuredProducts_Item">
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 2,
                        },
                        1000: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 4,
                        },
                    }}
                    cssMode={true}
                    navigation={true}
                    pagination={false}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider-container">
                            <Link to='/productsa' className='link-main'>
                                <div className="slider-name">
                                    <p>SIEMENS-S7-1500</p>
                                    <p>SIEMENS</p>
                                </div>
                                <div className="slider-image">
                                    <img src='/assets/siemens-plc.png' alt='CB' />
                                </div>
                                <div className="slider-product-desc">
                                    <p>It delivers high-speed processing with up to 1 ns per instruction and supports seamless connectivity through PROFINET and PROFIBUS protocols. Its modular design allows for flexible expansion, while integrated safety, security, and motion control ensure robust and versatile automation solutions</p>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/productsa' className='link-main'>
                            <div className="slider-container">
                                <div className="slider-name">
                                    <p>NXP IoT Microntroller</p>
                                    <p>NXP</p>
                                </div>
                                <div className="slider-image">
                                    <img src='/assets/nxp-chip.png' alt='CB' />
                                </div>
                                <div className="slider-product-desc">
                                    <p>The MCX portfolio is a comprehensive selection of Arm® Cortex®-M based MCUs, offering expanded scalability with breakthrough product capabilities, simplified system design and a developer-focused experience through our MCUXpresso suite of software and tools.</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/productsa' className='link-main'>
                            <div className="slider-container">
                                <div className="slider-name">
                                    <p>PREDATOR Inverter Generator</p>
                                    <p>Harbor Freight Tools</p>
                                </div>
                                <div className="slider-image">
                                    <img src='/assets/predator.png' alt='CB' />
                                </div>
                                <div className="slider-product-desc">
                                    <p>The PREDATOR® 5000 Watt Inverter Generator has dual-fuel capability to run on gasoline or propane. This generator is ideal for RVs, home backup, and more</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/productsa' className='link-main'>
                            <div className="slider-container">
                                <div className="slider-name">
                                    <p>TeSys IEC Contactor</p>
                                    <p>Schneider Electric</p>
                                </div>
                                <div className="slider-image">
                                    <img src='/assets/contactor.png' alt='CB' />
                                </div>
                                <div className="slider-product-desc">
                                    <p>The Schneider Electric TeSys IEC Contactor is a high-performance, reliable contactor designed for control and protection of electrical motors and other loads in industrial and commercial applications. </p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/productsa' className='link-main'>
                            <div className="slider-container">
                                <Link to='/product/8iureajkdhdjfdfa' className='link-main'>
                                    <div className="slider-name">
                                        <p>SIEMENS-S7-1500</p>
                                        <p>SIEMENS</p>
                                    </div>
                                    <div className="slider-image">
                                        <img src='/assets/siemens-plc.png' alt='CB' />
                                    </div>
                                    <div className="slider-product-desc">
                                        <p>It delivers high-speed processing with up to 1 ns per instruction and supports seamless connectivity through PROFINET and PROFIBUS protocols. Its modular design allows for flexible expansion, while integrated safety, security, and motion control ensure robust and versatile automation solutions</p>
                                    </div>
                                </Link>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/productsa' className='link-main'>
                            <div className="slider-container">
                                <div className="slider-name">
                                    <p>NXP IoT Microntroller</p>
                                    <p>NXP</p>
                                </div>
                                <div className="slider-image">
                                    <img src='/assets/nxp-chip.png' alt='CB' />
                                </div>
                                <div className="slider-product-desc">
                                    <p>The MCX portfolio is a comprehensive selection of Arm® Cortex®-M based MCUs, offering expanded scalability with breakthrough product capabilities, simplified system design and a developer-focused experience through our MCUXpresso suite of software and tools.</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/productsa' className='link-main'>
                            <div className="slider-container">
                                <div className="slider-name">
                                    <p>PREDATOR Inverter Generator</p>
                                    <p>Harbor Freight Tools</p>
                                </div>
                                <div className="slider-image">
                                    <img src='/assets/predator.png' alt='CB' />
                                </div>
                                <div className="slider-product-desc">
                                    <p>The PREDATOR® 5000 Watt Inverter Generator has dual-fuel capability to run on gasoline or propane. This generator is ideal for RVs, home backup, and more</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/productsa' className='link-main'>
                            <div className="slider-container">
                                <div className="slider-name">
                                    <p>TeSys IEC Contactor</p>
                                    <p>Schneider Electric</p>
                                </div>
                                <div className="slider-image">
                                    <img src='/assets/contactor.png' alt='CB' />
                                </div>
                                <div className="slider-product-desc">
                                    <p>The Schneider Electric TeSys IEC Contactor is a high-performance, reliable contactor designed for control and protection of electrical motors and other loads in industrial and commercial applications. </p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className="featured_Products featured_brands">
            <h2>FEARURED BRANDS</h2>
            <div className="featured-brands-container">
                <Swiper
                    spaceBetween={window.innerWidth >= 731 ? 20 : 10}
                    breakpoints={{
                        320: {
                          slidesPerView: 3,
                        },
                        640: {
                          slidesPerView: 4,
                        },
                        1000: {
                          slidesPerView: 6,
                        },
                        1024: {
                          slidesPerView: 6,
                        },
                    }}
                    cssMode={true}
                    navigation={false}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/schneider-electric.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/ABB.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/siemens-logo.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/mitshubishi.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/solarcity.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/legrand.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/general-electric.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/NXP.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/schneider-electric.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/ABB.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/siemens-logo.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/mitshubishi.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/solarcity.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/legrand.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/general-electric.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-brand-wrapper">
                            <img src='/assets/brands/NXP.png' alt='Schneider-electric' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className="our_business">
            <div className="ourBusiness-left">
                <h2>Our Business</h2>
                <div className="ourBusiness-description">
                    <p>Our Business at ZEAL focuses on providing comprehensive solutions in the electrical industry, specializing in the import, export, and distribution of high-quality electrical equipment and tools.</p>
                    <p>Our vision is to lead the market in electrical solutions, driven by a commitment to excellence and sustainability. Our mission is to empower our clients by offering cutting-edge products and unmatched service, while fostering a culture of continuous improvement and environmental responsibility</p>
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