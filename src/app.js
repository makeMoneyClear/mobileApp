/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


angular.module('startet',['ionic','ngCordova'])

.run(function($ionicPlatform){
  $ionicPlatform.ready(function(){
  if (window.cordova && window.cordova.plugins.Keyboard){
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if(window.statusBar){
    StatusBar.styleDefault();
  }
});
})