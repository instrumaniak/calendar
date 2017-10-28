/**
 * calendarDemoApp - from angular-ui-caldender demo
 * clean up & adaption by Raziur Rahman, 2017
 */
var calendarDemoApp = angular.module('calendarDemoApp', ['ui.calendar', 'ui.bootstrap']);

calendarDemoApp.controller('CalendarCtrl',
   function($scope, $http, uiCalendarConfig) {
   
    $scope.events = [];

    $http.get('/events.json').then(function(response){
      var data = response.data;
      
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
          $scope.events.push({
            title: title,
            start: start,
            end: end,
            stick: true
          });
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
        select: $scope.addEvent
        
        
      }
    };

    
    /* event sources array*/
    $scope.eventSources = [$scope.events];
    
});
/* EOF */
