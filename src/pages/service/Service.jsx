import { useLocation } from 'react-router-dom';
import './service.css'
import { useSelector } from 'react-redux';

const Service = () => {
  const location = useLocation();
  const serviceId = location.pathname.split("/")[2];
  const service = useSelector((state) => state.clientServices.services.find((service) => service._id === serviceId));

  return (
    <div className="service-container">
      <div className="service-wrapper">
        <h1>SERVICE</h1>
        <div className="service-top">
          <div className="service-left">
            <div className="service-left-top">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
            <div className="service-left-buttons">
              <button>Contact us</button>
              <button>Locate a service office</button>
            </div>
            <div className="service-left-bottom">
              <p>Learn about preventive maintanance</p>
              <p>Preventive maintanance brochure</p>
            </div>
          </div>

          <div className="service-right">
            <h2>{service.title}</h2>
            <div className="service-right-image">
              <img src={service.img} alt="SERVICE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service