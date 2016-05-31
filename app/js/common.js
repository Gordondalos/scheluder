var main = angular.module('main', []);

main.controller('mainController', ['$scope', function ($scope) {

      $scope.hidePopap = function(){
          $idGroupSelect = $scope.groupSelect;
          id = $scope.inputId;
          $("#"+id).val($idGroupSelect);
          $('form.popap').parent().hide();
    };

    $scope.closePopap = function(){
        $('form.popap').parent().hide();
    };
    $scope.showPopap = function(id){
        $scope.inputId = id;

        $('form.popap').parent().show();
    };

    $scope.groups = [
        { "id": 1, "groupName": "Группа1" },
        { "id": 2, "groupName": "Группа2"  },
        { "id": 3, "groupName": "Группа3"  }
    ];

}]);