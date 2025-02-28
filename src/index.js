import express from 'express';


import ReportRoute from './routes/ReportRoute.js';

const app = express();
const PORT = 5000; 

app.get('/', (req, res) => {    
    res.send('Hello World!');
});

app.use(express.json());



app.use('/api', ReportRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});