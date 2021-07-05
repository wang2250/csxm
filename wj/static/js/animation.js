function animation(msg,color){
    let dom = document.createElement('div');
    dom.style.width = "145px";
    dom.style.height = "38px";
    
    dom.style.borderRadius = "30px";
    dom.style.background = "skyblue";
    dom.style.textAlign = "center";
    dom.style.lineHeight = "38px"
    dom.style.position = "absolute"
    dom.style.left = "50%";
    dom.style.marginLeft = "-60px"
    dom.style.top = "-40px";
    dom.style.fontSize = "16px"
    dom.innerHTML = msg;
    dom.style.color = "white";
    // dom.style.border = `1px solid red`;
    // dom.style.boxShadow = "5px 5px 5px";
    document.querySelector("body").appendChild(dom);
    let timer = setInterval(()=>{
        if(dom.offsetTop>15){
           clearInterval(timer);
           timer = null;
           setTimeout(()=>{
            dom.style.display = "none";
          },1200)
        }
        dom.style.top = dom.offsetTop + 4 +'px';
    },1000/60)
   
}