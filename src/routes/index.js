const {SuccessModel,ErrorModel } = require('../model/responseModel') 
const { getList,
    getDetail,
    creataNewBlog,updataBlog,deleteBlog
} = require('../controllers/index')

const {
    execSQL
} = require('../db/index') 

//路由处理
const handleBlogRoute =(req,res)=>{
     
    const method = req.method
    const id = req.query.id
    const blogData = req.body
    

    if(method  === "GET" && req.path === '/api/blog/list'){



        const author = req.query.author|| ''
        const keyword = req.query.keyword|| ''
        const listData =  getList(author,keyword)

        return new SuccessModel(listData)
    }

    if(method  === "POST" && req.path === '/api/blog/detail'){

        const detailData = getDetail(id)
        return new SuccessModel(detailData)

    }

    if(method  === "POST" && req.path === '/api/blog/add'){

        const newBlogData = creataNewBlog(blogData)
        return newBlogData
    }

    if(method  === "POST" && req.path === '/api/blog/updata'){
        const newBlogData = updataBlog(id,blogData)
        if(newBlogData){
            return new SuccessModel("更新博客")
        }else{
            return new ErrorModel("更新博客失败")

        }
    }

    if(method  === "POST" && req.path === '/api/blog/delete'){
        const newBlogData = deleteBlog(id)
        if(newBlogData){
            return new SuccessModel("删除博客")
        }else{
            return new ErrorModel("删除博客失败")

        }
    }
}

module.exports = handleBlogRoute