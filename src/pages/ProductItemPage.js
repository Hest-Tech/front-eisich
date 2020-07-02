/**
 * This file contains the Product Item Page component
 */


import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Zoom from 'react-img-zoom'

import NavBar from '../components/NavBar';
import SizeChart from '../components/SizeChart';
import CheckoutPage from './CheckoutPage';
import { addToCart } from '../actions/cart';
import { setCurrency } from '../actions/products';
import Scroll from '../components/Scroll';
import '../assets/images/dress.png';


class ProductItemPage extends React.Component {

    constructor(props) {
        super(props);
        this.toggleChartPopUp = this.toggleChartPopUp.bind(this);
        this.addCount = this.addCount.bind(this);
        this.minusCount = this.minusCount.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.setDiscount = this.setDiscount.bind(this);
        this.setDisableBtn = this.setDisableBtn.bind(this);
        this.setSize = this.setSize.bind(this);

        this.state = {
            chartPopUp: false,
            count: 1,
            availableCount: this.props.product.pieces - 1,
            img: "dress.png",
            imgLink: `https://imgur.com/${this.props.product.imgId}.jpg`,
            defaultSize: 'M',
            clicked: '',
            baseColor: '#E9BD4C',
            darkGrey: '#505050',
            lightGrey: '#ddd'
        };
    }

    toggleChartPopUp() {
        this.setState(this.toggleChartPopupState)
        console.log(this.state.chartPopUp)
    }

    toggleChartPopupState(state) {
        return {
            chartPopUp: !state.chartPopUp
        }
    }

    // If count increases available pieces decrease
    addCount() {
        const minusAvailablePiece = this.state.availableCount - 1;
        const totalPieces = this.props.product.pieces;
        const addPiece = this.state.count + 1;

        this.setState(state => ({
            count: addPiece > totalPieces ? totalPieces : addPiece,
            availableCount: minusAvailablePiece < 0 ? 0 : minusAvailablePiece
        }))
    }

    // If count decreases available pieces increase
    minusCount() {
        const totalPieces = this.props.product.pieces;
        const addAvailablePiece = this.state.availableCount + 1;
        const minusPiece = this.state.count - 1;
        const availablePieces = this.props.product.pieces - 1;

        this.setState(state => ({
            count: minusPiece < 1 ? 1 : minusPiece,
            availableCount: addAvailablePiece > availablePieces ? availablePieces : addAvailablePiece
        }));
    }

    setDiscount() {
        const oldPrice = this.props.product.oldPrice;
        const discount = this.props.product.saving;
        const percentDiscount = (discount/oldPrice)*100

        return percentDiscount.toFixed(1);
    }

    addToCart() {
        const productItem = this.props.product;

        const product = {
            pid: productItem.pid,
            imgId: productItem.imgId,
            description: productItem.description,
            seller: productItem.seller,
            quantity: this.state.count,
            oldPrice: productItem.oldPrice,
            newPrice: productItem.newPrice,
            saving: productItem.saving,
            subTotal: this.state.count*this.props.product.newPrice,
            features: productItem.features
        }

        this.props.addToCart(product);
    }

    setDisableBtn() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const disableBtn = !!cart.length && cart.filter(item => item.pid === this.props.product.pid);

        return !!disableBtn.length;
    }

    setSize(e) {
        const targetSize = e.target;
        const parentTargetChildren = document.getElementById('sizes').children;
        console.log(targetSize.textContent)

        Array.from(parentTargetChildren).forEach(el => el.classList.remove('selected-size'));
        targetSize.className += ' selected-size';
        this.setState({ defaultSize: targetSize.textContent })
    }

    sizeFeature() {
        const featuresList = this.props.product.features;
        const features = []; 
        const keys = !!featuresList && featuresList.map(
            feature => features.concat(Object.keys(feature))
        );

        return keys.includes('size');
    }

    render() {
        console.log('product: ',this.props.product)
        return (
            <div className="App">
                <NavBar />
                <div className="product-item">
                    <nav className="product-nav-breadcrumb">
                        <span className="nav-breadcrumb__span">
                            <NavLink className="breadcrumb-text" to="/">Home</NavLink>
                            <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <NavLink className="breadcrumb-text" to="/products">Women's Fashion</NavLink>
                            <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <NavLink className="breadcrumb-text" to="/">Clothing</NavLink>
                            <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <p className="breadcrumb-item active">Dress</p>
                        </span>
                    </nav>
                    <div className="product-item-container">
                        <div className="product-item__img">
                            <div className="main-img-background">
                                {/*<Zoom
                                    img={this.state.imgLink}
                                    className="main-product-img-zm"
                                    zoomScale={3}
                                    width={500}
                                    height={500}
                                />*/}
                                <img src={this.state.imgLink} style={{width:'500px',height:'500px'}} alt="" />
                                <img src={this.state.imgLink} alt="main product image" className="main-product-img" />
                            </div>
                            <span className="product-img-color">
                                <div className="color-variant">
                                    <div className="color-variant-background red">
                                        <img src={this.state.img} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                                <div className="color-variant">
                                    <div className="color-variant-background orange">
                                        <img src={this.state.img} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                                <div className="color-variant">
                                    <div className="color-variant-background baige">
                                        <img src={this.state.img} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                                <div className="color-variant">
                                    <div className="color-variant-background blue">
                                        <img src={this.state.img} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="product-item__details">
                            <div className="details-background">
                                <h3 className="product-title-description">{this.props.product.description}</h3>
                                <div className="new-price-promo">
                                    <h3 className="product-price">{setCurrency(this.props.product.newPrice)}</h3>
                                    <span className="old-price-range">
                                        <p className="old-price text-muted"><strike>{setCurrency(this.props.product.oldPrice)}</strike></p>
                                        <mark>-{this.setDiscount()}%</mark>
                                    </span>
                                </div>
                                {this.state.chartPopUp && <SizeChart
                                    isOpen={this.state.chartPopUp}
                                    toggleChartPopUp={this.toggleChartPopUp}
                                />}
                                <div className="specification-variation">
                                    {
                                        this.sizeFeature() && <React.Fragment>
                                            <span className="size-check">
                                                <p>SELECT SIZE:</p>
                                                <a
                                                    className="breadcrumb-text"
                                                    href="#"
                                                    onClick={this.toggleChartPopUp}
                                                >
                                                    Size Guide
                                                </a>
                                            </span>
                                            <div id="sizes" className="size-range">
                                                {
                                                    // this.state.sizes.map((item, i) => <div
                                                    //     className="size_ small"
                                                    //     key={i}
                                                    //     onClick={this.setSize}
                                                    // >{item}</div>)
                                                }
                                                <div className="size_ small" onClick={this.setSize}>S</div>
                                                <div className="size_ small" onClick={this.setSize}>M</div>
                                                <div className="size_ small" onClick={this.setSize}>L</div>
                                                <div className="size_ small" onClick={this.setSize}>XL</div>
                                                <div className="size_ small" onClick={this.setSize}>XXL</div>
                                            </div>
                                        </React.Fragment>
                                    }
                                    <span className="size-check">
                                        <p>SELECT COLOR:</p>
                                    </span>
                                    <span className="product-img-color-selector">
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background red">
                                                <img src={this.state.imgLink} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background orange">
                                                <img src={this.state.imgLink} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background baige">
                                                <img src={this.state.imgLink} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background blue">
                                                <img src={this.state.imgLink} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                    </span>
                                    <span className="size-check">
                                        <p>NO. OF PIECES:</p>
                                    </span>
                                    <div className="size-range qty">
                                        <button
                                            className="btn btn-sm"
                                            onClick={this.minusCount}
                                        ><i className="fas fa-minus"></i></button>
                                            <p className="text-qty">{this.state.count}</p>
                                        <button
                                            className="btn btn-sm"
                                            onClick={this.addCount}
                                        ><i className="fas fa-plus"></i></button>
                                        <p className="text-muted small item-pieces">{this.state.availableCount} piece(s) available</p>
                                    </div>
                                    <div className="action-btn">
                                        <NavLink
                                            className="buy-now"
                                            to="/checkout"
                                        >
                                            <button className="btn btn-lg btn-danger">Buy Now</button>
                                        </NavLink>
                                        <NavLink
                                            className="add-to-cart"
                                            to="/cart"
                                        >
                                            <button
                                                className="btn btn-lg btn-warning"
                                                onClick={this.addToCart}
                                                disabled={this.setDisableBtn()}
                                            >
                                                Add to Cart
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-specifications">
                        <div className="specification-links">
                            <div className="btn-warning">Product Details</div>
                            <div className="basic">Reviews</div>
                        </div>
                        <div className="product-specifications__background">
                            {this.props.product.details}

                            <p>Items: Summer chiffon dress</p>
                            <p>Size: S M L XL XXL XXXL 4XL 5XL</p>
                            <p>Sleeve: Bow 3/4 sleeve</p>
                            <p>Collar: O-neck</p>
                            <p>Season: Summer dress</p>
                            <p>Pattern:Floral print</p>
                        </div>
                    </div>
                </div>
                <Scroll />
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    product: state.products.product
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemPage);