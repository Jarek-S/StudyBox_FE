(function() {
  'use strict';

  angular
    .module('studyBoxFe', [
      /* Angular modules */
      'ngAnimate',
      'ngCookies',
      'ngMaterial',
      'ngSanitize',
      'ngMessages',
      'ngAria',

      /*3rd party modules*/
      'ui.router',
      'toastr',
      'pascalprecht.translate',

      /*team modules*/
      'translator',
      'backend',
      'registration',
      'deck'

    ]);
})();