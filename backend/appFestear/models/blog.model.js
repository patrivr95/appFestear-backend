const { executeQuery, executeQueryOne } = require('../helpers/utils');


const getAll = () => {

    return executeQuery('select * from blog', []);
};


module.exports = {

    getAll
}


