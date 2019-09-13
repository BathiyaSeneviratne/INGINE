const wifi = require('express').Router();
const system = require('systeminformation');

wifi.get('/', async (req,res) => {
    try{
        const wifi = await system.wifiNetworks();
        res.json(wifi);
    }catch(err){
        res.send(err.message)
    }
});

module.exports = wifi;