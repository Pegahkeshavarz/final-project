var btnReverse = document.querySelector('.btn.btn-default.reverse');
var wheelBarOne =document.querySelector('.wheel_bar_one');
var wheelBarTwo =document.querySelector('.wheel_bar_two');
var $carMove = $('.car');

btnReverse.addEventListener('click', reverse);

function reverse(e){
  e.preventDefault();
  $carMove.removeClass('carmove');
  //carMove.classList.add('carback');

  $carMove.css('left', '-400px');
  wheelBarOne.classList.add('mymoveback');
  wheelBarTwo.classList.add('mymoveback');

}
