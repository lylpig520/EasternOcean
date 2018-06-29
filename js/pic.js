let x=document.querySelectorAll(".shift-pics")
let y=document.querySelectorAll(".shift-pic-circles")
let now=0
let z=9
let t=0
let h=true
for (let i=0;i<x.length;i++){
    y[i].onclick=function () {
        if (!h) return
        h=false
        for (let j=0;j<x.length;j++){
            y[j].classList.remove("active")
            // y[i].classList.remove("active")
        }
        y[i].classList.add("active")
        // y[i].classList.add("active")
        if (now>i){
            x[i].classList.add("right-in")
            x[now].classList.add("right-out")
            x[i].style.zIndex=z++
            now=i
        }else {
        x[i].classList.add("left-in")
        x[now].classList.add("left-out")
        x[i].style.zIndex=z++
        now=i
        }
    }
    x[i].addEventListener("animationend",function () {
        x[i].className="shift-pics"
        h=true
    })
}
t=setInterval(move,3000)
function move() {
    for (let j = 0; j < x.length; j++) {
        y[j].classList.remove("active")
    }
    if (now < x.length-1) {
        x[now].classList.add("left-out")
        x[now+1].classList.add("left-in")
        x[now+1].style.zIndex=z++
        now++
    }else{
        x[now].classList.add("right-out")
        now=0
        x[now].classList.add("right-in")
        x[now].style.zIndex=z++
    }
    y[now].classList.add("active")
}