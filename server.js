import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import connectDB from './config/conectiondb.js';
import userRoutes from './routes/user.js';  


let app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));


// Use user routes

//http://localhost:3000/create/User
//http://localhost:3000/get/users

app.use('/', userRoutes);

 

app.use('/api', (req, res) => {
  res.send('API is working properly  ');
});

const port = process.env.PORT;
connectDB(); 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});

