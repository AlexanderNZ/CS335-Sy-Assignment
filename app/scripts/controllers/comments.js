'use strict';

/**
 * @ngdoc function
 * @name securityApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the securityApp
 */
angular.module('securityApp')
  .controller('CommentsCtrl', function ($scope) {

    $scope.sendComment = function () {

      var commentString = document.getElementById("commentText").value;
      var username = document.getElementById("commenterName").value;
      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/comment?name=" + username;

      var requestResult;

      var xhr = new XMLHttpRequest();
      xhr.open("POST", uri, true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.onload = function () {

        //Check status of request
        var responseText = JSON.parse(xhr.responseText);

        if (responseText !== commentString) {
          //then the process failed
          console.log(responseText);
          console.log("Comment POST failed");
          document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Comment POST Failed!</div>';
        }
        // If post succeeds, log to console the json that was sent and a confirmation
        if (responseText === commentString) {
          console.log("Response Text: " + responseText);
          console.log("Comment String: " + commentString);
          document.getElementById('result').innerHTML = '<div class="alert alert-success" role="alert">Comment POST Successful!</div>';
        }

        $scope.requestResult = requestResult;
        document.getElementById('commentsIframe').contentWindow.location = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/htmlcomments";
      };
      xhr.send(JSON.stringify(commentString));
    };

    $scope.getComments = function() {


      var xhr = new XMLHttpRequest();
      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/htmlcomments";
      xhr.open("GET", uri, true);
      xhr.onload = function () {
      };
      xhr.send(null);
    };

  });
