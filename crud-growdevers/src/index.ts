import express from "express";
import cors from "cors";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.listen(8080, () => console.log("Api running"));
