
var fbRemove = document.querySelector('.fb');
var navbar = document.querySelector(".nav.navbar-nav.navbar-right");





  document.querySelector(".fb-logo").addEventListener("click", function(event) {
    event.preventDefault();


    FB.login(function(response) {
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
         console.log('Good to see you, ' + response.name + '.');
         var li= document.createElement('li');
         navbar.appendChild(li);
         li.textContent = "Hi, "+ response.name;
         li.classList.add('fb-text');
         getUserInfo();

       });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: "user_events" });



  });

  function getUserInfo(){

    FB.api('/me/picture?type=normal', function(response) {
      var img=document.createElement('img');
      var li= document.createElement('li');
      li.appendChild(img);
      navbar.appendChild(li);
      img.setAttribute('src', response.data.url);
      localStorage.setItem()
      img.classList.add('fb-img');
      fbRemove.remove();
    });
  }


  //https://developers.facebook.com/docs/facebook-login/permissions --for index
  //FB.api("/me?fields=birthday", function(response) { console.log(response)})
  //https://developers.facebook.com/docs/graph-api/reference/user/ --for console

  window.fbAsyncInit = function() {
    FB.init({
      appId      : "235203910144811",
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
