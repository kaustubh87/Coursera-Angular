angular.module('restaurantapp')
    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory){
                
                $scope.tab = 1;
                $scope.filtText = '';
                $scope.showDetails = false;
                
                $scope.dishes = menuFactory.getDishes().query(
                function(response){
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response){
                    $scope.message = "Error: " +response.status + " " +response.statusText;
                }
                
                );
               
                
                $scope.select = function(setTab){
                    $scope.tab = setTab;
                    if($scope.tab === 2)
                        {
                            $scope.filtText ="appetizer";
                        }
                    else if($scope.tab === 3){
                        $scope.filtText = "mains";
                    }
                    else if($scope.tab === 4){
                        $scope.filtText = "dessert";
                    }
                    else{
                        $scope.filtText = "";
                    }
                    
                }
                
                $scope.isSelected = function(checkTab){
                    return ($scope.tab === checkTab);
                }
                
                $scope.toggleDetails = function(){
                    $scope.showDetails = !$scope.showDetails;
                }
               
                
            }])
            .controller('ContactController', ['$scope', function($scope){
                
                $scope.feedback = {
                    mychannel : "",
                    firstName: "",
                    lastName: "",
                    agree: false,
                    email:""
                };
                
                var channels = [{value:"tel", label:"Tel."},
                                {value:"Email", label: "Email"}
                               ];
                
                $scope.channels = channels;
                $scope.invalidChannelSelection = false;
                
            }])
            .controller('FeedbackController', ['$scope', function($scope){
                
                $scope.sendFeedback = function(){
                    console.log($scope.feedback);
                    if($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel){
                        $scope.invalidChannelSelection = true;
                        console.log('incorrect');
                    }
                    else
                        {
                            $scope.invalidChannelSelection = false;
                            $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                              agree:false, email:""};
                            $scope.feedback.mychannel = "";
                            $scope.feedbackForm.$setPristine();
                            console.log($scope.feedback);
                        }
                };
                
            }]).controller('DishDetailController', ['$scope', /*'$routeParams'*/ '$stateParams', 'menuFactory', function($scope, /*$routeParams*/ $stateParams, menuFactory) {

            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                function(response){
                    $scope.dish = response;
                    $scope.showDish = true;
                    
                },
                
                function(response){
                    $scope.message= "Error: " +response.status+ " " +response.statusText;
                }
            );
            
          
            
        }]).controller('DishCommentController', ['$scope', 'menuFactory',function($scope, menuFactory) {
            
            //Step 1: Create a JavaScript object to hold the comment from the form
            
            
            $scope.feedback = {
                rating: '5',
                comment:'',
                author:'',
                date: ''
                
            };
         
    
            $scope.submitComment = function () {
                
                
                console.log($scope.feedback);
                //console.log($scope.dish);
                //Step 2: This is how you record the date
               // "The date property of your JavaScript object holding the comment" = new //Date().toISOString();
                
                $scope.feedback.date = new Date().toISOString();
                
                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.feedback);
                
                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                                $scope.commentForm.$setPristine();
                                $scope.feedback = {rating:5, comment:"", author:"", date:""};
                
                //Step 4: reset your form to pristine
                
                $scope.commentForm.$setPristine();
                
                
                //Step 5: reset your JavaScript object that holds your comment
                $scope.feedback = '';
            }
        }])
        .controller('IndexController', ['$scope','menuFactory', 'corporateFactory',function($scope, menuFactory, corporateFactory){
            
           var promotions = menuFactory.getPromotion();
            
           $scope.promos = menuFactory.getPromotion().get({id:0})
           .$promise.then(
            function(response){
                $scope.promos = response;
                
            },
               function(response){
                   $scope.message = "Error: " +response.status+ " " +response.statusText;
               }
           );
            
          $scope.first_dish = menuFactory.getDishes().get({id:0})
          .$promise.then(
            function(response){
                $scope.dish = response;
                $scope.showDish = true;
            },
            function(response){
                $scope.message = "Error: " +response.status+ " " +response.statusText;
            }
          );
          
            
           
           $scope.executive_leader = corporateFactory.getLeaders().get({id:0})
           .$promise.then(
           function(response){
               $scope.leaders = response;
               
           },
               function(response){
                   $scope.message ="Error: " +response.status+" " +response.statusText;
               }
           )
          
            
            
        }])
        .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory){
            
            var leaders = corporateFactory.getLeaders();
            $scope.leader_list = leaders;
           
        }])

;

        
