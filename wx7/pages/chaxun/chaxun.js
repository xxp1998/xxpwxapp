// pages/chaxun/chaxun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    imgfacepath: ""

  },
  btclcik: function (event) {
    console.log("请求")
    var that = this
    console.log("点击" + that.data.username);
    wx.request({
      url: 'http://ysy4d5.natappfree.cc/zxc',
      data: { "username": that.data.username },
      header: { "content-type": "application/json" },
      success: function (respone) {
        console.log(respone.data);
        var imgpath = respone.data.imgfacepath;
        console.log(imgpath);
        that.setData({ imgfacepath: imgpath });
      }
    })

  },
  nameinput: function (event) {
    console.log(event);
    console.log(event.detail.value);
    var name = event.detail.value;
    var that = this;
    that.setData({ username: name });

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})