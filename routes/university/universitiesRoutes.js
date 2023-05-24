const express = require('express');
const {
  universityCreatCtrl,
  universityDeleteCtrl,
  universityUpdateCtrl,
  universitiesCtrl,
  universityCtrl,
} = require("../../controllers/universities/universityCtrl")
const universityRouter = express.Router();

// Create a new university
//post/api/v1/universities
universityRouter.post('/', universityCreatCtrl);

// Read a single university by its ID
//post/api/v1/universities/:id
universityRouter.get('/:id', universityCtrl);

// Read all universities
universityRouter.get('/', universitiesCtrl);

// Update a university by its ID
universityRouter.put('/:id', universityUpdateCtrl);

// Delete a university by its ID
universityRouter.delete('/:id', universityDeleteCtrl);

module.exports = universityRouter;