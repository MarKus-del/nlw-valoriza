import express from 'express';
import "reflect-metadata";
import "./database";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
