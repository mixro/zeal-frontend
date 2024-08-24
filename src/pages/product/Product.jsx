import { AdditionalResources, ProductAttributes } from '../../dummyData'
import './product.css'

const Product = () => {
  return (
    <div className="product-container">
        <div className="product-wrapper">
            <div className="product-left">
                <div className="product-information">
                    <div className="product-name">
                        <h2>AESEB1S</h2>
                    </div>
                    <div className="productInfo-container">
                        <div className="productInfo-left">
                            <img src='/assets/cb.jpg' alt='CB' />
                        </div>

                        <div className="productInfo-right">
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Zeal Part Number</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p>1742-AESEB</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Manufactures</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p className='link-blue'>Klein Tools, Inc</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Manufactures Product No:</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p>124556</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Standard Lead Time</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p>2 weeks</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Description</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p>SITUATIONAL AWARE</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Datasheet</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p className='link-blue'>datasheet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-small-screen">
                    <div className="product-cart">
                        <div className="productCart-top">
                            <h3>0 In Stock</h3>
                            <p className="link-blue">Check lead time</p>
                            <p className='link-blue'>Request Stock Notification</p>
                        </div>
                        <div className="productCart-quantity">
                            <p>QUANTITY</p>
                            <input type="number" defaultValue={"1"} />

                            <div className="productCart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>PACKAGING</th>
                                            <th>QUANTITY</th>
                                            <th>UNIT PRICE</th>
                                            <th>EXT PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bulk</td>
                                            <td>3</td>
                                            <td>$155.88</td>
                                            <td>$467.64</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="productCart-total">
                                <h3>$467.64</h3>
                            </div>
                        </div>
                        <div className="productCart-buttons">
                            <button>Add to List</button>
                            <button>Add to Cart</button>
                        </div>
                        <div className="productCart-packaging">
                            <div className="productPackaging-header">
                                <p>Bulk</p>
                            </div>
                            <table cellspacing="0" cellpadding="5">
                                <thead>
                                    <tr>
                                        <th>QUANTITY</th>
                                        <th>UNIT PRICE</th>
                                        <th>EXT PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>$155.88000</td>
                                        <td>$155.88</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>$149.99100</td>
                                        <td>$1,499.91</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{fontWeight: "bold"}}>Manufactures Standard Package</p>
                        </div>
                    </div>
                </div>

                <div className="product-attributes">
                    <h3>Product Attributes</h3>
                    <div className="product-attributes-container">
                        <div className="productAttribute-item">
                            <div className="productAttribute-item-1 bold">
                                <p>TYPE</p>
                            </div>

                            <div className="productAttribute-item-2 bold">
                                <p>DESCRIPTION</p>
                            </div>

                            <div className="productAttribute-item-3 bold">
                                <p>SELECT ALL</p> 
                                <input type="checkbox" />
                            </div>
                        </div>
                        {ProductAttributes.map((attribute) => (
                            <div className="productAttribute-item" key={attribute.id}>
                                <div className="productAttribute-item-1">
                                    <p>{attribute.type}</p>
                                </div>

                                <div className="productAttribute-item-2">
                                    <p>{attribute.description}</p>
                                </div>

                                <div className="productAttribute-item-3">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="product-attributes">
                    <h3>Additional Resources</h3>
                    <div className="product-attributes-container">
                        <div className="productAttribute-item">
                            <div className="productAttribute-item-1 bold">
                                <p>ATTRIBUTE</p>
                            </div>

                            <div className="productAttribute-item-2 bold">
                                <p>DESCRIPTION</p>
                            </div>
                        </div>
                        {AdditionalResources.map((resource) => (
                            <div className="productAttribute-item" key={resource.id}>
                                <div className="productAttribute-item-1">
                                    <p>{resource.type}</p>
                                </div>

                                <div className="productAttribute-item-2">
                                    <p>{resource.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="product-right">
                <div className="product-cart">
                    <div className="productCart-top">
                        <h3>0 In Stock</h3>
                        <p className="link-blue">Check lead time</p>
                        <p className='link-blue'>Request Stock Notification</p>
                    </div>
                    <div className="productCart-quantity">
                        <p>QUANTITY</p>
                        <input type="number" defaultValue={"1"} />

                        <div className="productCart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>PACKAGING</th>
                                        <th>QUANTITY</th>
                                        <th>UNIT PRICE</th>
                                        <th>EXT PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bulk</td>
                                        <td>3</td>
                                        <td>$155.88</td>
                                        <td>$467.64</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="productCart-total">
                            <h3>$467.64</h3>
                        </div>
                    </div>
                    <div className="productCart-buttons">
                        <button>Add to List</button>
                        <button>Add to Cart</button>
                    </div>
                    <div className="productCart-packaging">
                        <div className="productPackaging-header">
                            <p>Bulk</p>
                        </div>
                        <table cellspacing="0" cellpadding="5">
                            <thead>
                                <tr>
                                    <th>QUANTITY</th>
                                    <th>UNIT PRICE</th>
                                    <th>EXT PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>$155.88000</td>
                                    <td>$155.88</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>$149.99100</td>
                                    <td>$1,499.91</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{fontWeight: "bold"}}>Manufactures Standard Package</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product