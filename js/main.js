const divEls = document.querySelectorAll('.item');

divEls.forEach(function(divEl, index){
    divEl.classList.add(`order-${index+1}`);
    console.log(divEl);
    if (document.querySelector(`.order-${index}`)) {
        console.log(`order-${index}`);
    }
});

const containerEl = document.querySelector('.container');

containerEl.addEventListener('click', function(){
    containerEl.classList.add(':hover');
});

console.log(containerEl.classList);

containerEl.addEventListener('click', function(){
    containerEl.classList.remove(':hover');
});
console.log(containerEl.classList);