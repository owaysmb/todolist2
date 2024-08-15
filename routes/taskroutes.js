const express = require("express");
const router = express.Router();
const task = require("../models/task");
const app = express()
var bodyparser = require('body-parser')
router.use(bodyparser.json())

router.get("/task", async (req, res) => {
  res.sendFile('newfrontendtodo/newtodo.html', {root: __dirname })
});
router.get('/tasks', function (req, res) {
  task.find({}).then(function (data) {
    console.log(data);
    res.send(data)
  })
})

router.post("/task", (req, res) => {
  console.log(req.body);
  new task(req.body).save().then(function (s) {
    res.send(req.body)
  })
});

router.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const datatoupdate = req.body;
    const findtask = await task.findByIdAndUpdate(id, datatoupdate, {
      new: true,
    });
    res.status(200).json({ message: "updated successfully", findtask });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/task/:id", async (req,res)=>{
    try{
        const {id} = req.params
        const datatodelete = req.body
        const deletetask = await task.findByIdAndDelete(id,datatodelete, {new:true})
        res.send(200).json({message: "Deleted", deletetask})
    }catch(err){
        res.status(400).json({error: err.message})
    }
})



module.exports = router;
