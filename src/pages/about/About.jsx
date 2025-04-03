import "./about.css"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-top general-header">
          <h2>ABOUT US</h2>
          <p>ZEAL ENERGY SYSTEMS AND RECYCLES is a forward-thinking company specializing in the import, export, installation, and servicing of electrical equipment, along with advanced recycling solutions. Committed to sustainability and innovation, we provide high-quality electrical solutions while promoting eco-friendly practices through efficient material recycling. Our dedication to excellence, reliability, and technological advancement ensures that we meet the evolving needs of industries and communities, driving a cleaner and more energy-efficient future.</p>
        </div>

        <div className="about-middle">
          <h3>OUR MISSION</h3>
          <p>To provide top-quality electrical solutions and sustainable recycling services that enhance efficiency, safety, and environmental responsibility. We are committed to delivering innovative technologies, exceptional service, and eco-friendly practices to support industries, businesses, and communities in building a more sustainable and energy-efficient future.</p>

          <h3>OUR VISION</h3>
          <p>To be a leading force in the electrical industry and recycling sector, recognized for our innovation, reliability, and commitment to sustainability. We aim to set new benchmarks in energy solutions and eco-friendly practices, driving progress and creating a cleaner, more efficient future for businesses and communities.</p>        
          </div>

        {/*<div className="about-team">
          <div className="about-team-top">
            <h2>OUR STAFF</h2>
            <p>Our team at Tang Tech consists of highly skilled engineers, technicians, and industry experts committed to delivering excellence in electrical and ICT solutions. Below are some of the key members of our team;</p>
          </div>
          <div className="about-team-container">
            {TeamMembers.map((member) => (
              <div className="about-team-item" key={member.id}>
                <div className="about-item-left">
                  <img src='/assets/profile.png' alt='PRF' />
                </div>
                <div className="about-team-right">
                  <p>{member.name}</p>
                  <p><span>Position:</span> {member.position}</p>
                  <p><span>Qualification:</span> {member.qualification}</p>
                </div>
              </div>
            ))}
          </div> 
        </div>*/}
      </div>
    </div>
  )
}

export default About