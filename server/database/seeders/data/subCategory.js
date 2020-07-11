"use strict"

const uuidv4 = require("uuid/v4");
const sku = {};

const clothesFilters = {
    sort: "['brand']",
    sideFilters: "['brand', 'color']"
}

const data = [{
        name: 'Outerwear & Jackets', //(1)
        path: "/outerwear-jackets/",
        sku: uuidv4(),
        mainCategoryId: 1,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Underwear & Sleepwears', //(2)
        path: "/underwear-sleepwears/",
        sku: uuidv4(),
        mainCategoryId: 1,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Accessories', //(3)
        path: "/accessories/",
        sku: uuidv4(),
        mainCategoryId: 1,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Bottoms', //(4)
        path: "/bottoms/",
        sku: uuidv4(),
        mainCategoryId: 1,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Muslim Clothing', //(5)
        path: "/muslim-clothing/",
        sku: uuidv4(),
        mainCategoryId: 1,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Muslim Accessories', //(6)
        path: "/muslim-accessories/",
        sku: uuidv4(),
        mainCategoryId: 1,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Accessories', //(7)
        path: "/accessories/",
        sku: uuidv4(),
        mainCategoryId: 2,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Tops & Sets', //(8)
        path: "/tops-sets/",
        sku: uuidv4(),
        mainCategoryId: 2,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Weddings & Events', //(9)
        path: "/weddings-events/",
        sku: uuidv4(),
        mainCategoryId: 2,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Bottoms', //(10)
        path: "/bottoms/",
        sku: uuidv4(),
        mainCategoryId: 2,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Women Muslim Clothing', //(11)
        path: "/muslim-clothing/",
        sku: uuidv4(),
        mainCategoryId: 2,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Underwear & Sleepwears', //(12)
        path: "/underwear-sleepwears/",
        sku: uuidv4(),
        mainCategoryId: 2,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Baby Fashion', //(13)
        path: "/baby-fashion/",
        sku: uuidv4(),
        mainCategoryId: 3,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Baby Toys', //(14)
        path: "/baby-toys/",
        sku: uuidv4(),
        mainCategoryId: 3,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Bathing & Skin Care', //(15)
        path: "/bathing-skin-care/",
        sku: uuidv4(),
        mainCategoryId: 3,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Diapering', //(16)
        path: "/diapering/",
        sku: uuidv4(),
        mainCategoryId: 3,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Feeding', //(17)
        path: "/feeding/",
        sku: uuidv4(),
        mainCategoryId: 3,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Accessories', //(18)
        path: "/accessories/",
        sku: uuidv4(),
        mainCategoryId: 4,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Mobile Phones', //(19)
        path: "/mobile-phones/",
        sku: uuidv4(),
        mainCategoryId: 4,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Tablets', //(20)
        path: "/tablets/",
        sku: uuidv4(),
        mainCategoryId: 4,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Top Brands', //(21)
        path: "/top-brands/",
        sku: uuidv4(),
        mainCategoryId: 4,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Laptops', //(22)
        path: "/laptops/",
        sku: uuidv4(),
        mainCategoryId: 5,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Networking', //(23)
        path: "/networking/",
        sku: uuidv4(),
        mainCategoryId: 5,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Office Electronics', //(24)
        path: "/office-electronics/",
        sku: uuidv4(),
        mainCategoryId: 5,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Peripherals', //(25)
        path: "/peripherals/",
        sku: uuidv4(),
        mainCategoryId: 5,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Security', //(26)
        path: "/security/",
        sku: uuidv4(),
        mainCategoryId: 5,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Storage', //(27)
        path: "/storage/",
        sku: uuidv4(),
        mainCategoryId: 5,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Furniture', //(28)
        path: "/furniture/",
        sku: uuidv4(),
        mainCategoryId: 6,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Garden', //(29)
        path: "/garden/",
        sku: uuidv4(),
        mainCategoryId: 6,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Home Decor', //(30)
        path: "/home-decor/",
        sku: uuidv4(),
        mainCategoryId: 6,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Home Textiles', //(31)
        path: "/home-textiles/",
        sku: uuidv4(),
        mainCategoryId: 6,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Household Items', //(32)
        path: "/household-items/",
        sku: uuidv4(),
        mainCategoryId: 6,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Kitchen', //(33)
        path: "/kitchen/",
        sku: uuidv4(),
        mainCategoryId: 6,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Fashion Jewellery', //(34)
        path: "/fashion-jewellery/",
        sku: uuidv4(),
        mainCategoryId: 7,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: "Men's Watches", //(35)
        path: "/men-watches/",
        sku: uuidv4(),
        mainCategoryId: 7,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Wedding', //(36)
        path: "/wedding/",
        sku: uuidv4(),
        mainCategoryId: 7,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: "Women's Watches", //(37)
        path: "/women-watches/",
        sku: uuidv4(),
        mainCategoryId: 7,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Cycling', //(38)
        path: "/cycling/",
        sku: uuidv4(),
        mainCategoryId: 8,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Sportswear', //(39)
        path: "/sportswear/",
        sku: uuidv4(),
        mainCategoryId: 8,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Swimming', //(40)
        path: "/swimming/",
        sku: uuidv4(),
        mainCategoryId: 8,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Automobile', //(41)
        path: "/automobile/",
        sku: uuidv4(),
        mainCategoryId: 9,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Accessory Parts', //(42)
        path: "/accessory-parts/",
        sku: uuidv4(),
        mainCategoryId: 10,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Home Audio & Video', //(43)
        path: "/home-audio-video/",
        sku: uuidv4(),
        mainCategoryId: 10,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Camera', //(44)
        path: "/camera/",
        sku: uuidv4(),
        mainCategoryId: 10,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Video Games', //(45)
        path: "/video-games/",
        sku: uuidv4(),
        mainCategoryId: 10,
        title: "SUB_CATEGORY",
        createdAt: new Date(),
        updatedAt: new Date()
    }]

data.map((item, i) => {
    sku[i.toString()] = item.sku

    if (item.mainCategoryId <= 3) {
        item['sort'] = ['brand']
        item['filters'] = ['brand', 'color']
    }
})
// console.log(sku);

module.exports = { data, sku }