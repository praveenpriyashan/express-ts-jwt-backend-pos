import express, {Request, Response, NextFunction} from 'express'
import "dotenv/config";
import UserRoutes from "./routes/UserRoutes"
import createHttpError, {isHttpError} from "http-errors";

const app = express();
app.use(express.json());
app.use("/users",UserRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
        next(createHttpError(404, "endpoint not found"))
    }
)
const errr = (error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    let errorMessage = "an unknown error message"
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message
    }
    res.status(statusCode).json({error: errorMessage})
}
app.use(errr);

export default app;
