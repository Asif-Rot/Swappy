const { cloudinary } = require('../models/cloudinary');

exports.get_image_profile =  (req, res) => {
    const imgId = req.params.imgId;
        return res.status(200).json({
            message:"ok get profile image ",
            urlImage: "https://res.cloudinary.com/dt9z5k8rs/image/upload/v1658043749/"+imgId+".jpg"
        })
};

exports.upload_image_profile =  (req, res) => {
        const fileStr = req.body.data;
        const uploadResponse =  cloudinary.uploader.
        upload(fileStr, {
            resource_type: 'image',
        })
            .then((result)=>{
                res.status(200).json({
                    message: "Image Upload sucsses",
                    public_id: result.public_id
                });
        })
            .catch((error)=>{
                res.status(500).json({
                    error: err
                });
    });


};