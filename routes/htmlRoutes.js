// DEPENDENCIES
const path = require('path');

// ROUTING
module.exports = (app) => {

    // route to display the notes page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });    
    
    // default route to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}