import dotenv from "dotenv";
import express, { Express } from "express";
import http from "http";
import { ErrorMiddleware } from "./middlewares/ErrorMiddleware";
import { Middlewares } from "./middlewares/Middlewares";
import { RegisteredRoutes } from "./routes/Routes";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

export class AppServer {
  private static app: Express;
  private server: http.Server;

  constructor() {
    dotenv.config();

    AppServer.app = express();
    this.server = http.createServer(AppServer.app);

    this.configureMiddlewares();
    this.configureRoutes();
    this.configureErrorHandling();

    if (isDevelopment || isProduction) {
      this.listen();
    }
  }

  public static getApp() {
    if (!AppServer.app) new AppServer();

    return AppServer.app;
  }

  public listen() {
    const port = process.env.PORT || 3000;

    this.server.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  }

  private configureMiddlewares() {
    AppServer.app.use(Middlewares);
  }

  private configureRoutes() {
    AppServer.app.use("/", RegisteredRoutes);
  }

  private configureErrorHandling() {
    AppServer.app.use(ErrorMiddleware);
  }
}

if (isDevelopment || isProduction) new AppServer();
