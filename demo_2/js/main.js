/**
 * App entry point
 *
 */
requirejs.config({
  baseUrl: '.',
  paths: {
    'text'         : 'lib/text',
    'underscore'   : 'lib/underscore',
    'the_r_mod'    : 'js/mod_r',
    'the_4_mod'    : 'js/mod_4',
    'the_2_mod'    : 'js/mod_2',
    'the_logo_mod' : 'js/mod_logo'
  },
  // Configure the loading of non AMD modules
  shim: {
    'underscore': {
      exports: '_'
    }
  }
});

// var buttonR = document.getElementById('r');
// var buttonR42 = document.getElementById('r42');

// buttonR.onclick = function() {
//   require(['the_r_mod'], function(ModR) {
//     ModR.render();
//   });
// };

// buttonR42.onclick = function() {
//   require(['the_logo_mod'], function(ModLogo) {
//     ModLogo.render();
//   });
// };
