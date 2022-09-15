import axios from 'axios'

/* 
    路径地址
*/
const base={
    baseUrl:'http://localhost:5000',
    homehot1:'/api/home/hot1',
    homehot2:'/api/home/hot2',
    city:'/api/city',
    cityList:'/api/aj/getcitycode',
    search:'/api/search',
    detail:'/api/detail',
    login:'/api/login',
    comment:'/api/comment',
    commentOrder:'/api/order/comment',
    submitcomment:"/api/order/submit/comment"
}

/* 
    请求方法
*/
const api={
    /* 
        获取home首页数据
    */
    getHomeHot1(params){ 
        return  axios.get(base.baseUrl+base.homehot1)
    },
    getHomeHot2(params){ 
        return  axios.get(base.baseUrl+base.homehot2,{
            params
        })
    },
    /* 
        获取城市信息
    */
    getCity(){ 
        return  axios.get(base.baseUrl+base.city)
    },
    /* 
        获取城市列表
    */
        getCityList(){ 
            return  axios.get(base.cityList)
        },
    /* 
        获取搜索页面
    */
   getSearch(params){
       return axios.get(base.baseUrl+base.search,{
        params
       })
   },
/* 
   获取详情页面
*/
getDetails(params){
    return axios.get(base.baseUrl+base.detail,{
     params
    })
},
/* 
   获取登录页面
*/
getLogin(params){
    return axios.post(base.baseUrl+base.login,{
     params
    })
},

/* 
   获取商品评价页面
*/
getComment(params){
    return axios.get(base.baseUrl+base.comment,{
     params
    })
},


/* 
  商品评价
*/
getCommentOrder(params){
    return axios.get(base.baseUrl+base.commentOrder,{
     params
    })
},

/* 
  提交评价
*/
getSubmitComment(params){
    return axios.post(base.baseUrl+base.submitcomment,{
     params
    })
}










}

export default api;