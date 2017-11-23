const mongoose = require('./db.js');
const {
    Model,
    Schema,
} = mongoose;
const Schema = mongoose.Schema;
const authUserSchema = new Schema({
    login: String,
    name: String,
    avatar_url: String,
});

class authUser extends Model{
    //因为已经extends 了 Model,所以可以直接用mongoose原生方法
    //save 方法直接 用authUserDAO.create({id:id})
    //update 方法直接 用authUserDAO.update({id:id},data})
    static async findByLogin(data){
        return this.findOne(data)
    }
};

// authUserDAO.prototype.save = function(data) {
//     return new authUserModel(data).save();
// };

// authUserDAO.prototype.update = function(data) {
//     let condition = {
//         login: data.login
//     };
//     return authUserModel.update(condition, data).exec();
// };


// authUserDAO.prototype.findByLogin = function(condition) {
//     return authUserModel.findOne(condition).exec();
// };


// authUserDAO.prototype.find = function(condition) {
//     return authUserModel.find(condition).exec();
// };

authUserSchema.loadClass(authUser)
const authUser = mongoose.model('users', authUserSchema);

module.exports = authUser;
