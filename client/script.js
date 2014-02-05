function FetchCtrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = 'http-hello.html';
  $scope.test = 'fish pies';
 
  $scope.fetch = function() {
    $scope.code = null;
    $scope.response = null;
 
    $http.jsonp('http://sonyainc.net/json/get_todo_data.php?format=jsonp&callback=JSON_CALLBACK').success(function(data) {
        $scope.data = data;
        alert("what have we got: "+ $scope.data );
    }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
  };
 
  $scope.updateModel = function(method, url) {
    $scope.method = method;
    $scope.url = url;
  };
}
