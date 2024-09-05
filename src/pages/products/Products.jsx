import { Search } from '@mui/icons-material'
import './products.css'
import { Link } from 'react-router-dom'
import { RecyclingStats } from '../../dummyData'

const Products = () => {
  return (
    <div className="products_container">
        <div className="productsWrapper">
            <div className="products-left">
                <div className="productsLeft_container">
                    <div className="products_search">
                        <input 
                            type="text" 
                            placeholder='Search product' 
                        />
                        <div className="productSearch_Icon">
                            <Search />
                        </div>
                    </div>
                    
                    <div className="products-filters products-categories">
                        <h2>Categories</h2>
                        <div className="products-category-item">
                            <p>Automation</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>Motion control</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>Power system</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>Control systems</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>Power transmission</p>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className="products-filters products-categories">
                        <h2>Brands</h2>
                        <div className="products-category-item">
                            <p>SIEMENS</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>CH!NT</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>Legrand</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>General Electric</p>
                            <input type="checkbox" />
                        </div>
                        <div className="products-category-item">
                            <p>ABB</p>
                            <input type="checkbox" />
                        </div>
                    </div>

                    {/* <div className="products-filters">
                        <h2>Filters</h2>
                        <div className="products-filter">
                            <p>Availability</p>
                        </div>
                        <div className="products-filter">
                            <p>Availability</p>
                        </div>
                        <div className="products-filter">
                            <p>Availability</p>
                        </div>
                        <div className="products-filter">
                            <p>Availability</p>
                        </div>
                        <div className="products-filter">
                            <p>Availability</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="products-right">
                <div className="productsRight_top">
                    <h2>Products</h2>
                    <div className="products-small-wrapper">
                        <div className="products_search_results">
                            <div className="products-small-search">
                                <input type="text" placeholder='Search products' />
                                <Search sx={{fontSize: 25}} />
                            </div>
                            <p>Results: <span>123</span></p>
                        </div>
                        <div className="products-small-filters">
                            <p>Filters:</p>
                            <div className="products-filters-switch">
                                <p>Stacked</p>
                                <p>Scrolling</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products-results">
                    {RecyclingStats.map((stat) => (
                        <div className="products-item" key={stat.id}>
                            <div className="productsItem-left">
                                <h2>VJ Fiberglass Enclosures</h2>
                                <div className="productsItem-details">
                                    <p>Publish Date 2024-08-16</p>
                                    <p>We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. Our products are sourced from reputable manufactures and rigorously tested to ensure reliability, efficiency and safety</p>
                                </div>
                                <div className="productsReaction_buttons">
                                    <Link to='/product/12398hsdfnmsf984sf' className='link-main'>
                                        <button>View Product</button>
                                    </Link>
                                    <button>Brand</button>
                                </div>
                            </div>
                            <div className="productsItem-right">
                                <div className="productsItem-name">
                                    <h2>VJ Fiberglass Enclosures</h2>
                                    <p>SHINT ELECTRIC</p>
                                </div>
                                <Link to='/product/12398hsdfnmsf984sf' className='link-main'>
                                    <img src="/assets/cb.jpg" alt="CB" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products