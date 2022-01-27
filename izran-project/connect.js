let db, collection;

// Express
const { Router } = require('express');
const express = require('express');
const app = express();
const storyRouter = Router();
const port = process.env.PORT || 3000;

// MongoDb
const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb+srv://izran-admin:G009leG0dG090l@cluster0.bih5e.mongodb.net/izran-database?retryWrites=true&w=majority';
const dbName = 'izran-database';
const client = new MongoClient(url);

//Mongojs
const mongojs = require('mongojs');


// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


storyRouter.route('/stories-content')
  .get((req, res) => {
    collection = db.collection("stories-content");
    collection.find({}).toArray((error, result) => {
      if(error){
        return res.status(500).send(error)
      }
      res.json(result)
    })
  });

  storyRouter.route('/stories-content/:id')
  .get((req, res) => {
    collection = db.collection("stories-content");
    collection.find({_id:mongojs.ObjectID(req.params.id)}).toArray((error, result) => {
      if(error){
        return res.status(500).send(error)
      }
      res.json(result)
    })
  });





  

app.use('/api', storyRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});



app.listen(port, () => {
  console.log(`Logging on port: ${port}`);
  client.connect(err => {
    if(err) {
      throw err;
    }
    db = client.db(dbName);
    console.log(`Connected to database: ${dbName}`)
  })
});
