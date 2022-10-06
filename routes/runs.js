import { Router } from 'express'

const router = Router()

import * as runsCtrl from '../controllers/runs.js'

router.get('/', runsCtrl.index)
router.get('/new', isLoggedIn, runsCtrl.newRun)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}
router.get('/:id/edit', isLoggedIn, runsCtrl.edit)

router.post('/', isLoggedIn, runsCtrl.create)

router.get('/:id', runsCtrl.show)



router.put('/:id', isLoggedIn, runsCtrl.update)

router.delete('/:id', isLoggedIn, runsCtrl.delete)

export {
  router
}