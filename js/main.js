

//MENU
 let consulta = window.matchMedia('(max-width: 787px)');
 let t1=false;
 let t2=false;
 consulta.addListener(mediaQuery);

  function mediaQuery() {
      consulta.matches ? $('#menu1').slideToggle() : (t1 ? $('#menu1').slideToggle() : t1=!t1);
      consulta.matches ? $('#menu2').slideToggle() : (t2 ? $('#menu2').slideToggle() : t2=!t2);

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
  let menu1Toggle = toggle();
  let menu2Toggle = toggle();

  $('#btn-menu-1').click(function(){
		$('#menu1').slideToggle();
    menu1Toggle('#btn-menu-1');
  });
	$('#btn-menu-2').click(function(){
		$('#menu2').slideToggle();
    menu2Toggle('#btn-menu-2');
	});

//MENU

//lider
 $(function(){
      $("#slides").slidesjs({
        width: 548,
        height: 200,
        navigation: {
          active:true,
          effect:"slide"
        },
        play:{
          auto:true
        }

      });
    });

   
//slider

 $('#carousel').carousel({
  interval: 2000
 });