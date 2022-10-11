export default {
  init() {
    // JavaScript to be fired on all pages

    var menuRight = document.getElementById('cbp-spmenu-s2'),
      showRight = document.getElementById('showRight');


    showRight.onclick = function () {
      classie.toggle(this, 'active');
      classie.toggle(menuRight, 'cbp-spmenu-open');
      disableOther('showRight');
    };

    // function disableOther( button ) {
    //   if( button !== 'showLeft' ) {
    //     classie.toggle( showLeft, 'disabled' );
    //   }
    //   if( button !== 'showRight' ) {
    //     classie.toggle( showRight, 'disabled' );
    //   }
    //   if( button !== 'showTop' ) {
    //     classie.toggle( showTop, 'disabled' );
    //   }
    //   if( button !== 'showBottom' ) {
    //     classie.toggle( showBottom, 'disabled' );
    //   }
    //   if( button !== 'showLeftPush' ) {
    //     classie.toggle( showLeftPush, 'disabled' );
    //   }
    //   if( button !== 'showRightPush' ) {
    //     classie.toggle( showRightPush, 'disabled' );
    //   }
    // }
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
