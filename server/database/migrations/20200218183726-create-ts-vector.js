'use strict';

const vectorName = '_search';

const searchObjects = {
    Products: ['description', 'details']
};

module.exports = {
    up: (queryInterface) => (
        queryInterface.sequelize.transaction(t =>
            Promise.all(Object.keys(searchObjects).map(table =>
                queryInterface.sequelize
                .query(`
                    ALTER TABLE "${table}" ADD COLUMN "${vectorName}" TSVECTOR;
                `, { transaction: t })
                .then(() =>
                    queryInterface.sequelize.query(`
                UPDATE "${table}" SET ${vectorName} = to_tsvector('english', ${searchObjects[table].join(" || ' ' || ")});
              `, { transaction: t })
                ).then(() =>
                    queryInterface.sequelize.query(`
                CREATE INDEX ${table}_search ON "${table}" USING gin(${vectorName});
              `, { transaction: t })
                ).then(() =>
                    queryInterface.sequelize.query(`
                CREATE TRIGGER ${table}_vector_update
                BEFORE INSERT OR UPDATE ON "${table}"
                FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(${vectorName}, 'pg_catalog.english', ${searchObjects[table].join(', ')});
              `, { transaction: t })
                )
                .error(console.log)
            ))
        )
    ),

    down: (queryInterface) => (
        queryInterface.sequelize.transaction(t =>
            Promise.all(Object.keys(searchObjects).map(table =>
                queryInterface.sequelize.query(`
          DROP TRIGGER ${table}_vector_update ON "${table}";
        `, { transaction: t })
                .then(() =>
                    queryInterface.sequelize.query(`
                DROP INDEX ${table}_search;
              `, { transaction: t })
                ).then(() =>
                    queryInterface.sequelize.query(`
                ALTER TABLE "${table}" DROP COLUMN ${vectorName};
              `, { transaction: t })
                )
            ))
        )
    ),
};

/*
The up function does the following for each key in the searchObjects object:

1. Adds a column called _search to the key’s corresponding table
2. Updates _search to a TSVector
3. Creates an index on the _search column
4. Adds a trigger to the table to update _search whenever a record is updated or inserted

*/