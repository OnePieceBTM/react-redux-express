//链接mongo，并且使用imooc这个集合
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success1')
})
// const User = mongoose.model('user',new mongoose.Schema({
// 	user:{type:String,require:true},
// 	age:{type:Number,require:true}
// }))
// User.create({
// 	user:'wuyiguang',
// 	age:26
// },function(err,doc){
// 	if(!err){
// 		console.log(doc)
// 	}
// 	else{
// 		console.log(err)
// 	}
// })

// User.remove({user:'imooc2'},function(err,doc){
// 	console.log(doc)
// })

// User.update({user:"wuyiguang"},{"$set":{age:25}},function(err,doc){
// 	console.log(doc)
// })
// User.find({},function(err,doc){
// 	res.json(doc)
// })