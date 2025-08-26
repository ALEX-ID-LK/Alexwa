const express = require('express');
const path = require('path');
const app = express();

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    try {
        res.render('pages/index', {
            title: 'ALEX | WA Services' 
        });
    } catch (error) {
        console.error("Error rendering page:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Export the app for Vercel
module.exports = app;
