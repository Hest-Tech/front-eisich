//require the Elasticsearch library
// const { Client } = require('@elastic/elasticsearch')
// instantiate an Elasticsearch client
// const client = new Client({ node: 'http://localhost:9200' })
// const client = new elasticsearch.Client({
//     hosts: ['http://localhost:9200']
// });

// ping the client to be sure Elasticsearch is up
// client.ping({
//     requestTimeout: 30000,
// }, error => {
// at this point, eastic search is down, please check your Elasticsearch service
//     if (error) {
//         console.error('Elasticsearch cluster is down!');
//     } else {
//         console.log('Everything is ok');
//     }
// });

(async () => {
    'use strict';

    const axios = require('axios');
    const url = 'http://localhost:5000/api/v1/products';
    const { Client } = require('@elastic/elasticsearch');
    const esClient = new Client({
        node: 'http://localhost:9200',
        log: 'error'
    });

    const bulkBody = [];

    try {
        const prodRes = await axios.get(url);
        const data = prodRes.data.data;
        console.log('1. here...')

        data.forEach(item => {
            bulkBody.push({
                index: {
                    _index: "products",
                    _type: "product_items",
                    _id: item.pid
                }
            });

            bulkBody.push(item);
        });

        const res = await esClient.bulk({ body: bulkBody });
        // console.log(res);
        // console.log('==> ',res.body.items);
        let errorCount = 0;
        console.log('2. here...')

        res.body.items.forEach(item => {
            if (item.index && item.index.error) {
                console.log(++errorCount, item.index.error);
            }
        })
        console.log(
            `Successfully indexed ${data.length - errorCount}
				out of ${data.length} items`
        );
        console.log('3. here...')
    } catch (e) {
        console.log(e);
    }

    // module.exports = {
    //     bulkIndex
    // };
})();