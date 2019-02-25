// components/navs/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      
  },

  /**
   * 组件的初始数据
   */
  data: {
    navList:[
      "轻芒", "兴趣", "物质", "世界", "新事", "灵魂"
    ],
    magazineId:0,
    activeId:'magazine0',
    lastId:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      let id = e.target.dataset.id
      if(id === this.data.lastId){
        return 
      }
      this.setData({
        magazineId: id,
        activeId: `magazine${id==0?0:id-1}`
      })
      this.triggerEvent('nav',id,{})
      this.setData({
        lastId:id
      })
      wx.pageScrollTo({
        duration: 0,
        scrollTop:0
      })
    }
  }
})
