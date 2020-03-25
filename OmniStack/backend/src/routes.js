const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.register);

routes.post('/incidents',IncidentController.register);
routes.get('/incidents',IncidentController.list);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.list);

routes.post('/session', SessionController.register);
module.exports = routes;

