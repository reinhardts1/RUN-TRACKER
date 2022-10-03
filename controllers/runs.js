import { Run } from "../models/run.js"

function index(req, res) {
  Run.find({})
    .then(runs => {
      res.render('runs/index', {
        runs: runs,
        title: 'View Runs'
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/runs')
    })
}

export {
  index
}

