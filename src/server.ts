require('dotenv').config();
import { App } from "./app";

const app = new App();

app.listen();
app.register();