let banner = document.querySelector("#add_banner"),
    bannerWrapper = document.querySelector("#add_banner-wrapper"),
    timerSpan = document.querySelector("#add_timer"),
    closeSvg = document.querySelector("#add_close-svg")


function add_init(n){
    setTimeout( add_popIn, n*1000 )
}

function add_popIn(){
    setTimeout( () => {
        banner.style.top = "50%"
    }, 200)
    bannerWrapper.style.zIndex = "1"
    bannerWrapper.style.opacity = "1"
    add_timer(15)
}

function add_popOut(){
    setTimeout( () => {
        bannerWrapper.style.opacity = "0"
        setTimeout( ()=>{
            bannerWrapper.style.zIndex = "0"
        }, 200)
    }, 1200)
    banner.style.top = "-50%"
}

function add_timer(n){
    n++
    let add_interval = setInterval(()=>{if(n-->0)timerSpan.innerHTML=n;else{timerSpan.innerHTML=""; closeSvg.style.opacity = "1"; timerSpan.style.zIndex = "2"; closeSvg.style.zIndex = "3"; clearInterval(add_interval)}},1000)
}