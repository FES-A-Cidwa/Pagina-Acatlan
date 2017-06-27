 

//MENU
 let consulta = window.matchMedia('(max-width: 787px)');
 let t=false;
 consulta.addListener(mediaQuery);

  function mediaQuery() {
      consulta.matches ? $('#menu1').slideToggle() : (t ? $('#menu1').slideToggle() : null);
      consulta.matches ? $('#menu2').slideToggle() : (t ? $('#menu2').slideToggle() : null);
      t=!t;
 	}
  mediaQuery();
  //closure
  function toggle(){
    let t=false;
    function closeOpen(menu){
      t ?  $(menu).removeClass("is-active") : $(menu).addClass("is-active");
      t=!t;
    }
    return closeOpen;
  }
  let menuToggle = toggle();

  $('#btn-menu-1').click(function(){
		$('#menu1').slideToggle();
    menuToggle('#btn-menu-1');
  });
	$('#btn-menu-2').click(function(){
		$('#menu2').slideToggle();
    menuToggle('#btn-menu-2');
	});
  		
//MENU