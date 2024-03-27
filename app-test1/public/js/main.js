  var app = angular.module('myApp', []);

  app.controller('myController', function($scope, $window) {
    $scope.isOpen = false;
    const teste = {
      a: ['a', 'b', 'c'],
      b: ['teste1', 'teste2', 'teste3'],
      c: ['asdasd', 'asdasdfff', 'cccccccc'],
    };
    $scope.values = [];
    $scope.isScreenLarge = $window.innerWidth <= 768;
    $scope.viewMode =  $scope.isScreenLarge? 'left': 'default';

    $scope.resetViewMode = function () {
      $scope.viewMode = $scope.isScreenLarge? 'left': 'default';
    }

    $scope.closeDropdown = function() {
      $scope.isOpen = false;
      $scope.resetViewMode();
    }
    
    $scope.handleToggleDropdown = function(event) {
      const newValue = !$scope.isOpen;
      $scope.isOpen = newValue;
      event.stopPropagation();
    };
    
    $scope.addValues = function(value) {
      if ($scope.isScreenLarge) {
        $scope.viewMode = 'left';
      }
      $scope.values = teste[value];
      if ($scope.isScreenLarge) {
        $scope.viewMode = 'right';
      }
    };

    angular.element($window).bind('resize', function() {
      $scope.$apply(function() {
        $scope.isScreenLarge = $window.innerWidth <= 768;
        if ($scope.isScreenLarge && $scope.viewMode === 'default') {
          $scope.viewMode = 'left';
        }
        if (!$scope.isScreenLarge) {
          $scope.viewMode = 'default';
        }
        
      });
    });

    angular.element(document).on('click', function(event) {
      let popup = angular.element(document.querySelector('.drop-down'));
      console.log('co')
      if (popup.length > 0 && !popup[0].contains(event.target)) {
          console.log('saaaaaaaa')
          $scope.$apply($scope.closeDropdown());
      }
    });
  });
