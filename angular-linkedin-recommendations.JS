/*!
 * angular-linkedin-recommendations 1.0.1
 * Pam Halligan-Sims
 * https://github.com/phsims/angular-linkedin-recommendations.git
 * License: MIT
 */
(function(){
  "use strict";
  angular
  .module("angular.linkedin",[])

  .factory("LinkedinRec", ['$http', function($http) {
    return {
        getData: function(response){
          return $http({
              method: 'JSONP',
              url: 'https://api.linkedin.com/v1/people/~:(recommendations-received)?oauth2_access_token=[ACCESS TOKEN]&alt=json-in-script&callback=JSON_CALLBACK',
              cache: 'false',
              params: {
                  format: 'jsonp',
                  json_callback: 'JSON_CALLBACK'
              }
          })
          .then(function(response){
            var scope = response.data;
            return scope;
          });
        }
      }
    }])

  .controller('linkedinOutput',function($scope, LinkedinRec){
    LinkedinRec.getData().then(function(data){
      $scope.recommendations = data;
      $scope.myRecommendations = $scope.recommendations.recommendationsReceived.values;
      console.log($scope.myRecommendations);
    });
  });
}());
