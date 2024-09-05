import { Delete } from '@mui/icons-material'
import './cart.css'

const Cart = () => {
  return (
    <div className="cart-container">
        <h1>YOUR CART</h1>
        <div className="cart-wrapper">
            <div className="cart-left">
                <div className="cart-item">
                    <div className="cart-item-left">
                        <div className="cart-product-image">
                            <img src='/assets/cb.jpg' alt='CB' />
                        </div>
                    </div>
                    <div className="cart-item-right">
                        <p><span>Product:</span> Siemens circuit breaker</p>
                        <p><span>Brand:</span> Siemens</p>
                        <p><span>Category:</span> Automation</p>
                        <h2>$8500</h2>
                        <p><span>Quantity:</span> 12</p>                        
                        <div className="cart-delete-button">
                            <Delete />
                        </div>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-left">
                        <div className="cart-product-image">
                            <img src='/assets/cb.jpg' alt='CB' />
                        </div>
                    </div>
                    <div className="cart-item-right">
                        <p><span>Product:</span> Siemens circuit breaker</p>
                        <p><span>Brand:</span> Siemens</p>
                        <p><span>Category:</span> Automation</p>
                        <h2>$8500</h2>
                        <p><span>Quantity:</span> 12</p>                        
                        <div className="cart-delete-button">
                            <Delete />
                        </div>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-left">
                        <div className="cart-product-image">
                            <img src='/assets/cb.jpg' alt='CB' />
                        </div>
                    </div>
                    <div className="cart-item-right">
                        <p><span>Product:</span> Siemens circuit breaker</p>
                        <p><span>Brand:</span> Siemens</p>
                        <p><span>Category:</span> Automation</p>
                        <h2>$8500</h2>
                        <p><span>Quantity:</span> 12</p>                        
                        <div className="cart-delete-button">
                            <Delete />
                        </div>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-left">
                        <div className="cart-product-image">
                            <img src='/assets/cb.jpg' alt='CB' />
                        </div>
                    </div>
                    <div className="cart-item-right">
                        <p><span>Product:</span> Siemens circuit breaker</p>
                        <p><span>Brand:</span> Siemens</p>
                        <p><span>Category:</span> Automation</p>
                        <h2>$8500</h2>
                        <p><span>Quantity:</span> 12</p>                        
                        <div className="cart-delete-button">
                            <Delete />
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-right">
                <div className="cart-right-container">
                    <h3>ORDER SUMMARY</h3>
                    <div className="cart-right-item">
                        <p>Total products</p>
                        <p>23</p>
                    </div>
                    <div className="cart-right-item">
                        <p>Subtotal</p>
                        <p>$ 390,590</p>
                    </div>
                    <div className="cart-right-item">
                        <p>Estimated shipping</p>
                        <p>free</p>
                    </div>
                    <div className="cart-right-item">
                        <p>Estimated tax</p>
                        <p>free</p>
                    </div>
                    <div className="cart-right-item">
                        <p>Total</p>
                        <p>Tsh. 390,590</p>
                    </div>
                    <div className="cart-button">
                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart