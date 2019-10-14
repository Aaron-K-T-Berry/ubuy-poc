const fs = require("fs");
var ObjectId = require("mongodb").ObjectID;
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

const run = () => {
	console.log("This tool will add seed data to the mongodb\n");

	// Get user seed files
	const userFilePath = "./seed/user";
	const userFilePaths = getFiles(userFilePath).map(file => {
		return `${userFilePath}/${file}`;
	});

	// Apply user
	userFilePaths.forEach(path => {
		const fileData = require(path);
		applyRecords(fileData.db, fileData.collection, fileData.records);
	});

	// Get items seed files
	const itemFilePath = "./seed/items";
	const itemFilePaths = getFiles(itemFilePath).map(file => {
		return `${itemFilePath}/${file}`;
	});

	// Apply items
	itemFilePaths.forEach(path => {
		const fileData = require(path);
		applyRecords(fileData.db, fileData.collection, fileData.records);
	});

	// Get branches seed files
	const branchFilePath = "./seed/branches";
	const branchFilePaths = getFiles(branchFilePath).map(file => {
		return `${branchFilePath}/${file}`;
	});

	// Apply branches
	branchFilePaths.forEach(path => {
		const fileData = require(path);
		applyRecords(fileData.db, fileData.collection, fileData.records);
	});

	// Get orders seed files
	const ordersFilePath = "./seed/orders";
	const ordersFilePaths = getFiles(ordersFilePath).map(file => {
		return `${ordersFilePath}/${file}`;
	});

	// Apply orders
	ordersFilePaths.forEach(path => {
		const fileData = require(path);
		applyRecords(fileData.db, fileData.collection, fileData.records);
	});
};

// UTIL
const getFiles = path => {
	const files = fs.readdirSync(path);
	return files;
};

const applyRecords = (rootDb, collection, records) => {
	records.forEach(record => {
		MongoClient.connect(
			url,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			function(err, db) {
				if (err) {
					console.log(err.errmsg);
				}
				var dbo = db.db(rootDb);
				dbo
					.collection(collection)
					.insertOne({ ...record, _id: ObjectId(record._id) }, function(
						err,
						res
					) {
						if (err) {
							console.log(err.errmsg);
						}
						db.close();
					});
			}
		);
	});
};

run();
