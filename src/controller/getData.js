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
var list =[
  { "value": 9, "name": "肺癌" },
  { "value": 9, "name": "乳腺癌" },

  { "value": 8, "name": "中风" },
  { "value": 8, "name": "缺血性心脏病" },
  { "value": 8, "name": "气管癌" },
  { "value": 8, "name": "慢性阻塞性肺病" },
  { "value": 8, "name": "肝癌" },
  { "value": 8, "name": "胃癌" },
  { "value": 8, "name": "高血压性心脏病" },
  { "value": 8, "name": "阿尔兹海默症" },
 { "value": 8, "name": "糖尿病" },
 { "value": 8, "name": "高血压" },
 { "value": 8, "name": "脑卒中" },

  { "value": 6, "name": "帕金森病" },
  { "value": 6, "name": "高胆固醇血症" },
  { "value": 6, "name": "脑卒中" },
  { "value": 6, "name": "食管癌" },
  { "value": 6, "name": "结直肠癌" },
  { "value": 6, "name": "心肌梗塞" },
  { "value": 6, "name": "系统性红斑狼疮" },
  { "value": 6, "name": "类风湿性关节炎" },
  { "value": 6, "name": "脑癌" },
  { "value": 6, "name": "脂肪肝" },
  { "value": 6, "name": "胰岛素血症" },
  { "value": 6, "name": "淋巴癌" },
  { "value": 6, "name": "膀胱癌" },
  { "value": 6, "name": "数据" },
  { "value": 6, "name": "前列腺癌" },

  { "value": 4, "name": "宫颈癌" },
  { "value": 4, "name": "呼吸道结核" },
  { "value": 4, "name": "寄生虫病" },
  { "value": 4, "name": "红细胞疾病" },
  { "value": 4, "name": "甲状腺癌" },
  { "value": 4, "name": "中毒" },
  { "value": 4, "name": "子宫癌" },
  { "value": 4, "name": "下肢血管病" },
  { "value": 4, "name": "哮喘" },
  { "value": 4, "name": "脑癌" },
  { "value": 4, "name": "脑动脉损伤" },
  { "value": 4, "name": "尿毒症" },
  { "value": 4, "name": "脑动静脉瘘" },
  { "value": 4, "name": "脑栓塞" },
  { "value": 4, "name": "重型再生障碍性贫血" },
  { "value": 4, "name": "植物人" },
  { "value": 4, "name": "原发性心肌病" },

  { "value": 3, "name": "坏死性筋膜炎" },
  { "value": 3, "name": "胰腺癌" },
  { "value": 3, "name": "淋病" },
  { "value": 3, "name": "淋巴瘤" },
  { "value": 3, "name": "艾滋病" },
  { "value": 3, "name": "病毒性肝炎" },
  { "value": 3, "name": "脑血管瘤" },
  { "value": 3, "name": "急慢性肺炎" },
  { "value": 3, "name": "肺结核" },
  { "value": 3, "name": "脑出血" },
  { "value": 3, "name": "蛛网膜下腔出血" },
  { "value": 3, "name": "白血病" },
  { "value": 3, "name": "冠心病" },
  { "value": 3, "name": "心包炎" },

  { "value": 3, "name": "痛风" },
  { "value": 3, "name": "骨质疏松" },
  { "value": 3, "name": "肥胖症" },
  { "value": 3, "name": "尿崩症" },
  { "value": 3, "name": "甲状腺炎" },
  { "value": 3, "name": "甲状腺功能亢进" },
  { "value": 3, "name": "巴特氏综合征" },
  { "value": 3, "name": "胰升糖素瘤" },
  { "value": 3, "name": "胃泌素瘤" },
  { "value": 3, "name": "生长抑素瘤" },
  { "value": 3, "name": "肾素瘤" },
  { "value": 3, "name": "甲状腺功能衰退症" },
  { "value": 3, "name": "库欣综合征" },
  { "value": 3, "name": "嗜铬细胞瘤" },
  { "value": 3, "name": "营养代谢性疾病" },
 
  { "value": 3, "name": "胰腺癌" },
  { "value": 3, "name": "急慢性胰腺炎" },
  { "value": 3, "name": "胆道蛔虫病" },
  { "value": 3, "name": "胆管炎" },
  { "value": 3, "name": "胆石症" },
  { "value": 3, "name": "胆囊炎" },
  { "value": 3, "name": "肝脓肿" },
  { "value": 3, "name": "肝寄生虫病" },
  { "value": 3, "name": "肝硬化" },
  { "value": 3, "name": "结肠炎" },
  { "value": 3, "name": "痢疾" },
  { "value": 3, "name": "克罗恩病" },
  { "value": 3, "name": "肠吸收不良综合征" },
  { "value": 3, "name": "肠结核" },
  { "value": 3, "name": "急性肠炎" },
  { "value": 3, "name": "胃肾经官能症" },
  { "value": 3, "name": "十二指肠炎" },
  { "value": 3, "name": "食管肿瘤" },
  { "value": 3, "name": "消化道溃疡" },

  { "value": 3, "name": "大细胞癌" },
  { "value": 3, "name": "小细胞癌" },
  { "value": 3, "name": "急性上呼吸道感染" },
  { "value": 3, "name": "急性气管炎" },
  { "value": 3, "name": "支气管炎" },
  { "value": 3, "name": "气胸" },
  { "value": 3, "name": "肺心病" },
  { "value": 3, "name": "肺动脉高压" },

  { "value": 3, "name": "先天畸形" },
  { "value": 3, "name": "染色体异常" },

  { "value": 2, "name": "小舞蹈病" },
  { "value": 2, "name": "肝豆状核变性疾病" },
  { "value": 2, "name": "肌张力障碍" },
  { "value": 2, "name": "癫痫" },
  { "value": 2, "name": "脊髓压迫症" },
  { "value": 2, "name": "急性脊髓炎" },
  { "value": 2, "name": "脊髓血管病" },
  { "value": 2, "name": "三叉神经痛" },
  { "value": 2, "name": "雷诺病" },
  { "value": 2, "name": "格林巴利综合征" },
  { "value": 2, "name": "皮肌炎" },
  { "value": 2, "name": "红斑性肢痛症" },
  { "value": 2, "name": "不安腿综合征" },
  { "value": 2, "name": "前列腺增生" },
  { "value": 2, "name": "前列腺结石" },
  { "value": 2, "name": "睾丸炎" },
  { "value": 2, "name": "囊性纤维化" },

  { "value": 2, "name": "尿石症" },
  { "value": 2, "name": "急性肾炎综合征" },
  { "value": 2, "name": "肾小球病" },
  { "value": 2, "name": "肌肉和结缔组织疾病" },
  { "value": 2, "name": "风湿热" },
  { "value": 2, "name": "子宫肌瘤" },
  { "value": 2, "name": "膀胱炎" },
  { "value": 2, "name": "外阴炎" },
  { "value": 2, "name": "妊娠分娩产褥期并发症" }
]
//根据id 获取基本信息 111
const getDetail = (id)=>{
    const sql =  `show tables;`
    return exec(sql).then(
       data =>{
          return list
       }
    )  
}
//Post 请求 blogData里面有值
const newBlog = (blogData ={}) =>{
    //如果没有值 就是一个空对象 blog data 包括 title 和content
    //blogData 是一个系统对象 包括 title content 属性
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