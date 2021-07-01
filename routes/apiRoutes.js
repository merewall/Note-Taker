// LOAD DATA
const notesData = require('../db/db.json')

// ROUTES
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notesData));

    app.post('/api/notes', (req, res) => {
        notesData.push(req.body);
        res.json(true);
    } );
}