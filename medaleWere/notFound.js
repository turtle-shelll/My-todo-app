const notFound = (req,res)=>res.status(404).send('there is no route found...');


module.exports = notFound;