// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagName:String,
    tagId:Number
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
    
    ontap(){
      const tagId = this.properties.tagId
      wx.navigateTo({
        url:`/pages/type/type?tagId=${tagId}`
      })
    },
    _showErr(){
      wx.showToast({
        title:'当前小程序为测试版本不能跳转哦~',
        mask: true,
        icon:'none',
        duration:1000
      })
    }
  }
})
