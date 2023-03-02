const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {

    return executeQuery('select * from videojuegos', []);
};


module.exports = {
    getAll
}

