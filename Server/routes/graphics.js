const graphics = require('express').Router();
const system = require('systeminformation');

graphics.get('/', async (req,res) => {
    try{
        const graphics = await system.graphics();
        res.json(graphics);
    }catch(err){
        res.send(err.message)
    }
});

module.exports = graphics;