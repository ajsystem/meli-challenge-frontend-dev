import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { authorMiddleware, errorHandlerMiddleWare, notFoundMiddleware } from './middlewares';

const PORT = 3010;

const app = express();
app.use(cors());

app.use(authorMiddleware);
// Routes
app.use('/api', routes);

// Errors handling middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
