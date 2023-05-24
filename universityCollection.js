const express = require('express');
const app = express();
  app.get('/universities/:name', async (req, res) => {
    try {
      const university = await universitiesCollection.findOne({ name: req.params.name });
      if (university) {
        res.json(university);
      } else {
        res.status(404).send('University not found');
      }
    } catch (err) {
      console.log('Error retrieving university from database:', err);
      res.status(500).send('Error retrieving university from database');
    }
  });

 