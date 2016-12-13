//ROUTES


searchApp.config(function($routeProvider){
    
    
    $routeProvider
    .when('/',{
        
        templateUrl:'/assets/pages/home.html',
        controller: 'homeController'
        
    })
    
    .when('/results',{
        
        templateUrl:'/assets/pages/results.html',
        controller: 'resultsController'
        
    })
    
     .when('/issues',{
        
        templateUrl:'/assets/pages/issues.html',
        controller: 'issuesController'
        
    })
    
     .when('/chart',{
        
        templateUrl:'/assets/pages/chart.html',
        controller: 'chartController'
        
    })
    
});

