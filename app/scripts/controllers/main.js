
    'use strict';

    var ScalyrApp = angular.module('scalyrApp')
        .controller('MainCtrl', ['$scope', '$http', 'LogService', '$timeout', '$interval', '$filter', function($scope, $http, LogService, $timeout, $interval, $filter) {

            $scope.logListMaxLength = 100; // define max length of the list
            $scope.logList = []; //for containing the data 
            // promise success function
            $scope.success = function(response) {
                console.log($scope.logList);
                //given condition 
                if (response.data.status === 'success') {
                    var entries = response.data.entries;
                    var len = entries.length;
                    console.log(len);
                    //for loop for pushing the data into the loglist   
                    for (var i = 0; i < len; i++) {
                        $scope.logList.push(entries[i]);
                    }
                    // sorting the list according to timestamp //given condition
                    // (-) for descending
                    $scope.logList = $filter('orderBy')($scope.logList, 'timestamp');
                    //if list exceeds 100 , splice it 
                    //can also do by checking if 100 reached and then replacing the extra elements but that would need a for loop and increase time complexity
                    if ($scope.logList.length > $scope.logListMaxLength) {
                        $scope.logList.splice(100, $scope.logList.length - 100);
                    }
                }
            };

            //promise failure condition
            $scope.failure = function(error) {
                console.log(error);
            };

            // get log from service
            $scope.getLogs = function() {
                //passing a random paramater
                var logPromise = LogService.getLogsSer('hi');
                logPromise.then($scope.success, $scope.failure);
            };

            //for initial displaying of data// to avoid blank screen for first 5sec
            $scope.getLogs();

            $interval($scope.getLogs, 5000);

        }]);


