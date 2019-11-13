const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to GNFL' }));

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/match', require('./routes/match'));
app.use('/api/club', require('./routes/club'));
app.use('/api/ladder', require('./routes/ladder'));
app.use('/api/news', require('./routes/news'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
