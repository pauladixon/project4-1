const Hike = require('../models/hike');


const create = async(req, res) =>{
    // IF NOTHING IN THE KEY DELETE THE KEY
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    // FED USER ID TO THE Hike whic loged the id in the new Hike
// TODo: need to get user from backend 
// todo something likt this console.log(req.header
// todo req.heaader.authorization
// todo how to get authoten token from headers
    // loging the user 
    // console.log("req.user",req.user, req.user._id);
    req.body.user = req.user._id;

    
    // create a new matza
    const hike = new Hike(req.body);
    // hike.push(req.user);
    // save the new matza to the database\
    // hike.push(req.user._id);
    try {
        await hike.save();
        console.log(hike)
        res.json( hike );

      } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
      }
};

module.exports = {
    create,
};

