import React from 'react';
import 'normalize.css/normalize.css'; // reset css
import { Provider } from 'react-redux';
import {ThroughProvider} from 'react-through'

import './App.scss';
import AppRouter, { history } from './routes/AppRouter';
import ErrorBoundary from './components/ErrorBoundary'
import configureStore from './store/configureStore';


const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <AppRouter />
                </ErrorBoundary>
            </Provider>
        );
    }
}

export default App;





/*
DB schema
---------

key words
---------
1. sku(storage key unit)
2. asin(amazon standard identification number)

{
	users: {
		uid: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			address: {
				firstName: "",
				lastName: "",
				phoneNumber: [],(max: 2),
				address: "",
				city: "",
				info: "",
				region: "",
				default: bool
			}
		}
	},
	products: {
		asin: {
			title: "",
			description: "",
			timestamp: "",
			sku: <productCategorySku>,
			brand: "",
			garment: "",
			sizes: [productCategories.clothing.sizes],
			images: (Google Drive API)
		}
	},
	productCategories: {
		menFashion: {
			path: '/men-fashion/',
			title: 'Men's Fashion',
			categoryPath: 'Men's Clothing'
		}
		womenFashion: {
			path: '/women-fashion/',
			title: 'Women's Fashion',
			categoryPath: 'Women's Clothing'
		},
		kids: {
			path: '/kids-babies/',
			title: 'Kids & Babies',
			categoryPath: 'Kid's Clothing'
		}
		clothes: {
			sizes: {
				Small_Size: "S",
				Medium_Size: "M",
				Large_Size: "L",
				XL_Size: "XL",
				XXL_Size: "XXL",
				XXXL_Size: "XXXL"
			},
			underwear: {
				title: "Underwear & Sleepwears",
				path: '/underwear/',
				categoryPath: 'Underwear & Sleepwears',
				menBoxerID: <menBoxerID>
			},
			outerwear: {
				title: "Outerwear & Jackets",
				path: '/outerwear/',
				categoryPath: 'Outerwear & Jackets',
				outerwearID: <outerwearID>
			},
			bottoms: {
				title: "Bottoms",
				path: '/outerwear/',
				categoryPath: 'Bottoms',
				outerwearID: <outerwearID>
			},
			tops: {
				title: 'Tops & Sets',
				path: '/tops-sets/',
				categoryPath: 'Tops & Sets',
				topsID: <topsID>
			},
			weddings: {
				title: 'Weddings & Events',
				path: '/weddings-events/',
				categoryPath: 'Weddings & Events',
				weddingID: <weddingID>
			},
			apparelAccessories: {
				title: 'Accessories',
				path: '/apparel-accessories/',
				categoryPath: 'Apparel Accessories',
				menAccessories: {
					title: 'Men's Accessories',
					categoryPath: 'Apparel Accessories/Men's Accessories,
					path: '/men-accessories/',
					sku: <menAccessoriesID>
				},
				womenAccessories: {
					title: 'Women's Accessories',
					categoryPath: 'Apparel Accessories/Women's Accessories,
					path: '/women-accessories/',
					sku: <womenAccessoriesID>
				},
				kidsAccessories: {
					title: 'Kid's Accessories',
					categoryPath: 'Apparel Accessories/Kid's Accessories,
					path: '/men-accessories/',
					sku: <kidsAccessoriesID>
				}
			}
		},
		home: {
			title: 'Home & Living',
			categoryPath: 'Home & Living',
			path: '/home-living/',
			kitchen: {
				title: 'Kitchen Appliances',
				path: '/kitchen-appliances/'
			},
			Beddings: {
				title: 'Beddings',
				path: '/beddings/'
			},
			furniture: {
				title: 'Furniture',
				path: '/furniture/'
			},
			garden: {
				title: 'Garden Supplies',
				path: '/cooking-appliances/'
			},
			houseHold: {
				title: 'Household Items',
				path: '/bath/'
			},
			decor: {}
			...
		},
		office: {
			title: 'Office',
			path: '/office/'
		}
		...
	}
}


*/

/*

			boxer: {
				title: "Men's Boxer",
				path: '/boxer/',
				foreignKey: <menBoxerID>,
				sku: "<sku>"
			}
			<womenClothingID>: {
				title: 'Women's Clothing',
				path: '/womens-clothing/',
				categoryPath: 'Fashion/Women's Clothing',
			},
			<kidsClothingID>: {
				title: "Kid's Clothing",
				path: '/kids-clothing/',
				categoryPath: 'Fashion/Kid's Clothing',
			}
*/