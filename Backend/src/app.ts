import express, { type Request, type Response } from 'express';
import catRoutes from './routes/cat.routes.ts';
import aiRoutes from './routes/ai.routes.ts';

const app = express();

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({success: true, status: "OK"});
});

app.use("/api/cats", catRoutes);
app.use("/api/ai", aiRoutes);


export default app;