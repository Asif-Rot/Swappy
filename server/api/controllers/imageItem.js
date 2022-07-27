const { cloudinary } = require('../models/cloudinary');

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

exports.delete_image_item = async (req, res) => {
    const publicId = req.params.publicId;
    const deleteResponse = await cloudinary.uploader.destroy("book_img/"+publicId, {
        resource_type: 'image',
    })
    .then((result)=>{
    res.status(200).json({
        message: "Image Delete success"
    });
    })
    .catch((error)=>{
        res.status(500).json({
            error: err
        });
    })
}