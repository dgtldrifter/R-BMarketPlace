require('dotenv').config();
const express =         require('express');
const path =            require('path');
const cors =            require('cors');
const mongoose =        require('mongoose');
const userRouter =      require('./routes/users');
const postRouter =      require('./routes/posts');
const connection =      mongoose.connection;
const app =             express();

const uri = "mongodb+srv://" + process.env.ATLAS_USER + ":" + process.env.ATLAS_PASSWD + "@" + process.env.ATLAS_URI;

//serve the static files from the react application
app.use(express.static(path.join(__dirname, 'marketplace-client/build')));

//Catchall handler
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'marketplace-client/build/index.html'));
});

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.use(session({
   secret:"thisisatestplschangethislater",
   resave: true,
   saveUninitialized, false
}));



mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
connection.once('open', () => {
   console.log("Database connection established successfully!");
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening on port ${port}`);
