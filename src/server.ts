import express from "express";
import { router } from "./routes";
const app = express();

app.use(express.json());
app.use(router);

app.listen(8002, () => {
	console.log("Servidor aberto.");
});
