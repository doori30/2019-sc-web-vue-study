const express = require("express");
const router = express.Router();
//참조해서 가져옴.

/* Get */
router.get("/", getPrd);

/* Post */


/* Router CB */
function getPrd(req,res){
	res.json({hello : "world"});
}

module.exports = router;