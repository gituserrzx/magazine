class LikeModel {
   likeList = wx.getStorageSync('likeList') ||[]
    setLikelist(value){
        wx.setStorageSync("likeList",value)
    }
    getLikelist(){
        return  this.likeList
    }
    addLikelist(articleDetail){
        this.likeList.unshift(articleDetail)
        this.setLikelist(this.likeList)
    }
    removeLikeList(id){
        let reindex = 0;
        this.likeList.forEach((item,index)=>{
          if(item.artId === id){
            reindex = index
            return
          }
        })
        this.likeList.splice(reindex, 1)
        this.setLikelist(this.likeList)
    }
    getStoData(id){
        let like = false
        this.likeList.forEach((item,index)=>{
            if(item.artId === id){
               like = true;
            }
          })
          return like
    }
}
export default LikeModel