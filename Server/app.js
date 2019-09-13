const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//Routes
const cpu = require('./routes/cpu');
const battery = require('./routes/battery');
const wifi = require('./routes/wifi');
const graphics = require('./routes/graphics');

//Middleware
app.use('/cpu',cpu);
app.use('/battery',battery);
app.use('/wifi',wifi);
app.use('/graphics',graphics);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}`);
});