# Military Tank Shop
This project represents a store of military tanks from several countries, such as the USA and Germany. 

I chose to make it about tanks because I have always been passionate about everything military vehicles from planes to submarines, tanks, etc and plus I am a big fan of [WarThunder](https://warthunder.com/en/)

I made this site to be able to present it to my college class "Database Management Systems" where I chose to make it using React and JavaScript.

# Demo
In this link : https://military-tank-shop-oxg6qq21u-andrei6700.vercel.app/ 
, we have offered the possibility to try this tank shop, with small limitations too:
- data added by the user will not be added to the database;
- data will not be sent by mail;

Whereby a small error will appear after you have clicked on the ``Sent`` but.ton

# Install
Clone the project, enter the project's folder, do: ``npm install`` then ``npm start`` and it's up.

# Startup

Before to start this repo, you need to change the config.js from server folder.:
```javascript
module.exports = {
    USER: 'user',
    PASS: 'password'
}
```
After modifying config.js, you need to open 2 terminals:
 To start the front-end, in the first terminal enter command: ``npm start``.
 After adding the above command, you need to go to the ``server`` folder and enter ``npm run server``.

# Built With
* [React](https://reactjs.org/) - The web framework used.
* [NodeJS](https://nodejs.org) - JavaScript runtime built on Chrome's V8 engine.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The programming language used for the application logic.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - The styling language used for the layout of the application.
* [Cors](https://www.npmjs.com/package/cors) - Middleware for managing same-origin policy in Express.
* [MySQL](https://www.mysql.com/) - elational database management system used for storing data.
* [Express](http://expressjs.com/) - Node JS Framework for building RESTful APIs.
* [Nodemailer](https://nodemailer.com/about/) - Node.js library for sending emails.
* [Body-parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing data from HTTP requests in Express.
* [Yup](https://github.com/jquense/yup) - Form validation.
* [Axios](https://github.com/axios/axios) - Back-end framework

# Features
* Usage of React Hooks
* Form Validation using **YUP**
* send a message with the entered data
* send the data entered in the database

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.





