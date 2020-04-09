import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../components/NavBar';
import '../assets/images/dress.png';
import '../assets/images/iphone.png';
import { removeFromCart, updateCartItem } from '../actions/cart';
import { addToWishlist } from '../actions/wishlist';
import Scroll from '../components/Scroll';


class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.setQuantity = this.setQuantity.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.minusQuantity = this.minusQuantity.bind(this);        

        this.state = {
            vat: 0,
        }
    }

    componentDidMount() {
        console.log(this.props.cart);
    }

    setQuantity(e, pid) {
        const quantity = e.target.value;

        this.props.updateCartItem(pid, { quantity });
    }

    // If quantity increases available pieces decrease
    addQuantity(e, pid) {
        const target = e.target.previousSibling.textContent;
        const quantity = parseInt(target);
        const addPiece = quantity + 1;
        const availablePieces = this.props.product.pieces;

        const newQuantity = addPiece > availablePieces ? quantity : addPiece;
        this.props.updateCartItem(pid, { quantity: newQuantity })
        e.target.previousSibling.textContent = newQuantity;
    }

    // If quantity decreases available pieces increase
    minusQuantity(e, pid) {
        const target = e.target.nextSibling.textContent;
        const quantity = parseInt(target);
        const minusPiece = quantity - 1;

        const newQuantity = minusPiece < 1 ? 1 : minusPiece;
        this.props.updateCartItem(pid, { quantity: newQuantity })
        e.target.nextSibling.textContent = newQuantity;
    }

    setCurrency(price) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'KES'
        });
        return formatter.format(price);
    }

    setSubTotal() {
        let total = 0;

        this.props.cart.map(item => {
            const price = item.newPrice * item.quantity;
            total += price;
        })

        return total;
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="jumbotron container-jumbotron">
                    <div className="container cart-page-container">
                        <div className="cart-item-background">
                            <h3 className="cart-total-items-h3">Cart ({this.props.cart.length} Items)</h3>
                            <small className="cart-total-items text-muted">MY CART ({this.props.cart.length} ITEMS)</small>
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
                                                <div className="cart-details__wrapper">
                                                    <div className="cart-details">
                                                        <div className="cart-img-item">
                                                            <img src={`${item.imgLink}.jpg`} alt="cart Iphone" className="cart-image" />
                                                        </div>
                                                        <div className="cart-item-details">
                                                            <small className="text-muted">Seller: {item.seller}</small>
                                                            <p className="cart-text"><small>{item.description}</small></p>
                                                            <div className="cart-action-btn">
                                                                <small
                                                                    className="cart-action add-to-wishlist"
                                                                    onClick={() => this.props.addToWishlist(item)}
                                                                ><i className="far fa-heart"></i>WISHLIST</small>
                                                                <small
                                                                    className="cart-action remove-from-cart"
                                                                    onClick={() => this.props.removeFromCart(item.pid)}
                                                                ><i className="fas fa-trash-alt"></i>REMOVE</small>
                                                            </div>
                                                        </div>
                                                        <div className="cart-mobile-details">
                                                            <small className="text-muted">Seller: {item.seller}</small>
                                                            <p className="cart-text"><small>{item.description}</small></p>
                                                            <div className="cart-promotion-price">
                                                                <p className="cart-new-price">{this.setCurrency(item.newPrice)}</p>
                                                                <p className="cart-old-price text-muted"><strike>{this.setCurrency(item.oldPrice)}</strike></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="edit-cart-item">
                                                        <span className="edit-wishlist-cart">
                                                            <i
                                                                className="far fa-heart wishlist-remove-cart"
                                                                onClick={() => this.props.addToWishlist(item)}
                                                            ></i>
                                                            <i
                                                                className="fas fa-trash-alt"
                                                                onClick={() => this.props.removeFromCart(item.pid)}
                                                            ></i>
                                                        </span>
                                                        <span>
                                                            <i
                                                                onClick={(e) => this.minusQuantity(e, item.pid)}
                                                                className="fas fa-minus-circle minus-quantity"
                                                            ></i>
                                                            <b className="quantity-value">{ item.quantity }</b>
                                                            <i
                                                                onClick={(e) => this.addQuantity(e, item.pid)}
                                                                className="fas fa-plus-circle add-quantity"
                                                            ></i>
                                                        </span>
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
                                                    <p className="cart-new-price">{this.setCurrency(item.newPrice)}</p>
                                                    <p className="cart-old-price text-muted"><strike>{this.setCurrency(item.oldPrice)}</strike></p>
                                                    <small className="text-success">Saving: {this.setCurrency(item.saving)}</small>
                                                </div>
                                                <div className="cart-subtotal">
                                                    <b>{this.setCurrency(item.newPrice*item.quantity)}</b>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                <div className="cart-cumulative">
                                    <div className="cart-total-info cart-subtotal-vat">
                                        <div className="subtotal-background">
                                            <span className="subtotal font-weight-bold">Subtotal:</span>
                                            <span>{this.setCurrency(this.setSubTotal())}</span>
                                        </div>
                                        <div className="subtotal-background">
                                            <span className="text-muted font-weight-bold vat">VAT:</span>
                                            <span>{this.setCurrency(this.state.vat)}</span>
                                        </div>
                                    </div>
                                    <div className="cart-total-info cart-total-shipping">
                                        <div className="subtotal-background">
                                            <span className="subtotal font-weight-bold">Total:</span>
                                            <span className="subtotal-value">{this.setCurrency(this.setSubTotal() + this.state.vat)}</span>
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
                <Scroll />
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    product: state.products.product
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (pid) => dispatch(removeFromCart(pid)),
    addToWishlist: (item) => dispatch(addToWishlist(item)),
    updateCartItem: (pid, updates) => dispatch(updateCartItem(pid, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);