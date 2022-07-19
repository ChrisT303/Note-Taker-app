const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});