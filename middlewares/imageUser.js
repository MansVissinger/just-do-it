const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, "uploads/")
    },
    filename(req, file, cb){
        cb(null, new Date().toISOString() + "-" + file.originalname)
    }
})

const types = ["image/img", "image/jpeg", "image/jpg"]

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(null,false)
    }
}

module.exports = multer({storage, fileFilter})