import express from 'express';
import { router } from './router';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json())
app.use(cors)

app.use(router)

// app.use(
//     '/files',
//     express.static(path.resolve(__dirname,'..', 'tmp'))
// )

app.listen(3333)
