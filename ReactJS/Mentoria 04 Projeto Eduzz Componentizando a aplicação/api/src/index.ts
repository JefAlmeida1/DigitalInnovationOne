import express from 'express';
import { pingResult } from './controllers';

const app = express();

app.use(express.json());

app.post('/ping', pingResult);

app.listen(8000, () => {
    console.log("Servidor na porta 8000...");
})