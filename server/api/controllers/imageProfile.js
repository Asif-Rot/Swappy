const { cloudinary } = require('../models/cloudinary');

exports.get_image_profile =  (req, res) => {
    console.log("here")
    const imgId = req.params.imgId;
    console.log("https://res.cloudinary.com/dt9z5k8rs/image/upload/v1658043749/"+imgId+".jpg")
        return res.status(200).json({
            message:"ok get profile image ",
            urlImage: "https://res.cloudinary.com/dt9z5k8rs/image/upload/v1658043749/"+imgId+".jpg"
        })

    // console.log("img id")
    // console.log(imgId)
    // const { resources } =  cloudinary.search
    //     .expression('folder:dev_setups')
    //     .sort_by('public_id', 'desc')
    //     .max_results(30)
    //     .execute();
    //
    // const publicIds = resources.map((file) => file.public_id);
    // console.log(publicIds)
    // res.send(publicIds);
};

exports.upload_image_profile =  (req, res) => {
        const fileStr = req.body.data;
        const uploadResponse =  cloudinary.uploader.
        upload(fileStr, {
            resource_type: 'image',
        })
            .then((result)=>{
                console.log(result)
                res.status(200).json({
                    message: "Image Upload sucsses",
                    public_id: result.public_id
                });
        })
            .catch((error)=>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
    });


};