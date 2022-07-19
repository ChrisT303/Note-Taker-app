const router = require('express').Router();
const store = require('../../db/db.json');
const { writeFile } = require('fs');

router.get('/notes', (req,res)=> {
    res.json(store);
});

router.post('/notes', ({body},res)=> {
    // body.id = 
    store.push(body)

    writeFile('./db/db.json', JSON.stringify(store), err=>{
        if(err)throw err;
        res.json(store);
    });
});

module.exports = router;