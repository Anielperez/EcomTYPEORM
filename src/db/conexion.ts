import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "ajpa*1016",
    database: "Tiendaonline",
    logging: true,
    entities: [],
})
