(() => {
    'use strict';

    const { Client } = require('@elastic/elasticsearch');
    const client = new Client({
        node: 'http://localhost:9200',
        log: 'error'
    });

    const search = function search(index, body) {
        return client.search({ index: index, body: body });
    };

    // only for testing purposes
    // all calls should be initiated through the module
    const test = function test() {
        let body = {
            size: 20,
            from: 0,
            query: {
                match: {
                    description: {
                        query: 'box',
                        minimum_should_match: 3,
                        fuzziness: 2
                    }
                }
            }
        };
        // console.log(body)
        console.log(`retrieving documents whose title matches '${body.query.match.description.query}' (displaying ${body.size} items at a time)...`);
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