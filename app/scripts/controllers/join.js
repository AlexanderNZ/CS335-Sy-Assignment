'use strict';

/**
 * @ngdoc function
 * @name securityApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the securityApp
 */
angular.module('securityApp')
  .controller('JoinCtrl', function ($scope) {

    $scope.signUp = function () {

      var json = {};

      json.Address = document.getElementById("nameValue").value;
      json.Name = document.getElementById("passwordValue").value;
      json.Password = document.getElementById("addressValue").value;

      $scope.jsonData = json;

      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/register";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", uri, true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.onload = function () {

        //Check status of request
        var responseText = JSON.parse(xhr.responseText);

        if (responseText === "User name not available") {
          //then the process failed
          console.log("Response Text: " + responseText);
          document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Registration Failed: Username already in use!</div>';
        }
        // If post succeeds, log to console the json that was sent and a confirmation
        if (responseText === "User Registered") {
          console.log("Response Text: " + responseText);
          console.log(json);
          document.getElementById('result').innerHTML = '<div class="alert alert-success" role="alert">Registration Successful!</div>';
        }
      };
      xhr.send(JSON.stringify(json));
    };


  });
