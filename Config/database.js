const mongoose = require("mongoose")
const keys = require('./key')




const connectDB = async () => {
	try {

		await mongoose.connect('mongodb+srv://raja:raja@tarar.sinqh.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser:true})
			.then(() => {
				console.log('Now you are connected to MongoDB DataBase...')
			})
			.catch(err => console.error('Could not connect to MongoDB DataBase...', err));
	} catch (err) {
		
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;