const express = require('express');
const router = express.Router();

const findSection = require('../controller/proposal/section/findSection')
const findSections = require('../controller/proposal/section/findSections')
const createSection = require('../controller/proposal/section/createSection')
const updateSection = require('../controller/proposal/section/updateSection')
const deleteSection = require('../controller/proposal/section/deleteSection')

// Find One Section
// GET
// id = proposal.id & rel = boolean
router.get('/find-one/:id', async (req, res, next) => {
  let db_response = await findSection(req.params.id, req.query.rel)
  res.json(db_response)
})

// Find All Sections
// GET
// req.body = proposal.id
router.get('/find-related', async (req, res, next) => {
  let db_response = await findSections(req.body)
  res.json(db_response)
})

// Create One Section
router.post('/create', async (req, res, next) => {
  let db_response = await createSection(req.body)
  res.json(db_response)
})

// Update One Section
router.put('/update', async (req, res, next) => {
  let db_response = await updateSection(req.body)
  res.json(db_response)
})

// Update One Section
router.delete('/delete', async (req, res, next) => {
  let db_response = await deleteSection(req.body)
  res.json(db_response)
})

module.exports = router;
