# 22.vue-study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Node.js 기본제공하는 모듈
~~~js
const os = require('os');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
~~~

## express 기본 제공 모듈 및 미들웨어
-Express
-App
-Router
-Request
-Response
-기본제공미들웨어 : express.stactic()

## 개발의 편리를 위한 Global 프로그램
~~~bash
# 하나의 컴퓨터에서 한번만 설치하면 됨.
npm i -g supervisor
npm i -g pm2
~~~

## Node.js 프로젝트 구현을 위한 외부 Model 및 Middleware 목록
~~~bash
npm i express 
npm i morgan
npm i http-errors
npm i pug
npm i multer
npm i mysql
npm i mysql2
npm i sequelize
npm i sequelize-cli
npm i express-session
npm i session-file-store
npm i cookie-parser

#본 프로젝트에 설치할 모듈 및 미들웨어
npm i express
npm i morgan
npm i http-errors
npm i mysql2
npm i sequelize
~~~