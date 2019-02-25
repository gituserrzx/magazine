// pages/index/index.js
import {IndexModel} from '../../models/index.js';
import random from '../../utils/random';
const indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: {},
    articleList:[],
    markList:[],
    getMore:'',
    magazineId:0,
    loading: true,
  },
  onCatalog(){
    wx.navigateTo({
      url:"/pages/catalog/catalog"
    })
  },
  onNav(e){
   
      let id = e.detail;
      this.resetData(id)
      this.getData(id)
  },
  resetData(id){
    this.setData({
      magazineId:id,  
      recommend: {},
      articleList:[],
      markList:[],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getData(this.data.magazineId)
    // wx.showLoading()
   
  },
 
  getData(magazineId){
    const recommend = indexModel.getRecommendInfo(magazineId) 
    const markList = indexModel.getMarkTypeList(magazineId)
    const articleList = indexModel.getArticleList(magazineId)
    
    Promise.all([recommend,markList,articleList]).then(res=>{
      this.setData({
        recommend: res[0].data.data,
        markList: res[1].data.data,
        articleList: res[2].data.data
      })
      // wx.hideLoading()
      this.hideLoading()
    })
  },
  hideLoading(){
    this.setData({
      loading: false
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
    this.setData({
      getMore: random(20)
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})