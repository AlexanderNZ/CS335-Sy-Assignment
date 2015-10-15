'use strict';

/**
 * @ngdoc function
 * @name securityApp.controller:PurchaseblurayCtrl
 * @description
 * # PurchaseblurayCtrl
 * Controller of the securityApp
 */
angular.module('securityApp')
  .controller('PurchaseblurayCtrl', function () {

    $scope.showBlurayById = function() {

    };

    $scope.purchaseBluray = function() {

      var data = null;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });

      var blurayId = document.getElementById().value;

      xhr.open("GET", "http://redsox.tcs.auckland.ac.nz/BC/Closed/Service.svc/brbuy?id=" + blurayId);
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader("authorization", "Digest username=\"bond007\", realm=\"Boutique Cassee\", nonce=\"a4b7f03f84930fa895bac99d21f5ab0a\", uri=\"/BC/Closed/Service.svc/brbuy?id=NedKelly\", response=\"abfa4ebc72a2280dc0df2629194c4bab\", opaque=\"4323283221553664\"");
      xhr.setRequestHeader("cache-control", "no-cache");

      xhr.send(data);

    }

  });
