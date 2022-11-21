import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { AppDataSource } from "./data-source"
import routes from "./routes"

//Initialize DB
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    app.use(cors())
    app.use(routes)

    // start express server
    app.listen(process.env.PORT || 3333, () => {
        console.log("Servidor em Execução");
    });

    console.log("Express server has started on port 3333.")

}).catch(error => console.log(error))
