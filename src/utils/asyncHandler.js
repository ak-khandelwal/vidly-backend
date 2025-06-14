const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


// const asyncHandler = (fn) => async(req,res,next) =>{
//     try{
//         await fn(req,res,next);
//     }catch(error){
//         console.log(error)
//         res.status(error.statusCode||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

module.exports = {asyncHandler}