const controller = require('../controllers/postal')
const validate = require('../controllers/postal.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

/*
 * Postal routes
 */

router.get(
    '/',
    trimRequest.all,
    controller.getItems
  )
  
  router.post(
    '/',
    requireAuth,
    AuthController.roleAuthorization(['admin']),
    trimRequest.all,
    validate.createItem,
    controller.createItem
  )
  
  router.get(
    '/:id',
    trimRequest.all,
    validate.getItem,
    controller.getItem
  )
  
  router.patch(
    '/:id',
    requireAuth,
    AuthController.roleAuthorization(['admin']),
    trimRequest.all,
    validate.updateItem,
    controller.updateItem
  )
  
  router.delete(
    '/:id',
    requireAuth,
    AuthController.roleAuthorization(['admin']),
    trimRequest.all,
    validate.deleteItem,
    controller.deleteItem
  )
  
  module.exports = router