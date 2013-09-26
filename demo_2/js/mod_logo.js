define(
  [
    'the_r_mod',
    'the_4_mod',
    'the_2_mod'
  ],
  function(MR, M4, M2) {

    return {
      render: function() {
        MR.render();
        M4.render();
        M2.render();
      }
    };
  }
);