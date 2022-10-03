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

function create(req, res) {
  Run.create(req.body)
    .then(run => {
      res.redirect(`/runs/${run._id}`)
    })
    .catch(err => {
      res.redirect('/runs')
    })
}


function newRun(req, res) {
  res.render('runs/new', {
    title: 'Add Run'
  })
}



export {
  index,
  create,
  newRun 
}

