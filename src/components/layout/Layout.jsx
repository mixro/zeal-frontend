import Footer from '../footer/Footer';
import Topbar from '../topbar/Topbar';
import './layout.css';

const Layout = ({children}) => {
  return (
    <div className="layout-component">
        <div className="layoutContainer">
            <div className="topbar">
                <Topbar />
            </div>

            <div className="main-body">
                {children}
            </div>
            
            <div className="footer">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Layout