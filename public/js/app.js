//MODULE
var searchApp=angular.module("searchApp",['ngRoute','ngResource']);







//DIRECTIVES

searchApp.directive('donutChart', function() {
    return { 
      restrict: 'E',
        replace:true,
        
        scope: { data: '=' } ,// isolate scope
      link: function(scope, element) {
          
        
        
          
      }
    };
  });



