import express from "express";
import routes from "./src/routes.js";
const app = express();

app.use(express.json());
app.use(routes);

app.listen(8002, () => {
	console.log("Servidor aberto.");
});
