import { Router } from 'express'

const router = Router()

import * as runsCtrl from '../controllers/runs.js'

router.get('/', runsCtrl.index)
router.get('/new', isLoggedIn, runsCtrl.newRun)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}
router.post('/', runsCtrl.create)

export {
  router
}