import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);//Para establecer la conexión, también se puede utilizar el createConnection

pool.getConnection()
.then(connection => {
        pool.releaseConnection(connection)
        console.log('DB is connected');
});

export default pool;
