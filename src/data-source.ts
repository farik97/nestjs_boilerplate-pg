import { join } from "path"
import "reflect-metadata"
import { DataSource } from "typeorm"

require('dotenv').config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRE_HOST,
    port: parseInt(process.env.POSTGRE_PORT),
    username: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATABASE,
    synchronize: false,
    logging: true,
    entities: [join(__dirname, "..", "src", "entity", "*{.ts,.js}")],
    migrations: [join(__dirname, "..", "src", "migration", "*{.ts,.js}")],
    migrationsRun: true,
    migrationsTableName: "custom_migration_table",
    subscribers: []
})
