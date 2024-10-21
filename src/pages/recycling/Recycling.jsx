import { RecyclingStats } from '../../dummyData'
import './recycling.css'

const Recycling = () => {
  return (
    <div className="recycling-container">
        <div className="recycling-wrapper">
            <div className="recycling-top">
                <div className="recycling-top-left">
                    <h2>Optimizing Advanced recycling technology</h2>
                    <p>Our commitment to sustainability drives us to use the latest recycling technologies, enabling the effective separation, purification, and repurposing of diverse materials. We optimize every step of the recycling process to contribute to a cleaner, greener future.</p>
                    <p>To dispose of waste, you can either call us or visit a collection point near you.</p>
                    <div className="recycling-buttons">
                        <button>
                            <a href="tel: +255692897243" className='link-main'>CALL US</a>
                        </button>
                        <button>VIEW COLLECTION POINTS</button>
                    </div>
                </div>

                <div className="recycling-top-right">
                    <div className="recycling-image">
                        <img src="/assets/recycling.png" alt="RECYCLING" />
                    </div>
                </div>
            </div>

            <div className="recycling-stats">
                <h1>RECYCLING STATISTICS</h1>
                <div className="recycling-statistics-container">
                    <div className="recycling-stats-left">
                        {RecyclingStats.map((stat) => (
                            <div className="recycling-stats-item" key={stat.id}>
                                <p>{stat.header}</p>
                                <p>{stat.number} <span>tons</span></p>
                            </div>
                        ))}
                    </div>

                    <div className="recycling-stats-right">
                        <img src="/assets/chart.png" alt="CHART" />
                    </div>
                </div>
            </div>

            <div className="recycling-collection">
                <div className="recycling-collection-left">
                    <div className="recycling-collection-image">
                        <img src="/assets/collecting.jpg" alt="COLLECTING" />
                    </div>
                </div>

                <div className="recycling-collection-right">
                    <h2>Waste collection <br /> made easy</h2>
                    <h2>Waste collection made easy</h2>
                    <p>At ZEAL ENERGY SYSTEMS AND RECYCLES, we make waste collection simple and efficient. Our dedicated team provides reliable waste collection services tailored to your needs. Whether you're disposing of household items, industrial materials, or electronic waste, we ensure safe and eco-friendly handling. You can schedule a pickup or drop off your waste at one of our conveniently located collection points. We're committed to keeping your environment clean while promoting sustainable recycling practices</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recycling