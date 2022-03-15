module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
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