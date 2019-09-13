const battery = require('express').Router();
const system = require('systeminformation');

battery.get('/', async (req,res) => {
    try{
        const battery = await system.battery();
        res.json(battery);
    }catch(err){
        res.send(err.message)
    }
});

module.exports = battery;