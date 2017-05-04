(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//nuevos efectos priscilla
//acordeon quienes sommos
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
//carrusel 2
 $(document).ready(function(){
      $('.carousel').carousel();
    });
       
//paulina
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//efectos portada
$(document).ready(function(){
    $("div").mouseenter(function(){
        $("#ll").animate({
            fontSize: "35px"
        });
    });
    $("div").mouseleave(function(){
        $("#ll").animate({
            fontSize: "30px"
        });
    });
});

//menu arriendo de box
$(document).ready(function(){
   $(".dropdown-button").dropdown();
});

       