const config = {
    production: {
        PORT: process.env.PORT || 8000,
        DB_CONNECTION: 'mongodb+srv://wickedlolz:wickedlolz@cluster0.bwehj.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    },
    development: {
        PORT: process.env.PORT || 3000,
        DB_CONNECTION: 'mongodb://localhost:27017/cats'
    }
}

module.exports = config[process.env.NODE_ENV.trim()];