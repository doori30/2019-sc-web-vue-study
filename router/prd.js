const express = require("express");
const router = express.Router();
//참조해서 가져옴.
const {Product} = require('../model/Product');

/* Get */
router.get("/", getPrd);

/* Post */


/* Router CB */
async function getPrd(req,res){
	let result = await Product.findAll({order:[["id","asc"]]});
	res.header("Access-Control-Allow-Origin","*");
	//    다른서버에서 요청 온 것도 허락
	res.json(result);
}

module.exports = router;