import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from './NavBar';
import '../assets/images/dress.png';
import '../assets/images/iphone.png';
import { removeFromCart, updateCartItem } from '../actions/cart';
import { addToWishlist } from '../actions/wishlist';


class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.setQuantity = this.setQuantity.bind(this);
    }

    componentDidMount() {
        console.log(this.props.cart);
    }

    setQuantity(e, pid) {
        const quantity = e.target.value;

        this.props.updateCartItem(pid, { quantity });
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="jumbotron">
                    <div className="container cart-page-container">
                        <div className="cart-item-background">
                            <h3>Cart ({this.props.cart.length} Items)</h3>
                            <div className="cart-item-contents">
                                <div className="cart-header">
                                    <b className="text-muted item">ITEM</b>
                                    <b className="text-muted cart-title quantity">QUANTITY</b>
                                    <b className="text-muted cart-title price">UNIT PRICE</b>
                                    <b className="text-muted cart-title total">SUBTOTAL</b>
                                </div>
                                {
                                    this.props.cart.map((item, i) => {
                                        return (
                                            <div
                                                className="cart-item"
                                                key={i}
                                            >
                                                <div className="cart-details">
                                                    <div className="cart-img-item">
                                                        <img src="dress.png" alt="cart Iphone" className="cart-image" />
                                                    </div>
                                                    <div className="cart-item-details">
                                                        <small className="text-muted">Seller: {item.seller}</small>
                                                        <p className="cart-text"><small>{item.description}</small></p>
                                                        <div className="cart-action-btn">
                                                            <small
                                                                className="cart-action add-to-wishlist"
                                                                onClick={() => this.props.addToWishlist(item)}
                                                            ><i className="far fa-heart"></i>MOVE TO WISHLIST</small>
                                                            <small
                                                                className="cart-action remove-from-cart"
                                                                onClick={() => this.props.removeFromCart(item.pid)}
                                                            ><i className="fas fa-trash-alt"></i>REMOVE</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item-qty qty-border">
                                                    <select onChange={(e) => this.setQuantity(e, item.pid)} value={item.quantity}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                    </select>
                                                </div>
                                                <div className="cart-unit-price price-border">
                                                    <p className="cart-new-price">{item.newPrice}</p>
                                                    <p className="cart-old-price text-muted"><strike>{item.oldPrice}</strike></p>
                                                    <small className="text-success">Saving: {item.saving}</small>
                                                </div>
                                                <div className="cart-subtotal">
                                                    <b>{item.newPrice*item.quantity}</b>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <div className="cart-cumulative">
                                    <div className="cart-total-info cart-subtotal-vat">
                                        <div className="subtotal-background">
                                            <span className="subtotal font-weight-bold">Subtotal:</span>
                                            <span>KSH 22,000</span>
                                        </div>
                                        <div className="subtotal-background">
                                            <span className="text-muted font-weight-bold vat">VAT:</span>
                                            <span>KSH 0</span>
                                        </div>
                                    </div>
                                    <div className="cart-total-info cart-total-shipping">
                                        <div className="subtotal-background">
                                            <span className="subtotal font-weight-bold">Total:</span>
                                            <span className="subtotal-value">KSH 22,000</span>
                                        </div>
                                        <span className="text-muted cart-shipping-info">Shipping fees not included yet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-checkout-action">
                        <div className="cart-checkout-action__background container">
                            <NavLink
                                to="/"
                            >
                                <button type="button" className="btn btn-lg action-btn-cart continue-shopping">CONTINUE SHOPPING</button>
                            </NavLink>
                            <NavLink
                                to="/checkout"
                                className="checkout-link"
                            >
                                <button type="button" className="btn btn-warning btn-lg action-btn-cart">PROCEED TO CHECKOUT</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    cart: state.cart.cart
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (pid) => dispatch(removeFromCart(pid)),
    addToWishlist: (item) => dispatch(addToWishlist(item)),
    updateCartItem: (pid, updates) => dispatch(updateCartItem(pid, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

