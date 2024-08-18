import express from "express";
//import "dotenv/config";
import mustache from "mustache-express";
import path from "path";
import router from "./routes";

const server = express();
const port = process.env.PORT;

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));
server.use(router);

server.use((req, res) => {
    res.json("pagina não encontrada")
})

// Routes


server.listen(port, () => {
    console.log("http://localhost:"+port)
})

