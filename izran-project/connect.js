let collection;

// Express
const { Router } = require('express');
const express = require('express');
const app = express();
const storyRouter = Router();
const postRouter = Router();
const port = process.env.PORT || 3000;

// MongoDb
const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb+srv://izran-admin:G009leG0dG090l@cluster0.bih5e.mongodb.net/izran-database?retryWrites=true&w=majority';
const dbName = 'izran-database';
const client = new MongoClient(url);
let db = client.db(dbName);

//Mongojs
const mongojs = require('mongojs');

//multer
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');

//grid
var Grid = require('gridfs-stream');

//path
const path = require('path');

//crypto
const crypto = require('crypto');

// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongo } = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//gfs stream
let gfs = Grid(db, mongo);
gfs.collection('upload');


//Create storage engine
const storage = new GridFsStorage({
  url: url,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if(err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketname: 'uploads'
        };
        resolve(fileInfo);
      })
    })
  }
});

const upload = multer({storage});

// @ GET /
//@desc Loads form

//@route POST /upload
//@desc Uploads file to DB
app.post('')



storyRouter.route('/stories-content')
  .get((req, res) => {
    collection = db.collection("stories-content");
    const cursor = collection.find({}).toArray((error, result) => {
      if(error){
        return res.status(500).send(error)
      }
      res.json(result);
    }) 
  });

  storyRouter.route('/stories-content/:id')
  .get((req, res) => {
    collection = db.collection("stories-content");
    collection.find({_id:mongojs.ObjectID(req.params.id)}).toArray((error, result) => {
      if(error){
        return res.status(500).send(error)
      }
      res.json(result);
      //res.redirect("https:");
    })
  });







  

app.use('/api', storyRouter);

postRouter.route('/stories-userpost')
  .post((req, res) => {
    collection = db.collection("stories-content");
    
    delete req.body._id;
    collection.insertOne(req.body).then(result => {
      console.log(result);
    });
    res.json(req.body);
  });

app.use('/api', postRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});



app.listen(port, () => {
  console.log(`Logging on port: ${port}`);
  client.connect(err => {
    if(err) {
      throw err;
    }
    console.log(`Connected to database: ${dbName}`)
  })
});
