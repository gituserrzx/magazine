// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgGroup:Array,
    mainTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showImg(e){
      console.log(e)
     var index = e.currentTarget.dataset.index
     wx.previewImage({
       urls:this.properties.imgGroup,
       current: this.properties.imgGroup[index]
     })
    }
  }
})
