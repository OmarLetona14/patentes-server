export default{
    database:{
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'nUUUxrq5h',
        database: process.env.DB_NAME || 'patentes'
    }
}