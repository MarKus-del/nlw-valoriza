import express, { Request, Response, NextFunction, response } from 'express';
import "express-async-errors";
import "reflect-metadata";
import "./database";

import { router } from './routes';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
