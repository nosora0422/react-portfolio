/*about banner animation start*/

var aboutH2 = document.querySelectorAll('.about-h2');
var index = 0;
function animateH2(){
    // console.log('hi');
    for(var i=0; i < aboutH2.length; i++){
        aboutH2[i].classList.remove('text-in');
    }
    aboutH2[index].classList.add('text-in');

    if(index == aboutH2.length - 1){
            index=0;
    } else{
        index++;
    }
    setTimeout(animateH2, 2000);
}


window.onload=animateH2; /*about banner animation ends*/

