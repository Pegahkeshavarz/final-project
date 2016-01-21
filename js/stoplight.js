
var redLight= document.querySelector('.red-light');
var yellowLight= document.querySelector('.yellow-light');
var greenLight =document.querySelector('.green-light');


var stopButton = document.querySelector('.btn.btn-danger');
var slowButton = document.querySelector('.btn.btn-warning');
var goButton = document.querySelector('.btn.btn-success');
var cautionButton = document.querySelector('.btn.btn-warning.caution');


var wheelBarOne =document.querySelector('.wheel_bar_one');
var wheelBarTwo =document.querySelector('.wheel_bar_two');
var $carMove =$('.car');
var pedMove =document.querySelector('.people');
var myLogo =document.querySelector('.logo');


var myVar;


// stop Button
function stop(){
  //stop light classes added
  redLight.classList.toggle('red-light-checked');
  yellowLight.classList.remove('yellow-light-checked');
  greenLight.classList.remove('green-light-checked');
  clearInterval(myVar);

  //wheel animation added
  wheelBarOne.classList.remove('mymove');
  wheelBarTwo.classList.remove('mymove');
  wheelBarOne.classList.remove('mymoveback');
  wheelBarTwo.classList.remove('mymoveback');

  //car animation added
  $carMove.css('left', $carMove.css("left"));

  //people animation added
  if ($carMove.css('left') > '520px') {
  pedMove.classList.remove('pedmove');
}else{
  pedMove.classList.add('pedmove');
  }
}

// slow Button
function slow(){
  //stoplight classes added
  yellowLight.classList.toggle('yellow-light-checked');
  greenLight.classList.remove('green-light-checked');
  redLight.classList.remove('red-light-checked');
  clearInterval(myVar);

  //car animation added
  $carMove.css('transition-duration', '14s');

}

//go Button
function go(){
//stoplight classes added
  greenLight.classList.toggle('green-light-checked');
  redLight.classList.remove('red-light-checked');
  yellowLight.classList.remove('yellow-light-checked');
  clearInterval(myVar);

  //wheel animation added
  wheelBarOne.classList.add('mymove');
  wheelBarTwo.classList.add('mymove');

//car animation added
  $carMove.css('left', '100%');
  $carMove.removeClass('carback');

  //people animation added
  pedMove.classList.remove('pedmove');
}

//caution Button
function caution(){
  //stop light classes added
  redLight.classList.remove('red-light-checked');
  greenLight.classList.remove('green-light-checked');
  alertCaution();
  myVar = setInterval(alertCaution, 1000);

  $carMove.css('transition-duration', '14s');

}

function alertCaution(){
yellowLight.classList.toggle('yellow-light-checked');
}


stopButton.addEventListener('click', stop);
slowButton.addEventListener('click', slow);
goButton.addEventListener('click', go);
cautionButton.addEventListener('click', caution);
