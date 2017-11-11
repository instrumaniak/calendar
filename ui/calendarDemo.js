/**
 * calendarDemoApp - from angular-ui-caldender demo
 * clean up, adaption and coding by Raziur Rahman, 2017
 */
(function() {

  var calendarDemoApp = angular.module('calendarDemoApp', 
    ['ngResource', 'ngRoute', 'ui.calendar', 'ui.bootstrap']);

  //---------- Config Routing ---------->> 
  calendarDemoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/calendar.html',
      controller: 'CalendarCtrl'
    }).
    when('/about', {
      templateUrl: '/about.html'
    }).
    when('/events/:id', {
      templateUrl: '/events.html',
      controller: 'EventCtrl'
    }).
    when('/events', {
      templateUrl: '/events.html',
      controller: 'EventCtrl'
    }).
    otherwise('/');
  }]); //----------<< Routing.

  //---------- Config $resource ---------->> 
  calendarDemoApp.factory('Event', ['$resource', function($resource) {
    return $resource('/events/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  }]); //----------<< Resource

  //---------- Navigation bar ||controller|| ---------->> 
  calendarDemoApp.controller('NavCtrl', ['$scope', '$location',
    function($scope, $location) {

      $scope.navClass = function(page) {
        var currentRoute = $location.path().substring(1) || 'calendar';
        return page === currentRoute ? 'active' : '';
      };

      $scope.loadAbout = function() {
        $location.url('/about');
      };

      $scope.loadCalendar = function() {
        $location.url('/');
      };
    }
  ]); //----------<< NavCtrl

  //---------- Calendar view ||controller|| ----------> 
  calendarDemoApp.controller('CalendarCtrl',

    ['$scope', '$compile', '$location', 'Event', 'uiCalendarConfig',

      function($scope, $compile, $location, Event, uiCalendarConfig) {

        $scope.events = Event.query(function() {
          angular.forEach($scope.events, function(item) {
            item.stick = true; // stick is required for month switching blankout issue
          });
        });


        $scope.eventClick = function(data, jsEvent, view) {
          
          $location.url("/events/" + data._id);

        };
        
        $scope.addEvent = function(start, end) {
          
          $location.url('/events?start='+start+'&end='+end);
          
          uiCalendarConfig.calendars.myCalendar.fullCalendar('unselect');
        };
    
          
        /* Render Tooltip */
        $scope.eventRender = function( event, element, view ) { 
            element.attr({'uib-tooltip': event.title,
                         'tooltip-append-to-body': true});
            $compile(element)($scope);
        };
          
        // Configure angular-ui-calendar
        $scope.uiConfig = {
          calendar: {
            height: 450,
            editable: true,
            selectable: true,
            selectHelper: true,
            eventDurationEditable: true,
            eventResourceEditable: true,
            eventLimit: true,
            navLinks: true,
            header: {
              center: 'title',
              left: 'month,agendaWeek,agendaDay',
              right: 'today prev,next'
            },
            eventClick: $scope.eventClick,
            select: $scope.addEvent,
            eventRender: $scope.eventRender
          }
        };

        $scope.eventSources = [$scope.events];

      }
    ]); //----------<< CalendarCtrl

  //---------- EventCtrl ---------->>
  calendarDemoApp.controller('EventCtrl', ['$scope', '$routeParams', 'Event', '$location',
    function($scope, $routeParams, Event, $location) {
      
      if ($routeParams.id) {
        $scope.eventData = Event.get({
          id: $routeParams.id
        });
        $scope.newEvent = false;
      } else {
        $scope.newEvent = true;
        $scope.eventData = {
          start: new Date(parseInt($routeParams.start)),
          end: new Date(parseInt($routeParams.end))
        }
      }

      $scope.Cancel = function() {
        $location.url('/');
      };

      $scope.Save = function() {
        if($routeParams.id){
            Event.update({
              id: $routeParams.id
            }, $scope.eventData, function() {
              $location.url('/');
            });  
        } else {
            Event.save($scope.eventData, function() {
              $location.url('/');
            });
        }        
      };

      $scope.Delete = function(){
            Event.remove({id: $routeParams.id}, function(){
              $location.url('/');
            });
      };   

    }
  ]);
  //----------<< EventCtrl

})();