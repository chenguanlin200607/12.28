//index.js
//获取应用实例
var app = getApp();
var cardTeams;
Page({
  data: {
    cardTeams: [{
      "viewid": "1",
      "imgsrc": "https://13373313365.com/image/1.png",
      "price": "¥1245",
      "count": "为什么说 C 语言比 Java 难？ ",
      "name": "为什么说 C 语言比 Java 难？ ",
    }, {
      "viewid": "2",
        "imgsrc": "https://13373313365.com/image/1.png",
      "price": "¥2345",
        "count": "小程序云开发入门实战总结 ",
        "name": "小程序云开发入门实战总结 ",
    }, {
      "viewid": "3",
        "imgsrc": "https://13373313365.com/image/3.png",
      "price": "¥2345",
 
        "count": "node.js写一个小爬虫 ",
        "name": "node.js写一个小爬虫 ",
    }, {
      "viewid": "4",
        "imgsrc": "https://13373313365.com/image/3.png",
      "price": "¥2345",
        "count": "推荐一个前端开源项目 ",
        "name": "推荐一个前端开源项目  ",
    }
    ]
  },
  onLoad: function () {
   // console.log('onLoad:' + app.globalData.domain)
  }
})