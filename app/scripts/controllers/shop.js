'use strict';

/**
 * @ngdoc function
 * @name securityApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the securityApp
 */
angular.module('securityApp')
  .controller('ShopCtrl', function ($scope, $rootScope) {

    $scope.searchBlurayByName = function() {

      var xhr = new XMLHttpRequest();
      var searchTerm = document.getElementById("searchTerm").value;
      var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brsearch?term=" + searchTerm;
      xhr.open("GET", uri, true);
      xhr.setRequestHeader("accept", "application/json");
      xhr.onload = function () {
        var searchResult = JSON.parse(xhr.responseText);

        //if there are results
        if (xhr.responseText.length !== 0) {
          var buyingArray = [];
          for(var i = 0; i < searchResult.length; i++) {
            var obj = {};
            obj.title = searchResult[i].Title;
            obj.id = searchResult[i].Id;
            obj.img = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + searchResult[i].Id;
            buyingArray.push(obj);
          }
          $scope.buyingArray = buyingArray;
          console.log("buying array:" + buyingArray[0].id);
          $rootScope.$digest();
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

        //if there are results
        if (xhr.responseText.length !== 0) {
          var buyingArray = [];
          for(var i = 0; i < searchResult.length; i++) {
            var obj = {};
            obj.title = searchResult[i].Title;
            obj.id = searchResult[i].Id;
            obj.img = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/brimg?id=" + searchResult[i].Id;
            buyingArray.push(obj);
            console.log(buyingArray.length);
          }
          $scope.buyingArray = buyingArray;
          console.log("buying array:" + buyingArray[0].id);
          $rootScope.$digest();
        }

        if (jQuery.isEmptyObject(searchResult)) {
          document.getElementById('displayResult').innerHTML = '<div class="alert alert-danger" role="alert">No items matching your query were found :(</div>';
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

        //if there are results
        if (xhr.responseText.length !== 0) {
          var buyingArray = [];
          for(var i = 0; i < searchResult.length; i++) {
            var obj = {};
            obj.title = searchResult[i].Title;
            obj.id = searchResult[i].Id;
            obj.img = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + searchResult[i].Id;
            buyingArray.push(obj);
          }
          $scope.buyingArray = buyingArray;
          console.log("buying array:" + buyingArray[0].id);
          $rootScope.$digest();
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

        //if there are results
        if (xhr.responseText.length !== 0) {
          var buyingArray = [];
          for(var i = 0; i < searchResult.length; i++) {
            var obj = {};
            obj.title = searchResult[i].Title;
            obj.id = searchResult[i].Id;
            obj.img = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=" + searchResult[i].Id;
            buyingArray.push(obj);
            console.log(buyingArray.length);
          }
          $scope.buyingArray = buyingArray;
          console.log("buying array:" + buyingArray[0].id);
          $rootScope.$digest();
        }

        if (jQuery.isEmptyObject(searchResult)) {
          document.getElementById('displayResult').innerHTML = '<div class="alert alert-danger" role="alert">No items matching your query were found :(</div>';
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
      console.log("id is " + id);
      window.alert("Congrats! You bought the item! Mano said that calling the webservice for this would be fine even though the service doesn't allow it");

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

      xhr.open("GET", "http://redsox.tcs.auckland.ac.nz/BC/Closed/Service.svc/bookbuy?id=" + id);
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader("authorization", "Digest username=\"bond007\", realm=\"Boutique Cassee\", nonce=\"a4b7f03f84930fa895bac99d21f5ab0a\", uri=\"/BC/Closed/Service.svc/brbuy?id=NedKelly\", response=\"abfa4ebc72a2280dc0df2629194c4bab\", opaque=\"4323283221553664\"");
      xhr.setRequestHeader("cache-control", "no-cache");

      xhr.send(data);
      var response = xhr.responseText;
      console.log("Trying to open alert window");
      window.alert("Congrats! You bought the item! Mano said that calling the webservice for this would be fine even though the service doesn't allow it");

    }

  });
