const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

//serve the static files from the react application
app.use(express.static(path.join(__dirname, 'marketplace-client/build')));

//Catchall handler
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'marketplace-client/build/index.html'));
});


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); 
const connection = mongoose.connection;
connection.once('open', () => {
   console.log("Database conneciton estabished successfully!");
})

const userRouter = require('./routes/users');
app.use("/users", userRouter);
app.listen(port);

console.log(`Listening on port ${port}`);
