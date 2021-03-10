// const {exec} = require('../db/mysql')
// const getData =(keyword1,keyword2) =>{ //query的值
//     return [
//         {
//             id:1,
//             title:'f'
//         },
//         {
//             id:2,
//             title:'b'
//         }
//     ]
// }
// const getData2 =(keyword1,keyword2) =>{ //query的值
//     const sql = 'select * from user;'
//     return exec(sql)
// }
// module.exports ={getData,getData2}
const {
    exec
  } = require('../db/mysql')
const getList = (author, keyword) => {
    // 先返回假数据 sql 注入攻击
    //author = escape(author)
    //keyword = escape(keyword)
    let sql = `select * from blogs where 1=1 `
    if (author) {
      sql += `and author='${author}' `
    }
    if (keyword) {
      sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    return exec(sql)
};
//根据id 获取基本信息 111
const getDetail = (id)=>{
    const sql =  `select * from blogs where id='${id}'`
    return exec(sql).then(
        rows =>{
            return rows[0]
        }
    )
}
//Post 请求 blogData里面有值
const newBlog = (blogData ={}) =>{
    //如果没有值 就是一个空对象 blog data 包括 title 和content
    //blogData 是一个博客对象 包括 title content 属性
    const title = blogData.title
    const author = blogData.author
    const content = blogData.content
    const createTime = Date.now()
    const sql = `insert into blogs (title,content,createtime,author) values ('${title}','${content}','${createTime}','${author}')`
    return exec(sql).then(insertData =>{
        console.log('insertData is ',insertData)
        return {
            id:insertData.insertId
        }
    })
       
}
const updateBlog =(id,blogData={})=>{
    // id是更新哪个文章，blogData是更新的内容
  const title = blogData.title;
  const content = blogData.content;
  const sql = `update blogs set title='${title}' , content='${content}' where id=${id}`//保证只可以删除自己 的文章
  return exec(sql).then(updateData => {
    // console.log('updateData', updateData);
    if (updateData.affectedRows > 0) {
      return true
    }
    return false;
  })
}
//这里return 的值 就是下一个函数then的参数
const delBlog =(id,author)=>{
    const sql = `delete from blogs where id='${id}' and author = '${author}'`
    return exec(sql).then(delData =>{
        if(delData.affectedRows>0){
            return true
        }
        return false
    })
    
}

module.exports ={
    getList,getDetail,newBlog,updateBlog,delBlog
}