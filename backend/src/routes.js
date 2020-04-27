const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
* Rotas do OngController
*/
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * Rotas do IncidentController
 */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/**
 * Rotas do ProfileController
 */
routes.get('/profile', ProfileController.index);

/**
 * Rotas do SessionController
 */
routes.post('/sessions', SessionController.create);

module.exports = routes;