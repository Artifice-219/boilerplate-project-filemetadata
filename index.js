var express = require('express');
var cors = require('cors');
const multer = require('multer')
const upload = multer({dest : 'upload/'})
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  // if there are no uploaded file
  // if(!req.file){
  //   return res.status(400).send('No file was uploaded')
  // }

  res.json({
    name : req.file.originalname,
    type : req.file.mimetype,
    size : req.file.size
  })

})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
