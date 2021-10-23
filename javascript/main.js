
let humbButton = document.getElementById('humb');
let menus = document.querySelector('.menu');

humbButton.addEventListener('click',function(){
    if(menus.style.display == 'none'){
        menus.style.display = 'flex';
    }
    else{
        menus.style.display = 'none';
    }
});