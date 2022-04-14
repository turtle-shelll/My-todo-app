//console.log('Task Manager App')
require('dotenv').config()
//const mongoURI = require('.env')
const exprees = require('express');
const app = exprees();
const tasks = require('./myRoutes/tasks');
const connectDB = require('./DB/connnect');
//const task = require('./module/task');
const notFound = require('./medaleWere/notFound');
const errorHandler = require('./medaleWere/errorHandler');


app.use(exprees.static('./public'));
app.use(exprees.json());


/*app.get('/home', (req,res)=>{
    res.end('hey there i am home page')
});
app.get('/about', (req,res)=>{
    res.end('do u want to look for about page')
});*/

app.use('/api/v1/tasks',tasks);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 3000 ;
 
//const app.get('/api/v1/tasks')           - get all the tasks          
//const app.post('/api/v1/tasks')          - creat a new tasks 
//const app.get('/api/v1/tasks/:id')       - to get single task    
//const app.patch('/api/v1/tasks/:id')     - to update single task      
//const app.delete('/api/v1/tasks/:id/')   - to delete single task       


const start = async ()=>{
      try {
          await connectDB(process.env.mongo_uri)
          app.listen(port, console.log(`server is listening on port ${port}......`))
              
      } catch (error) {
        console.log(error);
      }
}


start();