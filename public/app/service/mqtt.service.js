/**
 * Created by enricoaleandri on 20/11/16.
 */

(function () {
  'use strict'
  /** @ngInject */
  function mqttService(ENDPOINT_MQTT, $http) {


    function callMqttService(button){
      var data = {
        bottone : button
      };
      var request = {
        method : "POST",
        url :  ENDPOINT_MQTT,
        data : data
      }
      return $http(request)
        .then(function (response) {
          console.log("response : "+response.message);
        }).catch(function (response) {

          console.log("Error : "+response.message);
        });
    }
    function callFirstButton() {
      return callMqttService(1);
    }
    function callSecondButton() {
      return callMqttService(2);
    }
    function callThirdButton() {
      return callMqttService(3);
    }
    return {
      callFirstButton : callFirstButton,
      callSecondButton : callSecondButton,
      callThirdButton : callThirdButton
    }
  }

  angular.module('CitofonoIot.service')
    .factory('mqttService', mqttService)
})()