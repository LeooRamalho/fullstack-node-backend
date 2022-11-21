import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    name: "default",
    type: "postgres",
    host: "peanut.db.elephantsql.com",
    port: 5432,
    username: "jsnwogvw",
    password: "oEve4pzEsX480vBSG-uZFRCtujsJPRbe",
    database: "jsnwogvw",
    synchronize: true,
    logging: false,
    entities: [User, Tasks],
    migrations: [],
    subscribers: [],
})
