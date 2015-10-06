var app = angular.module('myApp', []);

app.directive('logIn', function(){
  return{
    restrict: 'E',
    transclude: true,
    template: '<div ng-transclude></div>' +
    '<form>Email:<br>' +
    '<input type="email" name="user-email">' +
    '<br>' +
    'Password:<br>' +
    '<input type="password" name="user-password"><br>' +
    '<br><input type = "submit" value = "Submit"></form>'
  };
});
