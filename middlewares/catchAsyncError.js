function catchAsyncError(passedFunction) {
    return (req, res, next) => {
        Promise.resolve(passedFunction(req, res, next)).catch(next);
    };
}

export default catchAsyncError;

// const newfun = (req, res, next) => {

//     Promise.resolve(
//         async (req, res, next) => {
//             const { name, age } = req.body;

//             if (!name || !age) {
//                 return next(new ErrorHandler(422, 'name and age are required'));
//             }

//             const userExists = await userModel.findOne({ name });
//             if (userExists) {
//                 return next(new ErrorHandler(400, 'Account already exists'));
//             }
//             const user = await userModel.create({ name, age });

//             res.status(201).json({
//                 message: 'user created successfully!',
//                 success: true,
//             });
//         }
//     ).catch(next)
// }
