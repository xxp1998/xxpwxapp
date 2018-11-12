// pages/toxunlu/toxunlu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eert: []

  },
  phoneclick: function (event) {
    console.log(event)
    console.log(event.currentTarget.dataset.text)
    var number = event.currentTarget.dataset.text
    wx.makePhoneCall({
      phoneNumber: number,
    })
  },
  emailclick: function (event) {
    console.log(event)
    console.log(event.currentTarget.dataset.mail)
    var maile = event.currentTarget.dataset.mail
    wx.navigateTo({
      url: '../mail/mail?mailnu=' + maile,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://bys85x.natappfree.cc/click',
      method: "get",
      header: { "content-type": "application/json" },
      success: function (res) {
        console.log(res.data)
        that.setData({ eert: res.data.students });
      }

    })

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