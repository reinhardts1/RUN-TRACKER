import { Router } from 'express'

const router = Router()

import * as runsCtrl from '../controllers/runs.js'

router.get('/', runsCtrl.index)
router.get('/new', runsCtrl.newRun)
router.post('/', runsCtrl.create)

export {
  router
}