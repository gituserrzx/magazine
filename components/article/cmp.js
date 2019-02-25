// components/articleHead/cmp.js
import LikeModel from '../../models/like'
const likeModel = new LikeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
    articleDetail:Object,
    like:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  attached(){
    // const likeList =likeModel.getLikelist()
    // likeList.forEach((item,index)=>{
    //   if(item.artId === this.data.articleDetail.artId){
    //     let like = true;
    //     this.setData({
    //       like
    //     })
    //   }
    // })
   let like = likeModel.getStoData(this.data.articleDetail.artId)
   this.setData({
     like
   })
  },
  /**
   * 组件的方法列表
   */
  methods: {
      onLike(e){
        // console.log(e.detail)
        const like = e.detail.like
        const articleDetail = this.data.articleDetail
        const artId = articleDetail.artId
        const likeList = likeModel.getLikelist()
        if(like){
          likeList.unshift(articleDetail)
          // wx.setStorageSync("likeList",likeList)
          likeModel.setLikelist(likeList)
        }else {
          // let reindex = 0;
          // likeList.forEach((item,index)=>{
          //   if(item.artId === artId){
          //     reindex = index
          //   }
          // })
          // likeList.splice(reindex, 1)
          // wx.setStorageSync("likeList", likeList)
          likeModel.removeLikeList(artId)
          likeModel.setLikelist(likeList)
        }
        this.triggerEvent('like', like, {})
      }
  }
})
