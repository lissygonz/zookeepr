const router = require('express').Router();

router.get('/animals',(req,res)=>res.json({message:'server needs to provide data'}));
router.get('/zookeepers',(req,res)=>res.json({message:'server needs to provide data'}));

module.exports = router;