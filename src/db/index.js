const mysql = require('mysql')


const conn = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'123456',
    port:'3306',
    database:'admin'
})


conn.connect();

// conn.query(sql,)

function execSQL(sql){
   const promise = new Promise((reslove,reject)=>{
    conn.query(sql,(err,res)=>{
        if(err){
            reject(err)
            return
        }
        reslove(res)
    })
   })
   return promise
}


// conn.end()

module.exports ={
    execSQL
}