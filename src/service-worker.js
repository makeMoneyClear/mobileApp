/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */
// angular.module('starter')

// .factory('FileService',function(){
//   var images;
//   var IMAGE_STORAGE_KEY = "images";

//   function getImages(){
//     var img = window.localStorage.getItem(IMAGE_STORAGE_KEY);
//     if(img){
//       images = JSON.parse(img);
//     }else{
//       image = []; 
//     }
//     return images;
//   };

//   function addImage(img){
//     images.push(img);
//     window.localStorage.setItem(IMAGE_STORAGE_KEY,JSON.stringify(images));
//   }

//   return{
//     storeImage: addImage,
//     image: getImages
//   }
// });

// .factory('imageService',function($cordovaCamera,FileService,$q,$cordovaFile){
//   function optionsForType(type){
//     var source;
//     switch(type){
//       case 0:
//       source = Camera.PictureSourceType.CAMERA;
//       break;
//       case 1:
//       source = Camera.PictureSourceType.PHOTOLIBRARY;
//       break;
//     }
//     return{
//       destionationType: Camera.EncodingType.JPEG,
//       popoverOptions: CameraPopoverOptions,
//       saveToPhotoAlbum: false
//     };
//   };

//   function saveMedia(type){
//     return $q(founction(resolve.reject){
//       var options = optionsForType(type),

//       $cordovaCamera.getPicture(options).then(function(imageUrl){
//         var name = imageUrl.substr(imageUrl.lastIndexOf('/')+1);
//         var namePath = imageUrl.substr(0,imageUrl.lastIndexOf('/')+1);
//         var newName =  makeid()=NAME;
//       })
//     })
//   };

//   return {
//     handleMediaDialog: saveMedia
//   }
// })

'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;