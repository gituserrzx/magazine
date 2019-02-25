// pages/mark/mark.js
import LikeModel from '../../models/like'
const likeModel = new LikeModel()
Page({

   
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    isGetInfo:false,
    likeList:[]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
  },
   getUserInfo(){
    wx.getSetting({
      success:res=>{
        if(res.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            success:res=>{
              this.setData({
                userInfo:res.userInfo,
                isGetInfo:true
              })
              this.getLikeList()
            }
          })
        }
      }
    })
   } ,
  onGetUserInfo(e){
    // console.log(e)
    if(e.detail.userInfo){
      this.setData({
        userInfo:e.detail.userInfo,
        isGetInfo:true
      })
      this.getLikeList()
    }
  },
  getLikeList(){
    const likeList = likeModel.getLikelist()
    this.setData({
      likeList
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
    this.getUserInfo()
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