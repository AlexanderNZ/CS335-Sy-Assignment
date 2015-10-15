'use strict';

/**
 * @ngdoc function
 * @name securityApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the securityApp
 */
angular.module('securityApp')
  .controller('ShopCtrl', function ($scope) {

    $scope.searchBlurayByName = function() {



      var xhr = new XMLHttpRequest();
      var searchTerm = document.getElementById("searchTerm").value;
      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brsearch?term=" + searchTerm;
      xhr.open("GET", uri, true);
      xhr.setRequestHeader("accept", "application/json");
      xhr.onload = function () {
        var searchResult = JSON.parse(xhr.responseText);
        document.getElementById('displayResult').innerHTML = "";
        console.log("searchResult: " + searchResult);
        console.log(jQuery.isEmptyObject(searchResult));


        //if there are results
        if (xhr.responseText.length != 0) {
          for(var i = 0; i < searchResult.length; i++) {
            var obj = searchResult[i];

            console.log(obj);
            console.log(obj.Id, obj.Title);
            var title = obj.Title;
            var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + obj.Id;

            document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><a href="#"><img class="media-object" src=' + imgUrl + ' alt="..."></a></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4>This is the Movie Text</div> </div>';

          }
        }

        if (jQuery.isEmptyObject(searchResult)) {
          document.getElementById('displayResult').innerHTML = '<div class="alert alert-danger" role="alert">No items matching your query were found :(</div>';
        }

      };
      xhr.send(null);
    };

    $scope.displayAllBlurays = function() {



      var xhr = new XMLHttpRequest();
      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brlist";
      xhr.open("GET", uri, true);
      xhr.setRequestHeader("accept", "application/json");
      xhr.onload = function () {
        var searchResult = JSON.parse(xhr.responseText);
        document.getElementById('displayResult').innerHTML = "";

          for(var i = 0; i < searchResult.length; i++) {
            var obj = searchResult[i];
            console.log(obj);
            console.log(obj.Id, obj.Title);
            var title = obj.Title;
            var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + obj.Id;

            document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><a href="#"><img class="media-object" src=' + imgUrl + ' alt="..."></a></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4>This is the Movie Text</div> </div>';

          }
      };
      xhr.send(null);
    };

    $scope.searchBookByName = function() {



      var xhr = new XMLHttpRequest();
      var searchTerm = document.getElementById("searchTerm").value;
      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/booksearch?term=" + searchTerm;
      xhr.open("GET", uri, true);
      xhr.setRequestHeader("accept", "application/json");
      xhr.onload = function () {
        var searchResult = JSON.parse(xhr.responseText);
        document.getElementById('displayResult').innerHTML = "";
        console.log("searchResult: " + searchResult);
        console.log(jQuery.isEmptyObject(searchResult));


        //if there are results
        if (xhr.responseText.length != 0) {
          for(var i = 0; i < searchResult.length; i++) {
            var obj = searchResult[i];

            console.log(obj);
            console.log(obj.Id, obj.Title);
            var title = obj.Title;
            var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + obj.Id;

            document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><a href="#"><img class="media-object" src=' + imgUrl + ' alt="..."></a></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4>This is the Movie Text</div> </div>';

          }
        }

        if (jQuery.isEmptyObject(searchResult)) {
          document.getElementById('displayResult').innerHTML = '<div class="alert alert-danger" role="alert">No items matching your query were found :(</div>';
        }

      };
      xhr.send(null);
    };

    $scope.displayAllBooks = function() {



      var xhr = new XMLHttpRequest();
      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/booklist";
      xhr.open("GET", uri, true);
      xhr.setRequestHeader("accept", "application/json");
      xhr.onload = function () {
        var searchResult = JSON.parse(xhr.responseText);
        document.getElementById('displayResult').innerHTML = "";

        for(var i = 0; i < searchResult.length; i++) {
          var obj = searchResult[i];
          console.log(obj);
          console.log(obj.Id, obj.Title);
          var title = obj.Title;
          var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + obj.Id;

          document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><a href="#"><img class="media-object" src=' + imgUrl + ' alt="..."></a></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4>This is the Book Text</div> </div>';

        }
      };
      xhr.send(null);
    }

  });
