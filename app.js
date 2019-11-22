/* Express 구현 */
const express = require("express");
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* node_modules */
const path = require("path");
const fs = require("fs"); //filesystem← ↑
const morgan = require("morgan");//(log폴더)
const bodyParser = require("body-parser");
const methodOverride = require('method-override');//method를 덮어씌여서 인식시킴.

/* Express 설정 */
app.locals.pretty = true;
app.use(bodyParser.json());//put,del을 인식하기 위함.
app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended : false}));

/* method-override 설정  */
app.use(methodOverride('X-HTTP-Method')) //Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) 
// Google/GData
app.use(methodOverride('X-Method-Override')) //IBM
app.use(methodOverride(function (req, res) {
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method
		delete req.body._method
		return method
	}
}));

/* morgan 설정 */
//log/access.log 저장
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));


/* router */
const frontRouter = require("./router/prd");
app.use("/api/prd",frontRouter);
