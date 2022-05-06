const express = require ('express');
const Researchtopic = require('../../models/IS_models/Researchtopic');

const router = express.Router();

//get all research topics

router.route("/displayresearchtopic").get((req, res) => {
    Researchtopic.find().exec((err, researchtopic) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingResearchtopic: researchtopic,
    });
  });
});

module.exports = router;