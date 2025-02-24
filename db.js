import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
    user: 'tpl522_13',  // Replace with your PostgreSQL username
    host: '/tmp',
    database: 'books',
    port: 5432,
});

export default pool;
