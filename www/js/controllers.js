angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('TasksCtrl', function($scope, Tasks) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.tasks = Tasks.all()
    .then(function(tasks){
      $scope.tasks = tasks;
      console.log($scope.tasks);
    },
    function(data, $location){
      console.log("Error fetching data.");
      $location.path('tab.home');
    });
})

.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.getTaskById($stateParams.taskId)
    .then(function(task){
      $scope.task = task[0];
      console.log($scope.task);
    },
    function(data){
      console.log("Error fetching data.");
    });
})

.controller('HistoryCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
