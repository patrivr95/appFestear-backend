const executeQuery = (sql, arr = []) => { //* Creamos la función executeQuery, la cual tiene dos parámetros: la sentencia sql, y el array a devolver
    return new Promise((resolve, reject) => {  //* Retorna una promesa, con un callback con los parámetros resolve y reject que introduciremos a continuación
        db.query(sql, arr, (err, result) => { //* lanzamos una query contra nuestra base de datos, la cual tiene la sentencia sql, el array , y el callback con err y result
            if (err) reject(err); //*si hay un error, lo rechaza con un error
            resolve(result); //* si no, resuelve con el resultado
        });
    });
};



const executeQueryOne = (sql, arr = []) => { //* Creamos la función executeQueryOne, la cual tiene dos parámetros: la sentencia sql, y el array a devolver
    return new Promise((resolve, reject) => { //* Retorna una promesa, con un callback con los parámetros resolve y reject que introduciremos a continuación
        db.query(sql, arr, (err, result) => {  //* lanzamos una query contra nuestra base de datos, la cual tiene la sentencia sql, el array , y el callback con err y result
            if (err) reject(err); //* lanzamos una query contra nuestra base de datos, la cual tiene la sentencia sql, el array , y el callback con err y result
            if (result.length === 0) resolve(null); //* Si el elemento del array es 0, resuelve con un nulo
            resolve(result[0]); 
        });
    });
};

module.exports = { 
    executeQuery,
    executeQueryOne,
    
};