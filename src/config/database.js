module.exports = {
    "development": {
        dialect: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'root',
        database: "alpmdb",


        define: {
            timestamps: true,
            underscored: true
        }

    }

}