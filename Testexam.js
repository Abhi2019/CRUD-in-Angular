/// <reference path="angular.min.js" />
var app = angular.module('moduleapp', []);
app.controller('testc', function ($scope) {
    $scope.Name = '';
    $scope.Age = '';
    $scope.Employee = [{ Name: '', Age: '' }];
    $scope.editdetails = [];
    $scope.name = "Abhijit";
    $scope.buttonName = 'Submit';
    $scope.onclick = function () {
        $scope.buttonName = 'Submit';
        $('#adddiv').modal('show');
      //  $('#addiv').modal('show');
     

    }
    $scope.onDelete = function (index) {
         
        $scope.Employee.splice(index,1);

    }
    $scope.onaddData = function () {
        if ($scope.buttonName == 'Submit') {
            $scope.Employee.push({ Name: $scope.Name, Age: $scope.Age });
        }
        else
        {   //$scope.editdetails.push({ Name: $scope.Name, Age: $scope.Age })
        $scope.Employee.splice($scope.index, 1, { Name: $scope.Name, Age: $scope.Age });
       
        }
        $('#adddiv').modal('hide');
    }
    $scope.onEdit = function (index) {
        $scope.index = index;
        $scope.buttonName = 'Edit';
        $('#adddiv').modal('show');
        $scope.editEmployee = $scope.Employee[index];
        $scope.Name = $scope.editEmployee.Name;
        $scope.Age = $scope.editEmployee.Age;
     

    }
});
