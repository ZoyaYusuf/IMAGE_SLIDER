 //slider works when :
// next is clicked
// prev is clicked
// thumbnail is clicked
// and also automatically

let items= document.querySelectorAll('.slider .list .item');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive ++;
    if(itemActive>=countItem){
        itemActive=0;
    }
    showSlider();
}

prev.onclick = function(){
    itemActive--;
    if(itemActive<0){
        itemActive=countItem-1;
    }
    showSlider();
}

let refreshInterval= setInterval(()=>{
    next.click();
}, 5000)

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.slider .thumbnail .item.active');
    
 //keep removing active cls from the prev item and add it for the next item to add effect

    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //har baar active 'add' krenge jb next pr click hoga or yeh function execute hoga or purane wale elm se active remove hoga

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);

    let refreshInterval= setInterval(()=>{
        next.click();
    }, 5000)

}


thumbnails.forEach((thumbnail, index) =>  {   
    thumbnail.addEventListener('click',function(){
        itemActive=index;
        showSlider();
    })
    
});