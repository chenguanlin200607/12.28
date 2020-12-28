//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   wx.request({
     url: 'http://movie.1808a.com/index',
     data: {},
     header: {'content-type':'application/json'},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: (res)=>{
       this.res({
         show:res.data.data
       })
       console.log(res.data.data)
     },
     fail: ()=>{},
     complete: ()=>{}
   });
  },
  
  data: {
    list:[
      {
        'id':1,
        'title': '文章标题1'
      },
      {
        'id':2,
        'title': '文章标题2'
      },
      {
        'id':3,
        'title': '文章标题3'
      },
    ]
  },
  listClick:function(event){
    var dataset = event.currentTarget.dataset;
    var id = dataset.id;
    wx.navigateTo({
      url: '/pages/my/my.wxml',
    })
  },
})
