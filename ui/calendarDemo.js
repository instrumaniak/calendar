/**
 * calendarDemoApp - from angular-ui-caldender demo
 * clean up & adaption by Raziur Rahman, 2017
 */

(function(){

  var calendarDemoApp = angular.module('calendarDemoApp', ['ngResource', 'ngRoute', 'ui.calendar', 'ui.bootstrap']);

  calendarDemoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/',{
          templateUrl: '/calendar.html',
          controller: 'CalendarCtrl'
        }).
        when('/about',{
          templateUrl: '/about.html'
        }).
        otherwise('/');
  }]);

  calendarDemoApp.factory('Event',['$resource', function($resource){
    return $resource('/events/:id', null, {
      'update': {method: 'PUT'}
    });
  }]);


  calendarDemoApp.controller('NavCtrl',['$scope', '$location',
     function($scope, $location){

      $scope.navClass = function(page){
        var currentRoute = $location.path().substring(1) || 'calendar';
        return page === currentRoute ? 'active': '';
      };

       $scope.loadAbout = function(){
          $location.url('/about');
       };

       $scope.loadCalendar = function(){
          $location.url('/');
       };
     }]);

  calendarDemoApp.controller('CalendarCtrl',['$scope', '$http', 'Event', 'uiCalendarConfig',

     function($scope, $http, Event, uiCalendarConfig) {
     
      $scope.events = [];

       var data = Event.query(function(){
          angular.forEach(data, function(data){
          $scope.events.push({
            id: data.id,
            title: data.title,
            start: data.start,
            end: data.end,
            url: data.url,
            stick: true
          })
        });
        
       });


      $scope.alertOnEventClick = function( date, jsEvent, view){
          $scope.alertMessage = (date.title + ' was clicked ');
          
      };
      /* alert on Drop */
       $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
         $scope.alertMessage = ('Event Dropped to make dayDelta ' + delta);
      };
      /* alert on Resize */
      $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
         $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
      };
     
      /* add custom event*/
      $scope.addEvent = function(start, end) {
        var title = prompt("Enter title");
        if(title){

          Event.save({
              title: title,
              start: start,
              end: end
            }, function(){
              $scope.events.push({
              title: title,
              start: start,
              end: end,
              stick: true
            })
            }

            );
          }
        uiCalendarConfig.calendars.myCalendar.fullCalendar('unselect');
      };
      /* remove event */
      $scope.remove = function(index) {
        $scope.events.splice(index,1);
      };
     
      /* config object */
      $scope.uiConfig = {
        calendar:{
          height: 450,
          editable: true,
          selectable: true,
          selectHelper: true,
          eventDurationEditable: true,
          eventResourceEditable: true,
          eventLimit: true,
          navLinks: true,
          header:{
            center: 'title',
            left: 'month,agendaWeek,agendaDay',
            right: 'today prev,next'
          },
          eventClick: $scope.alertOnEventClick,
          eventDrop: $scope.alertOnDrop,
          eventResize: $scope.alertOnResize,
          select: $scope.addEvent,
                
          
        }
      };

      
      $scope.eventSources = [$scope.events];
      
  }]);

})();

