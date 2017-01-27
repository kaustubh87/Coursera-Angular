/* Using ng-route */
/*angular.module('restaurantapp', ['ngRoute']).config(function($routeProvider){
    $routeProvider
        //route for contact us page
        .when('/contactus',{
            templateUrl : 'contactus.html',
            controller : 'ContactController'
    })
        //route for menu page 
        .when('/menu', {
            templateUrl : 'menu.html',
            controller: 'MenuController'
    })
        //route for dish details page
        .when('/menu/:id', {
            templateUrl : 'dish_detail.html',
            controller: 'DishDetailController'
    })
        .otherwise('/contactus');
});
*/

/*Using UI-ROUTER */

angular.module('restaurantapp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
        .state('app',{
            url: '/',
            views: {
                'header' : {
                    templateUrl: 'views/header.html',
                },
                'content' : {
                    template: '<h1>To be Completed</h1>',
                    controller: 'IndexController'
                },
                'footer' : {
                    templateUrl: 'views/footer.html'
                }
            }
    })
    
    //Route for about us
        .state('app.aboutus', {
            url:'aboutus',
            views: {
                'content@' :{
                    template: '<h1>To be completed</h1>',
                    controller: 'AboutController'
                }
            }
    })
    
    //Route for Contact us
        .state('app.contactus',{
            url: 'contactus',
            views: {
                'content@' :{
                    templateUrl: 'views/contactus.html',
                    controller: 'ContactController'
                }
            }
    })
    
    //Route for Menu
    
        .state('app.menu',{
            url: 'menu',
            views: {
                'content@' :{
                    templateUrl: 'views/menu.html',
                    controller: 'MenuController'
                }
            }
    })
    
    //Route for the dish detail page
    
        .state('app.dishdetails', {
            url: 'menu/:id',
            views: {
                'content@' : {
                    templateUrl : 'views/dishdetail.html',
                    controller: 'DishDetailController'
                }
            }
    });
    
    $urlRouterProvider.otherwise('/');
    
});