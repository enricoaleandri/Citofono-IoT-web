# Doorbell Iot

This is a template, to pilot a IoT doorbell made with ESP 8266 connected by MQTT, the authentication is made with firebase runned by node backend passport rules.
Nothing special, just a nice template to improve.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/enricoaleandri/Citofono-IoT-web.git # or clone your own fork
$ cd Citofono-IoT-web
$ npm install
$ bower install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

In the /public directory you have exposed web pages ( based on Angular ) in modular patten, in the /views directory
there are the Node pages
