angular.module('starter.filter', [])

.filter('trustUrl', function($sce) {
   return function (url){
     return $sce.trustAsResourceurl(url);
   };
});