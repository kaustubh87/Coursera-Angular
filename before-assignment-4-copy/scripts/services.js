'use strict';

angular.module('restaurantapp')
        .constant("baseURL", "http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
                this.getDishes = function(){
                    
                    //return $http.get(baseURL + "dishes");
                    
                    return $resource(baseURL +"dishes/:id", null, {'update':{method:'PUT'}});
                    
                };
            
                this.getPromotion = function(){
                    return $resource(baseURL + "promotions/:id", null, {'update':{method:'PUT'}});
                };
    
              /*
            this.getDish = function (index) {
                    
                    //return dishes[index];
                    
                    return $http.get(baseURL+"dishes/"+index);
                };
    */
                        
        }])

        .factory('corporateFactory', function($resource, baseURL) {
    
            var corpfac = {};
   /* 
    corpfac.getLeaders = function(){
            return leadership;
        };
    
    corpfac.getLeader = function (index){
        return leadership[index];
    };
    */ 
           
    corpfac.getLeaders = function(){
            return $resource(baseURL+ "leadership/:id" ,null, {'update': {method:'PUT'}});
        };

    return corpfac;

        })
    .factory('feedbackFactory', function($resource, baseURL){
    var feedbackFac = {};
    feedbackFac.getFeedback = function(){
        return $resource(baseURL+"feedback/:id", null, {'update': {method:'PUT'}});
    }
    return feedbackFac;
});