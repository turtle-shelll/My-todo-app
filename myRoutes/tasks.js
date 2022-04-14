const express = require('express');
const router = express.Router();
const { getAllItems,
    createTask ,
    getSingleItem,
    updateTask,
    deleteTask } = require('../myControlers/tasks');




router.route('/').get(getAllItems).post(createTask);
router.route('/:id').get(getSingleItem).patch(updateTask).delete(deleteTask);


module.exports=router;