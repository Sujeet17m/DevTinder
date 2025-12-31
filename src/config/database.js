const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://sujeet17das:sujeet17das@namastecluster.bvkocdi.mongodb.net/'
    );
    console.log("Database connected successfully");
};

module.exports = connectDB;
