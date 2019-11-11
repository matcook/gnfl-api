const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to GNFL' }));

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/results', require('./routes/results'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
