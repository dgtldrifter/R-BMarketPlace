const express = require('express');
const path = require('path');

const app = express();

//serve the static files from the react application
app.use(express.static(path.join(__dirname, 'marketplace-client/build')));

//Catchall handler
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'marketplace-client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on port ${port}`);
