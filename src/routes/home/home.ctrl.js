"use strict";

const home= (req,res)=>{


    res.render("home/index");
    

} 


const login= (req,res)=>{


    res.render("home/login");
    

};




// 모듈을 밖으로 끄집어 내야 밖에서 사용이 가능하다.



module.exports={
    home,
    login,
};

