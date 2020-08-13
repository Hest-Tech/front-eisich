/**
 * Orders actions
 */
import axios from 'axios';

import {
    PLACE_ORDER,
    COMPLETE_ORDER,
    LOAD_CURRENT_ORDERS,
    CANCEL_ORDER,
    IMPULSE_PURCHASE,
    PURCHASE_CART_ITEMS
} from './types';
import { removeFromCart, fetchCart } from './cart';
import { history } from '../routes/AppRouter';
import { returnMessages } from './resMessages';

const url = "http://localhost:5000/api/v1/orders";
const rootUrl = "http://localhost:5000/api/v1";


// load current orders
 
// place an order
export const placeOrder = (product, cart) => dispatch => {
    const purchaseType = prompt(
    	"You've requested to purchase one product. Would you like to purchase the rest of your carted items?"
	);

    axios
    	.get(`${rootUrl}/cart`)
    	.then(res => {
    		const data = res.data.data;
    		const cart = data.map(item => {
				const newProduct = {
					...item,
					pid: item.sku,
					productId: item.pid
				}

				return newProduct;
			});
    		const payload = !!purchaseType ? [product, ...cart] : [product];
		    console.log(payload)

		    dispatch({
				type: PLACE_ORDER,
				payload
			});
    	})
    	.catch(e => console.log(e))
}

// impulse purchase
export const impulsePurchase = () => ({ type: IMPULSE_PURCHASE });

// purchase carted items
export const purchaseCartItems = () => dispatch => {
	fetchCart();

	const cartItems = localStorage.getItem('cart');
	const payload = !!cartItems ? JSON.parse(cartItems).map(item => {
		const newProduct = {
			...item,
			pid: item.sku,
			productId: item.pid
		}

		return newProduct;
	}) : [];

	dispatch({
		type: PURCHASE_CART_ITEMS,
		payload
	});
};

// complete an order
export const completeOrder = (values, setSubmitting, storeOrders) => dispatch => {
	const delivery = {}
	const address = {
        firstName: values.firstName,
        lastName: values.lasttName,
        phoneNumber: values.phoneNumber,
        address: values.address,
        county: values.county,
        city: values.city
	}
	const jsonOrders = JSON.stringify(storeOrders.pendingOrders);

	axios
		.get(`${url}/${jsonOrders}`)
		.then(res => {
			const data = res.data.data;
			const orders = data.map(order => {
				const newOrder = {
					...order,
					delivery: JSON.stringify(delivery),
					address: JSON.stringify(address)
				};

				return newOrder;
			});

			axios
				.post(`${url}/add`, orders)
				.then(res => {
					const data = res.data.data;

					if (!storeOrders.impulsePurchase) {
						console.log('CART_PURCHASE')
					} else {
						/* CLEAR OUT THE CART HERE */
						/*
							axios
								.delete(`${url}`)
								.then(res => {
									localStorage.remove('cart')
								})
						*/
						console.log('IMPULSE_PURCHASE: ', storeOrders.impulsePurchase)
					}

					switch(values.exampleRadios) {
						case 'card':
							break;
						case 'lipaNaMpesa':
							const payload = {
						        phoneNumber: `254${values.phoneNumber}`,
						        shortCode: "174379",
						        amount: "1",
						        vendor: "174379",
						        exampleRadios: values.exampleRadios.toString()
						    }
						    console.log(payload);
							
							axios
								.post('https://f3383a3e.ngrok.io/lipaNaMpesa', {
							        method: 'POST',
							        body: JSON.stringify(payload),
							        headers: {
							            'Content-Type': 'application/json'
							        }
							    })
								.then(response => {
							        setSubmitting(false);
							        console.log(response);
								})
								.catch(e => console.log(e))
							break;
					}

					dispatch({
						type: COMPLETE_ORDER,
						payload: data
					})
					history.push('/customer/orders')
					dispatch(
                	    returnMessages('Success! Your order is being processed', 200, 'SUCCESS_UPDATE_MSG')
                    )
				})
				.catch(e => console.log(e));
		})
		.catch(e => console.log(e))
}
 
 // cancel an order