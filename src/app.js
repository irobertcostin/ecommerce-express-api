import cors, { } from "cors";
import { Express } from "express";




const app = express();

app.use(cors());

app.use(express.json());




