import { Link } from "react-router-dom"
import "./footer.css"
import { HelpLinks, InformationLinks } from "../../dummyData"
import { Email, Facebook, Instagram, LinkedIn, Phone, WhatsApp, X, YouTube } from "@mui/icons-material"

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footerTop_left">
          <div className="footerTop_Item">
            <h2>INFORMATION</h2>
            <div className="footerTop_Links">
              {InformationLinks.map((link) => (
                <div className="footerLinks_div" key={link.id}>
                  <Link to="" className="link-main">
                    <p>{link.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="footerTop_Item">
            <h2>HELP</h2>
            <div className="footerTop_Links">
              {HelpLinks.map((link) => (
                <div className="footerLinks_div" key={link.id}>
                  <Link to="" className="link-main">
                    <p>{link.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="footerTop_Item">
            <h2>CONTACT US</h2>
            <div className="footerTop_Links">
              <div className="footerLinks-icon">
                <Phone />
                <a href='tel: +255692897243' className='link-main'>
                  <p>+255692897243</p>
                </a>
              </div>
              <div className="footerLinks-icon">
                <WhatsApp />
                <p>+255692897243</p>
              </div>
              <div className="footerLinks-icon">
                <Email />
                <a href='mailto:zeal@zeal.co.tz' className='link-main'>
                  <p>zeal@zeal.co.tz</p>  
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footerTop_right">
          <div className="footerRight-div">
            <h2>FOLLOW US</h2>

            <div className="footerRight_Icons">
              <div className="footerRight_icon">
                <Facebook sx={{fontSize: 30}} />
              </div>
              <div className="footerRight_icon">
                <X sx={{fontSize: 30}} />
              </div>
              <div className="footerRight_icon">
                <YouTube sx={{fontSize: 30}} />
              </div>
              <div className="footerRight_icon">
                <Instagram sx={{fontSize: 30}} />
              </div>
              <div className="footerRight_icon">
                <LinkedIn sx={{fontSize: 30}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p><span>Copyright ©2024</span>, Zeal Energy Systems and Recyclers</p>
        <p>Local Support: Dar es Salaaam, TZ</p>
      </div>
    </div>
  )
}

export default Footer