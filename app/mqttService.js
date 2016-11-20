/**
 * Created by enricoaleandri on 18/09/16.
 */


var MqttService  = function(){
        MqttService.prototype.config = require("./config/mqttConfig.json");

        MqttService.prototype.init = function(){

            var mqtt = require('mqtt');
            var configMQTT = this.config;


            var options = configMQTT.credential;

            var client = mqtt.connect(options);
            this.client = client;
            client.on('connect', function () { // When connected

                // subscribe to a topic
                client.subscribe(configMQTT.logTopic, function() {
                    // when a message arrives, do something with it
                    client.on('message', function(topic, message, packet) {
                        console.log("Received '" + message + "' on '" + topic + "'");
                    });
                });

            });

        };
        MqttService.prototype.isConnected = function() {
            if (this.client.connected())
                return true;
            else {
                this.init();
                return false;
            }
        };
        MqttService.prototype.sendCommand = function(command) {
            this.client.publish(this.config.clientTopic, command, function () {
                    console.log("Inviato comando  : "+command)
            });

        }
}

module.exports = new MqttService();