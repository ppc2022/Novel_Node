const { execSQL} = require('../db/index') 

const getList = ( author,keyword) =>{
    let sql  =  `select *from novel`;
    // if(author){
    //     sql +=  ` author="${author}"`
    // }

    // if(keyword){
    //     sql +=   `and title like "%${keyword}%"`
    // }
    console.log(execSQL(sql).then(res=>{
        console.log(res);
    }));

    return execSQL(sql)
}

const getDetail =(id) =>{
    return [
        {
            id:1,
            title:"剑来",
            content:"笼中雀",
            author:"烽火戏诸侯",
            createdTime:'2017',
            text:'我有一妈'
        },
        {
            id:2,
            title:"赤心巡天",
            content:"皆成今日我",
            author:"情何以堪",
            createdTime:'2019',
            text:'今朝剑指叠云处，炼蛊炼人还炼天'
        }
    ]
}


const creataNewBlog =(blogData)=>{

    return{
        id:'1',
        tltle:"新增"
    }
}

const updataBlog = (id,blogData ={})=>{

    return true
}

const deleteBlog = (id)=>{

    return false
}

module.exports = {
    getList,
    getDetail,
    creataNewBlog,
    updataBlog,
    deleteBlog
}