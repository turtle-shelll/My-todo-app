



  class customApiError extends Error {
      constructor(message,statusCode){
          super(message)
          this.statusCode = statusCode;
      }
  };



  const createErrorHandler = (msg,statusCode)=>{
        return new customApiError(msg,statusCode);

  }


  module.exports = {customApiError,createErrorHandler};