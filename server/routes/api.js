const express = require('express');
const { body, validationResult } = require('express-validator/check');
const knex = require('../config');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    knex('cities').orderBy('id', 'inc')
      .then((collection) => {
        res.json(collection);
      })
      .catch((error) => {
        res.status(501).json(error);
      });
  })
  .post([
    body('city')
      .isAlpha(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }
    knex('cities').insert({ city: req.body.city })
      .then(id => res.json(id[0]));
  })
  .delete((req, res) => {
    knex('cities').where('id', req.body.id).del()
      .then(count => res.json(count))
      .catch(error => res.status(503).json(error));
  });

module.exports = router;
