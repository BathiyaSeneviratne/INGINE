const cpu = require('express').Router();
const system = require('systeminformation');

cpu.get('/', async (req,res) => {
    try{
        const cpu = await system.cpu();
        res.json(cpu);
    }catch(err){
        res.send(err.message)
    }
});

module.exports = cpu;