const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Route files
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

// Middleware that will parse JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// Call the routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );  