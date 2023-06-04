const express = require('express');
const {
  universityCreateCtrl,
  universityDeleteCtrl,
  universityUpdateCtrl,
  universitiesCtrl,
  universityCtrl,
} = require("../../controllers/universities/universityCtrl")
const universityRouter = express.Router();

// Create a new university
//post/api/v1/universities
universityRouter.post('/', universityCreateCtrl);

// Read a single university by its ID
//GET/api/v1/universities/:id
universityRouter.get('/:id', universityCtrl);

// Read all universities
// GET/api/v1/universities
universityRouter.get('/', universitiesCtrl);

// Update a university by its ID
// PUT/api/v1/universities/:id
universityRouter.put('/:id', universityUpdateCtrl);

// Delete a university by its ID
//DELETE/api/v1/universities/:id
universityRouter.delete('/:id', universityDeleteCtrl);

module.exports = universityRouter;