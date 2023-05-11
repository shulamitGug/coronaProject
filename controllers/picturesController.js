import { StatusCodes } from "http-status-codes";

  import multer from 'multer';
 
  var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null,   file.originalname);
    }
  });
  const upload = multer({ storage: storage }).single('uploads');

  const addPicture = async function (req, res) {
   upload(req, res, function (x) {
       console.log(req.file)
       res.status(StatusCodes.OK).json()

    })

  }


export {
    addPicture,upload
}