'use strict';
// Register `peopleDirectory` component, along with its associated controller and template
angular.module('peopleDirectory', []).component('peopleDirectory', {
    templateUrl: 'people-directory/people-directory.component.html', controller: function ($scope, $rootScope, $http, $uibModal) {
        $scope.user = $rootScope.userName;
        $http.get('../data/companies.json')
            .then(response => $scope.companies = response.data)
        $scope.showDep = (id) => {
            $http.get('../data/departments.json')
                .then(response => $scope.departments = response.data.filter(dep => dep.company_id === id))
        }
        $scope.showEmp = (id) => {
            $http.get('../data/employees.json')
                .then(response => $scope.employees = response.data.filter(emp => emp.department_id === id))
        }
        $scope.selectEmp =(emp) => {
            $scope.selectedEmp = emp;
        }
        $scope.deleteEmp =() => {
            $scope.employees = $scope.employees.filter(item => item.name !== $scope.selectedEmp.name)
        }
        $scope.deleteModal = function(){
            let that = $scope;
            $scope.modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '../core/Modal/confirmDelete/confirmDelete.tpl.html',
                size: 'sm',
                controller:function($scope,$uibModalInstance){
                    $scope.cancelDeleteModal = function(){
                        $uibModalInstance.dismiss('close');
                    }
                    $scope.delete = function(){
                        that.employees = that.employees.filter(item => item.name !== that.selectedEmp.name);
                        $uibModalInstance.close('save');
                    }
                }
            })
        }
        $scope.addEmpModal = function () {
            let list = $scope.employees;
            $scope.modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '../core/Modal/addEmployee/add.tpl.html',
                controller:function($scope,$uibModalInstance){
                    $scope.cancelModal = function(){
                        $uibModalInstance.dismiss('close');
                        $scope.fullName='';
                    }
                    $scope.save = function(){
                        if($scope.fullName==='' || $scope.fullName===undefined) {
                            $scope.err = 'Missing parameter : name'
                        } else {
                            list.push({name: $scope.fullName, department_id: '1'});
                            $scope.fullName = '';
                            $uibModalInstance.close('save');
                        }
                    }
                },
                size: 'lg'
            })
        }
    }
});


