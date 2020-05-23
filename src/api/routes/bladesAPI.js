var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://mbraly01:Flash4296@cluster1.xwogl.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("blades").collection("users");
    users = collection[req]
    res.json(req);
    // perform actions on the collection object
    client.close();
    });
});

module.exports = router;

// @app.route('/blades_login', methods = ['POST'])
// def blades_login():
//     data = request.get_json()
//     username = data['username']
//     client = pymongo.MongoClient("mongodb+srv://mbraly01:Flash4296@cluster1.xwogl.mongodb.net/test?retryWrites=true&w=majority")    
//     db = client.blades
//     collection = db['users']
//     user = collection.find_one({'_id': username})
//     if collection.find_one({'_id': username}) == None:
//         return jsonify({'user':'false'})
//     else:
//         return jsonify(user)