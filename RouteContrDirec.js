(function() {
var myApp = angular.module('helloworld', ['ui.router','ngMessages','toaster']);

myApp.config(function($stateProvider) {
   $stateProvider
   .state('Form', {
            url: "/form",
            url: "",
                views: {
                    "formdata": {
                        template: '<div ui-view></div>',

                    }
                }

  
        })   .state('details', {
            url: "/details",
            url: "",
                views: {
                    "Detaildata": {
                        template: '<div ui-view></div>',

                    }
                }

  
        })
     .state('Form.formdata', {
            url: "/form",
            templateUrl: 'templates/AddForm.html',
            controller:'addFormcontrol',

                      
        })  .state('details.Detaildata', {
            url: "/details",
            templateUrl: 'templates/employeedetails.html',
            controller:'DetailController',

                      
        })

});
myApp.directive('nuLl', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {

            ctrl.$validators.null = function(modelValue, viewValue) {

                if (viewValue) {
                    return true
                }
                return false;
            };

        }
    };
});
myApp.directive('emailNumber', function() {
    return {


        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {

            ctrl.$validators.null = function(modelValue, viewValue) {

                if (viewValue) {
                    return true
                }
                return false;
            };
            ctrl.$validators.email1 = function(modelValue, viewValue) {

                if (/^\w+[a-zA-Z.0-9$_-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(viewValue)) {
                    return true;
                }
                return false;
            };
        }
    };
});
myApp.directive('mobleNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {

            ctrl.$validators.null = function(modelValue, viewValue) {

                if (viewValue) {
                    return true
                }
                return false;
            };
            ctrl.$validators.mob = function(modelValue, viewValue) {

                if (/^[0-9][0-9]{9}$/.test(viewValue)) {
                    return true;
                }
                return false;
            };
        }
    };
});
myApp.controller('addFormcontrol',function($scope,toaster,$window) {
$scope.arraydata=[];
 // $cookies.remove('data');
$scope.saveEmployee=function(valid) {

	if(valid==true){
 var original = $scope.employer;
$scope.employer= angular.copy(original);

$scope.arraydata.push($scope.employer)
$window.sessionStorage.setItem("data",JSON.stringify($scope.arraydata))
       
             toaster.pop('success', "Successfuly saved your details",);
 $scope.employer={};
$scope.employer.gender="Male";
	}

}



});
myApp.controller('DetailController',function($scope,$window) {
$scope.getemployee=function() {
                $scope.getc=  $window.sessionStorage.getItem('data');
                  $scope.getData=  JSON.parse($scope.getc);
             


}
$scope.getemployee();
               
})
})();

