import express from 'express';
import "reflect-metadata";
import "./database";

import { router } from './routes';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
