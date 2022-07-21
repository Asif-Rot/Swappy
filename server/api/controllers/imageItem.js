const { cloudinary } = require('../models/cloudinary');

exports.get_image_item =  (req, res) => {
    const imgId = req.params.imgId;
    // console.log(imgId);
    const imageResponse = cloudinary.api.resource(imgId,
        function(error, result) {console.log(result, error)});
};


// exports.upload_image_item = async(req, res) => {
//     const fileStr = req.body.data;
//     // res_promises will be an array of promises
//     let file = new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(fileStr, {
//                 resource_type: 'image',
//                 folder: 'book_img'
//             },
//             async function (error, result) {
//                 if (error) {
//                     reject(error)
//                 }
//                 else {
//                     console.log(result.url);
//                     resolve(result.url);
//                 }
//             })
//     })
// }

exports.upload_image_item =  (req, res) => {
    const fileStr = req.body.data;
    const uploadResponse =  cloudinary.uploader.
    upload(fileStr, {
        resource_type: 'image',
        folder: 'book_img'
    })
        .then((result)=>{
            res.status(200).json({
                message: "Image Upload success",
                public_id: result.public_id,
                url: result.url
            });
            console.log(result.url);
        })
        .catch((error)=>{
            res.status(500).json({
                error: err
            });
        });
};