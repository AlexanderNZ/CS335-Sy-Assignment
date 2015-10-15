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

        //if there are results
        if (xhr.responseText.length !== 0) {
          for(var i = 0; i < searchResult.length; i++) {
            var obj = searchResult[i];
            var title = obj.Title;
            var id = obj.Id;
            var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + obj.Id;

            document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><img class="media-object" src=' + imgUrl + ' alt="..."></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4><img src="images/buy-now.jpg" height="50px" ng-click="purchaseBluray(id)">' + id + '</div> <button type="button" class="btn btn-primary" ng-click="purchaseBluray(' + id + ')">Buy</button> </div>';

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
            var title = obj.Title;
            var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + obj.Id;

            document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><img class="media-object" src=' + imgUrl + ' alt="..."></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4><a href="#/purchaseBluray"><img src="images/buy-now.jpg" height="50px"></a></div> </div>';

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

        //if there are results
        if (xhr.responseText.length !== 0) {
          for(var i = 0; i < searchResult.length; i++) {
            var obj = searchResult[i];
            var title = obj.Title;
            var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + obj.Id;

            document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><img class="media-object" src=' + imgUrl + ' alt="..."></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4><a href="#/purchaseBook"><img src="images/buy-now.jpg" height="50px"></a></div> </div>';

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
          var title = obj.Title;
          var imgUrl = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + obj.Id;

          document.getElementById('displayResult').innerHTML += '<div class="media"><div class="media-left media-middle"><img class="media-object" src=' + imgUrl + ' alt="..."></div><div class="media-body"><h4 id="movieTitle" class="media-heading">' + title + '</h4><a href="#/purchaseBook"><img src="images/buy-now.jpg" height="50px"></a></div> </div>';

        }
      };
      xhr.send(null);
    };

    $scope.purchaseBluray = function(id) {

      var data = null;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });

      xhr.open("GET", "http://redsox.tcs.auckland.ac.nz/BC/Closed/Service.svc/brbuy?id=" + id);
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader("authorization", "Digest username=\"bond007\", realm=\"Boutique Cassee\", nonce=\"a4b7f03f84930fa895bac99d21f5ab0a\", uri=\"/BC/Closed/Service.svc/brbuy?id=NedKelly\", response=\"abfa4ebc72a2280dc0df2629194c4bab\", opaque=\"4323283221553664\"");
      xhr.setRequestHeader("cache-control", "no-cache");

      xhr.send(data);
      var response = xhr.responseText;
      console.log("Trying to open alert window");
      window.alert(response);

    }

  });
