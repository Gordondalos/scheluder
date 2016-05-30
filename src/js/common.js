var main = angular.module('main', []);

main.controller('mainController', ['$scope', function ($scope) {

      $scope.hidePopap = function(){
          $idGroupSelect = $scope.groupSelect;
          id = $scope.inputId;
          $("#"+id).val($idGroupSelect);
          $('form').parent().hide();
    };

    $scope.closePopap = function(){
        $('form').parent().hide();
    };
    $scope.showPopap = function(id){
        $scope.inputId = id;

        $('form').parent().show();
    };

    $scope.groups = [
        { "id": 1, "groupName": "Группа1" },
        { "id": 2, "groupName": "Группа2"  },
        { "id": 3, "groupName": "Группа3"  }
    ];

}]);

