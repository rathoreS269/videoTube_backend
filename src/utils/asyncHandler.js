const asyncHandler = (requestHandler) =>{
    return (req, res, next) =>{
       Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
     }
   }
   
   export {asyncHandler}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /* another syntax

   const asyncHandler = () =>{} // function declared
   const asyncHandler = (func) =>{} // took function as parameter
   const asyncHandler = (func) => async() =>{} //further passing this function to another function and making it async


   const asyncHandler = (func) => async(req, res, next) =>{ //final result
     try{
      await func(req, res, next)
     }
     catch(error){
       res.status(err.code || 500).json({
         success :  false,
         message : err.message
       })
     }
   } */
    // this is a high order function which can accept a function as parameter and future we can take that function in another function so (func) => async() [(func) taking and exporting ]
   