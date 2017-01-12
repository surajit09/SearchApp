describe('Testing Angular Test Suite',function(){



beforeEach(module('searchApp'));

describe('Testing Home Controlller',function(){

var scope, ctrl;

beforeEach(inject(['repoService',function(service){this.service=service;}]));

beforeEach(inject(function($rootScope,$controller){
    scope=$rootScope.$new();
ctrl=$controller('homeController',{$scope:scope});

}));


it('shoud have a scope',function(){

expect(scope).toBeDefined();

});

it('can create an instace of service',function(){

    expect(this.service).toBeDefined();
})

});


describe('Testing Results Controlller',function(){

var scope, ctrl, httpBackend;

beforeEach(inject(['repoService',function(service){this.service=service;}]));

beforeEach(inject(function($rootScope,$controller,$httpBackend){
    scope=$rootScope.$new();
ctrl=$controller('resultsController',{$scope:scope});
httpBackend=$httpBackend;

}));

it('shoud have a scope',function(){

expect(scope).toBeDefined();

});

it('can create an instace of service',function(){

    expect(this.service).toBeDefined();
});


if('Should return Github repositories', function(){

    scope.repo="Angular";

httpBackend.expectGET("https://api.github.com/search/repositories?q="+scope.repo)
.response(200,{full_name:"angular/angular"})
httpBackend.flush();
scope.searchResults=scope.searchAPI.get({q: scope.repo});

expect(scope.searchResults.data.items[0].full_name).toBe("angular/angular");




});


});


describe('Testing issues Controlller',function(){

var scope, ctrl, httpBackend;

beforeEach(inject(['repoService',function(service){this.service=service;}]));

beforeEach(inject(function($rootScope,$controller,$httpBackend){
    scope=$rootScope.$new();
ctrl=$controller('issuesController',{$scope:scope});
httpBackend=$httpBackend;

}));

it('shoud have a scope',function(){

expect(scope).toBeDefined();

});

it('can create an instace of service',function(){

    expect(this.service).toBeDefined();
});


if('Should return Github issues', function(){

    scope.repo="Angular";

httpBackend.expectGET("https://api.github.com/search/issues?q="+scope.repo)
.response(200,{full_name:"angular/angular"})
httpBackend.flush();
scope.searchResults=scope.searchAPI.get({q: scope.repo});

expect(scope.searchResults.data.items[0].full_name).toBe("angular/angular");




});


});





});


