import cors, { CorsOptions } from "cors";
import { CORSError } from "../errors/util/CORSError";

// Get the domains that are allowed to access the API
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

// Configure CORS
const corsOptions: CorsOptions = {
  credentials: true,
  origin: function (origin: any, callback: any) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new CORSError());
    }
  },
};

const CorsMiddleware = cors(corsOptions);

export { CorsMiddleware };
