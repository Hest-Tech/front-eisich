/**
 * Orders actions
 */
import axios from 'axios';

import {
    PLACE_ORDER,
    COMPLETE_ORDER,
    LOAD_CURRENT_ORDERS,
    CANCEL_ORDER
} from './types';

const url = "http://localhost:5000/api/v1/orders";


 // load current orders
 
 // place an order
export const placeOrder = (product) => ({
	type: PLACE_ORDER,
	payload: product
});

 // complete an order
export const completeOrder = (values, setSubmitting, pendingOrders) => dispatch => {
	const delivery = {}
	const address = {
        firstName: values.firstName,
        lastName: values.lasttName,
        phoneNumber: values.phoneNumber,
        address: values.address,
        county: values.county,
        city: values.city
	}
	const jsonOrders = JSON.stringify(pendingOrders);

	axios
		.get(`${url}/${jsonOrders}`)
		.then(res => {
			const data = res.data.data;
			const orders = !!data.length ? data.map(order => {
				const newOrder = {
					...order,
					delivery: JSON.stringify(delivery),
					address: JSON.stringify(address)
				};

				return newOrder;
			}) : [];

			console.log('orders: ', orders);

			return !!orders.length ? axios
				.post(`${url}/add`, orders)
				.then(res => {
					const data = res.data.data;
					console.log('ORDER COMPLETE: ', data);

					switch(values.exampleRadios) {
						case 'card':
							return;
						case 'lipaNaMpesa':
							const payload = {
						        phoneNumber: `254${values.phoneNumber}`,
						        shortCode: "174379",
						        amount: "1",
						        vendor: "174379",
						        exampleRadios: values.exampleRadios.toString()
						    }
						    console.log(payload);
							
							return axios
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
					}

					dispatch({
						type: COMPLETE_ORDER,
						payload: data
					})
				})
				.catch(e => console.log(e)) : console.log('DUPLICATE ORDER');
		})
		.catch(e => console.log(e))
}
 
 // cancel an order