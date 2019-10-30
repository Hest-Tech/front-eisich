/**
 * This file contains Products Page component
 */

import React from 'react';

const ProductsPage = () => (
    <div className="products-container">
        <div className="products-container__refine">
            <div className="products-refine">
                <div className="check-selection">
                    <b className="selection-title">YOUR SELECTION</b>
                    <form className="check-selection__form">
                        <span>
                            <input type="checkbox" className="selection-checkbox" />
                            <label>Women</label>
                        </span>
                        <span>
                            <input type="checkbox" className="selection-checkbox" />
                            <label>Teens</label>
                        </span>
                        <span>
                            <input type="checkbox" className="selection-checkbox" />
                            <label>Kids</label>
                        </span>
                    </form>
                </div>
                adfsaf
            </div>
        </div>
        <div className="products-container__products">
            <div className="products-filter">
                <select name="pets" id="pet-select">
                    <option value="size">Size</option>
                    <option value="price">Price</option>
                    <option value="age">Age</option>
                </select>
                <span>page: <b>1</b> of <b>120</b></span>
            </div>
            <div className="product-items">
                <div className="product">abc</div>
                <div className="product">bvd</div>
                <div className="product">gdfd</div>
                <div className="product">hggh</div>
                <div className="product">hggh</div>
                <div className="product">abc</div>
                <div className="product">bvd</div>
                <div className="product">gdfd</div>
                <div className="product">hggh</div>
                <div className="product">hggh</div>
                <div className="product">abc</div>
                <div className="product">bvd</div>
                <div className="product">gdfd</div>
                <div className="product">hggh</div>
                <div className="product">hggh</div>
                <div className="product">abc</div>
                <div className="product">bvd</div>
                <div className="product">gdfd</div>
                <div className="product">hggh</div>
                <div className="product">hggh</div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
);

export default ProductsPage;