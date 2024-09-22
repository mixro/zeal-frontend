import './orders.css'
import moment from 'moment';
import { useEffect } from 'react';
import { getOrders } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Orders = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.client.currentUser);
    const orders = useSelector((state) => state.clientOrders.orders);
    const userId = user?._id;

    useEffect(() => {
        getOrders(dispatch,userId);
    }, [ dispatch, userId ]);

  return (
    <div className="orders-container">
        {user
            ?
            <>
                <div className="orders-top">
                    <h1>Orders History</h1>
                    <p>Orders</p>
                </div>
                <div className="orders-wrapper">
                    {orders
                        .slice() 
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) 
                        .map((order) => (
                            <div className="orders-item" key={order._id}>
                                <div className="orders-item-top">
                                    <p>{order.status}</p>
                                </div>
                                <div className="orders-item-container">
                                    <div className="orders-item-left">
                                        <div className="orders-left-item">
                                            <div className="orders-item-image">
                                                <img src={order.products[0].img} alt="" />
                                            </div>
                                            <div className="orders-item-details">
                                                <h2>Created: {moment(order.createdAt).fromNow()}</h2>
                                                <div className="orders-details-item">
                                                    <p>Products:</p>
                                                    <p>{order.products.length}</p>
                                                </div>
                                                <div className="orders-details-item">
                                                    <p>Amount:</p>
                                                    <p>Tsh. {order.amount}</p>
                                                </div>
                                                <div className="orders-details-item">
                                                    <p>Name:</p>
                                                    <p>{order.name}</p>
                                                </div>
                                                <div className="orders-details-item">
                                                    <p>Email:</p>
                                                    <p>{order.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="orders-item-right">
                                        <div className="orders-item-button">
                                            <p>Trace Order</p>
                                        </div>
                                        <div className="orders-item-button">
                                            <p>Get invoice</p>
                                        </div>
                                        <div className="orders-item-button button-border">
                                            <p>Edit order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
            :
            <div className="noUser">
                <div className="noUserButtons">
                    <div className="noUserButton">
                        <Link to="/login" className='link-main'>
                            <button>Login</button>
                        </Link>
                    </div>
                    <div className="noUserButton">
                        <Link to="/register" className='link-main'>
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
                <div className="loginText">
                    <p>Register or Log In to view orders</p> 
                </div>
            </div>
        }
    </div>
  )
}

export default Orders