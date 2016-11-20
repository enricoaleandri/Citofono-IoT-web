/**
 * Created by enricoaleandri on 18/09/16.
 */

module.exports = function (app, router) {

  var mqttService = require("../mqttService");
  router.get('/mqtt', function(req, res) {

      var command = '{"event":1}';
      mqttService.sendCommand(command);

      res.json({message: 'Bottone 1 invocato'});
  });
  
};
