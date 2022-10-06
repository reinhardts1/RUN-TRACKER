import { Run } from "../models/run.js"
import { Profile } from "../models/profile.js"

function index(req, res) {
  Run.find({})
    .populate('owner')
    .then(runs => {
      res.render('runs/index', {
        runs: runs,
        title: 'View Runs'
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Run.create(req.body)
    .then(run => {
      res.redirect('/runs')
    })
    .catch(err => {
      res.redirect('/')
    })
}


function newRun(req, res) {
  res.render('runs/new', {
    title: 'Add Run'
  })
}


function show(req, res) {
  Run.findById(req.params.id)
  .populate('owner')
  .then(run => {
    res.render('runs/show', {
      run: run,
      title: 'Detail'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}

function edit(req, res) {
  Run.findById(req.params.id)
  .then(run => {
    res.render('runs/edit', {
      run,
      title: 'Edit Run'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}




function deleteRun(req, res) {
  Run.findById(req.params.id)
  .then(run => {
    if (run.owner.equals(req.user.profile._id)){
      run.delete()
      .then(deletedRun => {
        res.redirect('/runs')
      })
    } else {
      throw new Error('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}


export {
  index,
  create,
  newRun,
  show,
  edit,
  deleteRun as delete
}

