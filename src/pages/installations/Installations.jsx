import { Link } from 'react-router-dom'
import { ProductAttributes } from '../../dummyData'
import './installations.css'
import { Search, Sort } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';

const Installations = () => {
  return (
    <div className="installation-container">
        <div className="installation-wrapper">
            <div className="installations-top">
                <h1>SERVICE</h1>
                <div className="installation-top-wrapper">
                    <div className="installation-top-left">
                        <h2>Zeal's Electrical Engineering Services & Systems</h2>
                    </div>

                    <div className="installation-top-right">
                        <p>Zeal's electrical engineering services team offers a comprehensive portfolio of services and solutions tailored for every stage of a power system’s life cycle. Our services integrate and optimize the elements of a power system to make sure it’s aligned with operational goals. Whether you’re a utility, industrial manufacturer, data center, hospital, government complex or in another market, we help keep your power system safe, cyber secure, efficient, reliable, and ready for IoT. </p>
                    </div>
                </div>
            </div>

            <div className="service-slogan-section">
                <div className="service-slogan-left">
                    <p>STRONGER</p>
                    <p>FUTURE</p>
                </div>

                <div className="service-slogan-right">
                    <p>At Eaton, we stand ready to support America's federal clean energy, stimulus and infrastructure initiatives and build a stronger future for our families and communities. These initiatives will fund major improvements to the nation's aging infrastructure, including grid resiliency, energy efficiency, clean water and safer transportation, while reducing negative impacts on our environment.</p>
                </div>
            </div>

            <div className="instalation-details">
                <div className="installlation-details-item">
                    <h2>PROFESSIONALS</h2>
                    <p>1500+ trained professionals in Tanzania</p>
                </div>
                <div className="installlation-details-item">
                    <h2>BROAD PORTFOLIO</h2>
                    <p>Electrical and electronics services</p>
                </div>
                <div className="installlation-details-item">
                    <h2>EXPERTISE</h2>
                    <p>All major manufacture's equipment</p>
                </div>
            </div>

            <div className="installations-services">
                <div className="installation_services_top">
                    <h2>37 <span>Results</span></h2>
                    <div className="services-sorts">
                        <p>Sort By</p>
                        <div className="service-sorts-format">
                            <p>Alpha: A to Z</p>
                            <Sort />
                        </div>
                    </div>
                </div>

                <div className="filters_small_screen">
                    <Accordion sx={{ boxShadow: "none", padding: 0, margin: 0, background: "transparent"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{margin: 0, p: 0, height: 3, minHeight: 35, background: "transparent"}}
                        >
                            <Typography sx={{m: 0, p: 0}}>
                                <div className="accordion-header small_accordion_filter">
                                    <p>Filters</p>
                                </div>
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                            sx={{p: 0, margin: 0, background: "transparent"}}
                        >
                            <Typography>
                                <div className="small-accordion-wrapper">
                                    <div className="installation-services-search small-accordion-search">
                                        <input type="text" placeholder='Search service' />
                                        <Search />
                                    </div>

                                    <div className="small-accordion_item">
                                        <h2>Service type</h2>
                                        <div className="accordion-wrapper">
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Consulting services</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Grid modernization</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Installation start-up</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>System design</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="small-accordion_item">
                                        <h2>Product category</h2>
                                        <div className="accordion-wrapper">
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Backup power, UPS</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Electrical circuit prtection</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Enclosures</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Power system</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="small-accordion_item">
                                        <h2>Markert</h2>
                                        <div className="accordion-wrapper">
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Buildings</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Data centers</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>Healthcare</p>
                                            </div>
                                            <div className="accordion-wrapper-item">
                                                <input type="checkbox" />
                                                <p>System design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="installation-services-wrapper">
                    <div className="installation-services_filters">
                        <h2>Filters</h2>
                        <p>Search within these values</p>
                        <div className="installation-services-search">
                            <input type="text" placeholder='Search service' />
                            <Search />
                        </div>
                        <div className="services-accordion">
                            <div className="service-accordion_item">
                                <Accordion sx={{ boxShadow: "none", padding: 0, margin: 0, background: "transparent"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{margin: 0, p: 0, height: 3, minHeight: 35, background: "transparent"}}
                                    >
                                        <Typography sx={{m: 0, p: 0}}>
                                            <div className="accordion-header">
                                                <p>Service type</p>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails
                                        sx={{p: 0, margin: 0, background: "transparent"}}
                                    >
                                        <Typography>
                                            <div className="accordion-wrapper">
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Consulting services</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Grid modernization</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Installation start-up</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>System design</p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="service-accordion_item">
                                <Accordion sx={{ boxShadow: "none", padding: 0, margin: 0, background: "transparent"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{margin: 0, p: 0, height: 3, minHeight: 35, background: "transparent"}}
                                    >
                                        <Typography sx={{m: 0, p: 0}}>
                                            <div className="accordion-header">
                                                <p>Product category</p>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails
                                        sx={{p: 0, margin: 0, background: "transparent"}}
                                    >
                                        <Typography>
                                            <div className="accordion-wrapper">
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Backup power, UPS</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Electrical circuit prtection</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Enclosures</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Power system</p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="service-accordion_item">
                                <Accordion sx={{ boxShadow: "none", padding: 0, margin: 0, background: "transparent"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{margin: 0, p: 0, height: 3, minHeight: 35, background: "transparent"}}
                                    >
                                        <Typography sx={{m: 0, p: 0}}>
                                            <div className="accordion-header">
                                                <p>Market</p>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails
                                        sx={{p: 0, margin: 0, background: "transparent"}}
                                    >
                                        <Typography>
                                            <div className="accordion-wrapper">
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Buildings</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Data centers</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>Healthcare</p>
                                                </div>
                                                <div className="accordion-wrapper-item">
                                                    <input type="checkbox" />
                                                    <p>System design</p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    <div className="installations-services-container">
                        {ProductAttributes.map((item) => (
                            <div className="installations-services-item" key={item.id}>
                                <Link to='/services-and-installations/sjfskjdfka094jdk' className='link-main'>
                                    <div className="installations-service-image">
                                        <img src='/assets/service.jpg' alt='SERVICE' />
                                    </div>
                                </Link>
                                <div className="installation-service-desc">
                                    <Link to='/services-and-installations/sjfskjdfka094jdk' className='link-main'>
                                        <h2>Electrical power distribution field services</h2>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Installations