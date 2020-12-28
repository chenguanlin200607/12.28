Page({
  data: {
    url:'',
    //下面是先进行存储的不同产品数据；
    productsList: [
      { showDesc: 'https://mp.weixin.qq.com/s?__biz=MzI2ODUxMzg4Nw==&mid=2247485838&idx=1&sn=1208bcca91141b2c16c2e844efb67a41&chksm=eaef2ebedd98a7a8720092c3f2e87a7f3514d2140bdb7dea289d389aacdc55d268285897872b&token=1964115409&lang=zh_CN#rd' },
 
      { showDesc: 'https://mp.weixin.qq.com/s?__biz=MzI2ODUxMzg4Nw==&mid=2247485869&idx=1&sn=7e4cedf5230c930cf18c9aa4683d1a43&chksm=eaef2e9ddd98a78bcd55835cba8e31f886df27319be99ac4710a0eace7fc8f196e081b03ad11&token=1964115409&lang=zh_CN#rd' },
    
      {showDesc: 'https://mp.weixin.qq.com/s?__biz=MzI2ODUxMzg4Nw==&mid=2247485900&idx=1&sn=5aa1e6028f6499a611fff1ec2a641bf6&chksm=eaef2efcdd98a7eaeb618e687ed3f36cf5f9085779e0a130a8515ce46d8a444b08595dc15994&token=1964115409&lang=zh_CN#rd' },
 
      { showDesc: 'https://mp.weixin.qq.com/s?__biz=MzI2ODUxMzg4Nw==&mid=2247485848&idx=1&sn=af73f05a22febcb4dfae60b197a6ca8e&chksm=eaef2ea8dd98a7bee88721a853d7dfce17387d11a371ba27295bec502b2f7ea76b2fd6faf34c&token=1964115409&lang=zh_CN#rd' },
 
    ]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var goodsId = options.goodsId;
    console.log(goodsId)
    this.setData({
      url: this.data.productsList[goodsId].showDesc
    });
  }
})