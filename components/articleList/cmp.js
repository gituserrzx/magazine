// components/articleList/cmp.js
import {IndexModel} from '../../models/index.js';
import {SearchModel} from '../../models/search.js';
const indexModel = new IndexModel()
const searchModel = new SearchModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:Array,
      value: []
    },
    more:{
      type:String,
      value: '',
      observer:"loadMore"
    },
    magazineId :{
      type:Number,
      value:0,
      observer:"noMoreData"
    },
    word:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData:false,
    type: ''
  },
    attached(){
      const curPages = getCurrentPages()
      const index = curPages.length - 1;
      const route = curPages[index].route
      let type =''
      if(route === 'pages/search/search'){
        type = "search"
      }else{
        type = "magazineId"
      }
      this.setData({
        type
      })
    },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(){
      let getMore
      if(this._isLock()|| this.data.noMoreData){
        return
      }
     this._addLock()
     if(this.data.type === 'search'){
        const word = this.data.word;
        const start = this.data.articleList.length;
       getMore = searchModel.getSearchArticleList(word, start)
     } else {
      const magazineId = this.properties.magazineId;
      const start = this.properties.articleList.length;
     getMore = indexModel.getArticleList(magazineId,start)
     }
      getMore.then(res=>{
        this._setMoreData(res)
        this._clearLock() 
      })
    },
     noMoreData(){
       this.setData({
        noMoreData:false
       })
     },
    _isLock(){
      return this.data.loading
    },
    _addLock(){
      this.setData({
        loading: true
      })
    },
    _clearLock(){
      this.setData({
        loading: false
      })
    },
    _setMoreData(res){
      let newdataList = this.properties.articleList.concat(res.data.data)
        if(newdataList.length === this.properties.articleList.length){
          this.setData({
            noMoreData:true
          })
        }
        this.setData({
          articleList: newdataList,    
        })
    },
    onLike(e){
      console.log(e.detail)
    }
  }
})
