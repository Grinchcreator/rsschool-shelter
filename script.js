let offset = 0;
const slider_line = document.querySelector(".slider_line");

document.querySelector(".go_next").addEventListener('click', function (){
    offset = offset + 360;

    if (offset > 1800){
     offset = 0
    }

    slider_line.style.left = -offset + 'px';
})

document.querySelector(".go_back").addEventListener('click', function (){

    offset = offset - 360;

    if (offset <0){

        offset=1800;
    }

    slider_line.style.left = -offset + 'px';
})