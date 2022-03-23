import express from 'express';
import { pingResult, pingResultv2 } from './controllers';

const app = express();

app.use(express.json());

app.post('/v1/ping', pingResult);
app.post('/v2/ping', pingResultv2);

app.listen(8000, () => {
    console.log("Servidor na porta 8000...");
})