// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html"
      }
    }
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html"
      }
    }
  })
  
  .state('app.tabs', {
    url: "/tabs",
    abstract: true,
    views:{
      'menuContent': {
        templateUrl: "templates/tabs.html"
      }
    }
  })
  
  .state('app.tabs.groups', {
    url: "/groups",
    views: {
      'tabs-groups': {
        templateUrl: "templates/groups.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })
  
  .state('app.tabs.events', {
    url: '/events',
    views: {
      'tabs-account': {
        templateUrl: 'templates/events.html'
      }
    }
  })
  
  .state('app.tabs.single', {
    url: "/groups/:playlistId",
    views: {
      'tabs-groups': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tabs/groups');
});
