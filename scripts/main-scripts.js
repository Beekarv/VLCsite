//////////////////////////
// DEFINA VARIAVEIS ABAIXO
//////////////////////////

wow = new WOW({
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       1000,       // default is 0
              mobile:       true,       // default
              live:         true        // default
              })

//////////////////////////
// SCRIPTS
//////////////////////////
$(document).ready(function(){
    wow.init();
});