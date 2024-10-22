const express = require("express");
//Mongodb database
const { mongoose } = require('mongoose');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');


const app = express();
const port = 80;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/');

app.use('/auth', authRoutes);
app.use('/job', jobRoutes);


app.listen(port, () => {
    console.log(`App running in port ${port}`);
})