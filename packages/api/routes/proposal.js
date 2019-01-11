const express = require('express');
const router = express.Router();

const findProposal = require('../controller/findProposal')
const findAllProposals = require('../controller/findAllProposals')
const createProposal = require('../controller/createProposal')
const updateProposal = require('../controller/updateProposal')
const deleteProposal = require('../controller/deleteProposal')

// Find One Proposal
router.get('/find-one/:id', async (req, res, next) => {
  let db_response = await findProposal(req.params.id)
  res.json(db_response)
})

// Find All Proposals
router.get('/find-all', async (req, res, next) => {
  let db_response = await findAllProposals()
  res.json(db_response)
})

// Create One Proposal
router.post('/create', async (req, res, next) => {
  let db_response = await createProposal(req.body)
  res.json(db_response)
})

// Update One Proposal
router.put('/update', async (req, res, next) => {
  let db_response = await updateProposal(req.body)
  res.json(db_response)
})

// Update One Proposal
router.delete('/delete', async (req, res, next) => {
  let db_response = await deleteProposal(req.body)
  res.json(db_response)
})

module.exports = router;
