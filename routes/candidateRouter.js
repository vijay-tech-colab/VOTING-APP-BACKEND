const express = require('express');
const candidateController = require('../controllers/candidateController');
const userAthenticate = require('../middlewares/auth');
const router = express.Router();
router.post('/save',userAthenticate,candidateController.createCandidate);
router.delete('/delete/:candidate',userAthenticate,candidateController.deleteCandidate);
router.put('/update/:candidate',userAthenticate,candidateController.updateCandidates);
router.post('/vote/:candidate',userAthenticate,candidateController.voteCandidates);
// access the user interface
router.get('/getallcondidates',userAthenticate,candidateController.getAllCandidates);
// only access the admin interface
router.get('/votecound',candidateController.voteCount);

module.exports = router; 