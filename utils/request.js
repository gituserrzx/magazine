
class request{
    baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'
    getData({url,type="GET",data={}}){
        return  new Promise((resolve,reject)=>{
        wx.request({
            url:this.baseUrl+url,
            success:res=>{
                
                if(res.data.code === 0){
                    resolve(res)
                }else{
                    _showErr()
                }   
            },
            fail:err=>{
                console.log(this.url)
                reject()
                _showErr()
            }
        })
       })
        
    }
}
function _showErr(){
    wx.showToast({
        title:'请求错误',
        icon:"none",
        duration: 1000
    })
}
export default request