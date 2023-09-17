const msg=document.querySelector("#in1")
const show=document.querySelector("#p1")

const btn=document.querySelector("#btn1")

btn.addEventListener('click',fun)

function fun(){
    if(msg.value===''){
        show.textContent="no messgae!"
        setTimeout(function(){
            msg.value=''
            show.textContent=''
        },2000)
    }
    else{    
    show.textContent=msg.value
        setTimeout(function(){
            msg.value=''
            show.textContent=''
        },2000)
    }
}