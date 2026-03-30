import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import steamRoutes from './routes/steam.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/steam', steamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});