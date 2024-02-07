let flag=1
function light(){
    if(flag % 2){
        document.querySelectorAll('figure>img')[0].src='img/pic_bulbon.gif'
    }else{
        document.querySelectorAll('figure>img')[0].src='img/pic_bulboff.gif'
    }
    flag++
}