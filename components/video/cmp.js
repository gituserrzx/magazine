// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainTitle: String,
    duration: String,
    videoSrc: String,
    posterSrc: String,
    videoId:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPlay: true,
  },
 attached(){
  this.getVideoInfo()
 },
  /**
   * 组件的方法列表
   */
  methods: {
      playVideo(){
      this._tooglePlay();
      this.video.play()
      },
      _tooglePlay(){
      this.setData({
        isPlay: !this.data.isPlay
      })
    },
    getVideoInfo(){
      const videoId = this.properties.videoId
      this.video = wx.createVideoContext(videoId,this)
    },
    maskTap(){
      this._tooglePlay();
      this.video.pause()
      this.video.seek(0)
      },
      videoEnd(){
        this._tooglePlay()
      }
  }
})
