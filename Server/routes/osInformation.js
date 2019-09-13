const os = require('express').Router();
const system = require('systeminformation');

os.get('/', async (req,res) => {
    try{
        const os = await system.osInfo();
        res.json(os);
    }catch(err){
        res.send(err.message)
    }
});

module.exports = os;