// DEPENDENCIES
const express = require('express');

// EXPRESS CONFIGURATION
const app = express();

// PORT - set initial port to use in listener
const PORT = process.env.PORT || 8080;

// DATA PARSING - setting up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Built-in middleware function to serve static files such as images, CSS files, and JavaScript files
app.use(express.static('public'));

// ROUTER - our "route" files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER - starting server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});