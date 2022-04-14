const {customApiError} = require('./custom-err');




const errorHandler = (err, req, res, next)=> {
   // console.log(err)
   if (err instanceof customApiError) {
    return res.status(err.statusCode).json({msg: err.message})
   }
    res.status(500).json({msg:"go to the main page."})
}



module.exports = errorHandler;