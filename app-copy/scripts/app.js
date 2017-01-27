angular.module('restaurantapp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider)
           {
    
            $stateProvider
            
                .state('app', {
                        url: '/',
                        views: {
                            'header': {
                                templateUrl : 'views/header.html'
                            },
                            'content' : {
                                template: '<h1>To be Completed</h1>',
                                controller: 'IndexController'
                            },
                            'footer': {
                                templateUrl : 'views/footer.html'
                            }
                        }
                
                        })
            
                .state('app.aboutus',{
                
                        url: 'aboutus',
                        views: {
                            'content@':{
                                template: '<h1>To be completed</h1>',
                                controller: 'AboutController'
                            }
                            
                        }
                        })
            
                .state('app.contactus', {
                        url: 'contactus',
                        views: {
                            'content@':{
                                templateUrl: 'views/contactus.html',
                                controller: 'ContactController'
                            }
                        } 
                    })
            
                .state('app.menu',{
                        url: 'menu',
                        views: {
                            'content@':{
                                templateUrl: 'views/menu.html',
                                controller: 'MenuController'
                            }
                        }
                
                
                    })
            
                .state('app.dishdetails', {
                        url:'menu/:id',
                        views:{
                            'content@' :{
                                templateUrl: 'views/dish_detail.html',
                                controller: 'DishDetailController'
                            }
                        }
                
                
                
                    });
    
                    $urlRouterProvider.otherwise('/');
    
    
})




;

        
