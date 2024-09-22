import { useLocation, useNavigate } from 'react-router-dom';
import { AdditionalResources } from '../../dummyData'
import './product.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addProducts } from '../../redux/cartRedux';
import { addFavourite } from '../../redux/wishlistRedux';
import moment from 'moment';

const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const user = useSelector((state) => state.client.currentUser);
    const product = useSelector((state) => state.clientProducts.products.find((product) => product._id === productId));

    const handleCart = () => {
        user 
        ?
            dispatch(addProducts({...product, quantity}))
        :
            navigate('/login');
    }

    const handleWishlist = () => {
        user 
        ?
            dispatch(addFavourite({...product, quantity}))
        :
            navigate('/login');
    }

    const productAttribute = [
        {
            id: 1,
            item: "Category",
            description: `${product.type}`
        },
        {
            id: 2,
            item: "Manufacturer",
            description: `${product.brand} company`
        },
        {
            id: 3,
            item: "Series",
            description: `-`
        },
        {
            id: 4,
            item: "Packaging",
            description: `Bulk`
        },
        {
            id:5,
            item: "Part",
            description: "Active",
        },
        {
            id:6,
            item: "Rating",
            description: `${product.rating || 4.5}`,
        },
    ]

  return (
    <div className="product-container">
        <div className="product-wrapper">
            <div className="product-left">
                <div className="product-information">
                    <div className="product-name">
                        <h2>{product.title}</h2>
                    </div>
                    <div className="productInfo-container">
                        <div className="productInfo-left">
                            <img src={product.img} alt='CB' />
                        </div>

                        <div className="productInfo-right">
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Zeal Part Number</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p>{product._id}</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Manufactures</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p className='link-blue'>{product.brand}</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Product price</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p>Tsh, {product.price}</p>
                                </div>
                            </div>
                            <div className="productInfo-details">
                                <div className="productInfo-item">
                                    <p>Published</p>
                                </div>
                                <div className="productInfo-item-left">
                                    <p>{moment(product.createdAt).fromNow()}</p>
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

                <div className="product-attributes">
                    <h3>Product description</h3>
                    <div className="productDesc">
                        <p>{product.desc}</p>
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
                            <input type="number" defaultValue={"1"} onChange={(e) => setQuantity(e.target.value)} />

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
                            <button onClick={() => handleWishlist()}>Add to List</button>
                            <button onClick={() => handleCart()}>Add to Cart</button>
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
                        {productAttribute.map((attribute) => (
                            <div className="productAttribute-item" key={attribute.id}>
                                <div className="productAttribute-item-1">
                                    <p>{attribute.item}</p>
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
                        <input type="number" defaultValue={"1"} onChange={(e) => setQuantity(e.target.value)} />

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
                            <h3>Tsh. {product.price}</h3>
                        </div>
                    </div>
                    <div className="productCart-buttons">
                        <button onClick={() => handleWishlist()}>Add to List</button>
                        <button onClick={() => handleCart()}>Add to Cart</button>
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