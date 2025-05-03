let big_img = document.getElementById('big-img');
let boxes = document.querySelectorAll('.box');
let container = document.getElementsByClassName('container')[0]

boxes.forEach(function(btn){
    btn.addEventListener('click',(e) =>{
        if (e.target.tagName === 'IMG') {
            big_img.src = e.target.src;
            let bgColor = getComputedStyle(btn).backgroundColor;
            
            container.style.backgroundColor = bgColor;

        }    
        
    })
})


let menuList = document.getElementById('menuList');
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '300px';
    }
    else{
        menuList.style.maxHeight = '0px';
    }
}