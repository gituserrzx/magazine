import request from "../utils/request.js";
class IndexModel extends request{
    getRecommendInfo(magazineId=0){
        return this.getData({
            url:`/getRecommendInfo/${magazineId}`
        })
    }
    getMarkTypeList(magazineId=0){
        return this.getData({
            url: `/getMarkTypeList/${magazineId}`
        })
    }
    getArticleList(magazineId=0,start=0){
        return this.getData({
            url:`/getIndexArticleList/${magazineId}/${start}`
        })
    }
}
export {IndexModel}
