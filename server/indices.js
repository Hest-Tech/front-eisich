(() => {
    'use strict';

    const { Client } = require('@elastic/elasticsearch');
    const client = new Client({
        node: 'http://localhost:9200',
        log: 'error'
    });

    const indices = () => {
        client.cat.indices({
                v: true
            })
            .then(console.log)
            .catch(err => console.error(`Error connecting to the es client: ${err}`))
    }

    // only for testing purposes
    // all calls should be initiated through the module
    const test = () => {
        console.log(`elasticsearch indices information:`);
        indices();
    };

    test();

    module.exports = {
        indices
    };
})();