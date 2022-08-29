
// const http=require("http");

// const app=http.createServer((req,res)=> {
    
//     //한글처리
//     res.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"});
    
//      //이후에 나오는 url을 파싱해서 콘솔에 찍는 기능을 가지고있다.
//     if(req.url=="/"){

//         res.end("여기는 루트입니다");
//     }else if(req.url=="/login"){
//         res.end("여기는 로그인입니다");

//     }
// });

// app.listen(3001,() =>{

//     console.log("http로 가동된 서버입니다");


// });

"use strict";

//모듈
const express =require("express");
const app=express();

const POST=3000;

//라우팅
const home=require("./routes/home");

//서버 루트경로
//맵셋팅

app.set("views","./views");
app.set("view engine","ejs");

app.use("/",home); //use-->미들웨어를 등록해주는 메서드

module.exports=app;