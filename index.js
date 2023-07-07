const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://flmadrid:FrancisMadrid47!@sandbox10247.8qfjdrv.mongodb.net/an22_tindahanNiAlingNena?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Connected to MongoDB Atlas!'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/course', courseRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Running on Localhost: 4000`)
});
