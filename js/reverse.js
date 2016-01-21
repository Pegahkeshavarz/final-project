var btnReverse = document.querySelector('.btn.btn-default.reverse');
var $carMove = $('.car');

btnReverse.addEventListener('click', reverse);

function reverse(e){
  e.preventDefault();
  $carMove.removeClass('carmove');
  //carMove.classList.add('carback');
  $carMove.css('left', '-400px');

}
