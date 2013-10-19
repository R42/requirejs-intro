/**
 * App entry point
 *
 */
requirejs.config({
  baseUrl: '.',
  paths: {
    // Libs
    'text'         : 'lib/text',
    'underscore'   : 'lib/underscore',

    // Common modules
    'plus'         : 'js/common/plus',
    'equals'       : 'js/common/equals',
    'backshop'     : 'js/common/backshop',
     
    // Logo modules
    'requirejs'    : 'js/logos/requirejs',
    'github'       : 'js/logos/github',
    'otter'        : 'js/logos/otter',
    'ottershop'    : 'js/logos/ottershop',

    // Combinator
    'combinator': 'js/combinator',
  },
  // Configure the loading of non AMD modules
  shim: {
    'underscore': {
      exports: '_'
    }
  }
});

// Click handler for displaying COMBO 1
var combo1Button = document.getElementById('combo1');

combo1Button.onclick = function() {
  require(['combinator'], function(Combinator) {
    var combinator = new Combinator('requirejs', 'github', 'backshop');
    combinator.combine(document.getElementById('combo1-container'));
  });
  combo1Button.onclick = null;
};

// Click handler for displaying COMBO 2
var combo2Button = document.getElementById('combo2');

combo2Button.onclick = function() {
  require(['combinator'], function(Combinator) {
    var combinator = new Combinator('otter', 'backshop', 'ottershop');
    combinator.combine(document.getElementById('combo2-container'));
  });
  combo2Button.onclick = null;
};
