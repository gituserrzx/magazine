// components/more/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String
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
    onTap(){
      var data = this.properties.tag;
      wx.showActionSheet({
        itemList:["内容已过期",`主题与${data}不符`,"不在显示与"+data+"相关的内容"],
        success(res){
          const index = res.tapIndex
          if(index == 0 || index == 1){
            wx.showToast({
              title: '已提交'
            })
          }
        }
      })
      
    }
  }
})
