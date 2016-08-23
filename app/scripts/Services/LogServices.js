
ScalyrApp.service('LogService', ['$http', function($http){

    this.logApiURL = "https://www.scalyr.com/fake/getLiveTail";
    
    this.getLogsSer = function(inputString){
        
        var logPromise = $http.get(this.logApiURL, {
            params:{
                query:inputString
            }
        });

        return logPromise;
    }
    
}])


