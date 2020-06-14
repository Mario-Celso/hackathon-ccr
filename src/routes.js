const express = require('express');
const routes = express.Router();

//CONTROLLERS
const SessionController = require('./controllers/SessionController');
const UsersController = require('./controllers/UsersController');

const TypeFormController = require('./controllers/TypeFormController');

// const IncidentController = require('./controllers/IncidentController');
// const ProfileController = require('./controllers/ProfileController');


routes.post('/login', SessionController.login);

routes.post('/webhook', TypeFormController.webhook)
routes.get('/webhook', TypeFormController.webhook)

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);



// routes.get('/profile', ProfileController.index);

// routes.get('/incidents', IncidentController.index);
// routes.post('/incidents', IncidentController.create);
// routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;