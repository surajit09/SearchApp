//CONTROLLERS

searchApp.controller('homeController',['$scope','repoService', function($scope,repoService){
    
    
    $scope.repo=repoService.repo;
    
    $scope.$watch('repo',function(){
        
        repoService.repo=$scope.repo;
        
    });
    
}]);



searchApp.controller('resultsController',['$scope','$resource','repoService', function($scope,$resource,repoService){
    
    
    $scope.repo=repoService.repo;
    
    $scope.searchAPI=$resource("https://api.github.com/search/repositories",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    
    $scope.searchResults=$scope.searchAPI.get({q: $scope.repo});
    
    console.log($scope.searchResults);
    
}]);


searchApp.controller('issuesController',['$scope','$resource','repoService', function($scope,$resource,repoService){
    
    
    $scope.repo=repoService.repo;
    
    $scope.isseAPI=$resource("https://api.github.com/search/issues",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    
    $scope.issueResults=$scope.isseAPI.get({q: $scope.repo});
    
    console.log($scope.issueResults);
    
}]);

	

searchApp.controller('chartController',['$scope','$resource','repoService',function($scope,$resource,repoService){
    
    
    $scope.repo=repoService.repo;
    
    $scope.chartAPI=$resource("https://api.github.com/search/repositories",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    
    $scope.chartResults =$scope.chartAPI.get({q: $scope.repo});
    
    $scope.data=[82, 62, 10];
     
          $scope.chartResults.$promise.then(function (result) {
              
              result.data.items.forEach(function(s){
                 $scope.data.push([s.forks_count,s.stargazers_count,s.open_issues_count]) 
                 
                 console.log($scope.data)
                  
              })
              //$scope.data = result;
              
                
          });
          

    
}]);
