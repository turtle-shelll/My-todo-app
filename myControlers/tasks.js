const Task = require('../module/task');
const asyncWraper = require('../medaleWere/asyncWraper');
const {createErrorHandler} = require('../medaleWere/custom-err')

const getAllItems = asyncWraper( async (req, res )=>{
          const tasks = await Task.find({});
          res.status(200).json({tasks});
     /*} catch (error) {
          const msg = error.message;
          res.status(400).json({error:msg});
     }*/
})

const createTask = asyncWraper( async (req, res )=>{

    
          const task = await Task.create(req.body);
              res.status(201).json({task});
    /* } catch (error) {
          const msg = error.message;
          res.status(400).json({error:msg});
     }*/
})
const getSingleItem = asyncWraper( async (req, res,next )=>{
          const {id:tskID}  = req.params;
          const task = await Task.findOne({_id:tskID})

          if( !task ){
             return next(createErrorHandler(`there is no task found with ${tskID} id`, 404));
             };
          // const error = new Error('Not found ');
          //error.status = 404;
          //return next(error);     
          //return res.status(404).json({msg: `there is no task found with ${tskID} id`}) 
                    
          res.status(200).json({task});
     /*} catch (error) {
          //const msg = error.message;
          res.status(500).json({error});
     }*/
//res.json({id:req.params.id})
})

const updateTask = asyncWraper( async (req, res,next )=>{
          const {id:tskID}  = req.params;
          const task = await Task.findOneAndUpdate({_id:tskID}, req.body ,{
            new:true,
            runValidators:true,
          });
          if( !task ){
             return next(createErrorHandler(`there is no task found with ${tskID} id`,404));
             };

          res.status(200).json({task});
     /*} catch (error) {
          //const msg = error.message;
          res.status(400).json({error});
     //res.send('updating exiting task')
     }*/
})

const deleteTask = asyncWraper( async (req, res ,next)=>{
          const {id:tskID}  = req.params;
          const task = await Task.findOneAndDelete({_id:tskID});

          if( !task ){
            return next(createErrorHandler(`there is no task found with ${tskID} id`,404));
            };

          res.status(200).json({task});
     /*} catch (error) {
          const msg = error.message;
          res.status(400).json({error:msg});
     }*/
    // res.send('deleting task')
})


/*const putTask = async (req, res )=>{
     try {
          const {id:tskID}  = req.params;
          const task = await Task.findOneAndUpdate({_id:tskID}, req.body ,{
            new:true,
            runValidators:true,
            overwrite:true,
          });
          if( !task ){
               return res.status(404).json({msg: `there is no task found with ${tskID} id`}) 
               };

          res.status(200).json({task});
     } catch (error) {
          //const msg = error.message;
          res.status(400).json({error});
     //res.send('updating exiting task')
     }
};*/


module.exports = {getAllItems,
                createTask ,
                getSingleItem,
                updateTask,
                deleteTask,
               // putTask,
};