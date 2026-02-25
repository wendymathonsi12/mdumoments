let nextDon = document.getElementById('next');
let prevtDon = document.getElementById('prev');
let carouselDon = document.getElementById('.carousel');
let listItemDon = document.getElementById('.carousel .list');
let thumbnailDon = document.getElementById('.carousel .thumbnail');

nextDon.onclick = function(){
    showSlider('next');
}

prevDon.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun;
runAutoRun = setTimeout(() => {
    nextDon.onclick();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelector('.carousel .list .item');
    let itemThumbnail = document.querySelector('.carousel .thumbnail');
    if(type === 'next'){
        listItemDon.appendChild(itemSlider[0]);
        thumbnailDon.appendChild(itemThumbnail[0]);
        carouselDon.classList.add('next');
    }else{
      let  positionLastItem = itemSlider.length -1;
      listItemDon.prepend(itemSlider[positionLastItem]);
      thumbnailDon.prepend(itemThumbnail[positionLastItem]);
      carouselDon.classList.add('prev');    
    } 
}
clearTimeout(runTimeOut);{
  runTimeOut = setTimeout(() => {
      carouselDon.classList.remove('next');
      carouselDon.classList.remove('prev');
  }, timeRunning)
  clearTimeout(runAutoRun);

}