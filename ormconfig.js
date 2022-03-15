module.exports = {
    "type": "postgres",
    "host": "localhost",
    "url": "postgres://igor:1234@localhost:5432/zukt_backend",
    "logging": false,
    "entities": [
        "src/entities/**/*.ts"
    ],
    "migrations": [
        "src/migrations/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/migrations"
    }
}