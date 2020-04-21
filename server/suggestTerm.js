(function() {
    'use strict';

    const { Client } = require('@elastic/elasticsearch');
    const client = new Client({
        node: 'http://localhost:9200',
        log: 'error'
    });

    const suggest = function search(index, body) {
        return client.search({ index, body });
    };

    const test = function test() {
        let body = {
            query: {
                match: {
                    description: 'Apple'
                }
            },
            suggest: {
                "term_suggester": {
                    "text": "Apple",
                    "term": { "field": "description" }
                }
            }
        };

        console.log(`retrieving term suggestions for "${body.suggest.term_suggester.text}"...`);
        suggest('products', body)
            .then(results => {
                // console.log('===> ', results)
                console.log(`suggestions for each term are:`);
                results.body.suggest.term_suggester.forEach((term, index) => {
                	console.log(term)
                    console.log(`term ${++index}: ${term.text}`);
                    term.options.forEach((option, index) => console.log(`\t suggestion ${++index}: ${option.text}`));
                });
            })
            .catch(console.error);
    };

    test();

    module.exports = {
        suggest
    };
})();