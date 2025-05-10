import express from 'express';
import itemRoutes from './route/itemRoute';
import { errorHandler } from './middleware/errorHandle';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;