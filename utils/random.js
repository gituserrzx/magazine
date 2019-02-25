function random(num){
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let str = '';
    for(let i = 0;i < num;i ++){
        str+= arr[parseInt(Math.random()*26)]
    }
    return str
}
export default random