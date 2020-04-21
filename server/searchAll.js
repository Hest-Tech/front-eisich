(() => {
    'use strict';

    const { Client } = require('@elastic/elasticsearch');
    const client = new Client({
        node: 'http://localhost:9200',
        log: 'error'
    });

    const search = function search(index, body) {
        return client.search({ index, body });
    };

    // only for testing purposes
    // all calls should be initiated through the module
    const test = function test() {
        let body = {
            size: 20,
            from: 0,
            query: {
                match_all: {}
            }
        };

        console.log(`retrieving all documents (displaying ${body.size} at a time)...`);
        search('products', body)
            .then(results => {
            	// console.log('results: ', results)
                console.log(`found ${results.body.hits.total} items in ${results.body.took}ms`);
                console.log(`returned article titles:`);
                results.body.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - ${hit._source.description}`));
            })
            .catch(console.error);
    };

    test();

    module.exports = {
        search
    };
})();