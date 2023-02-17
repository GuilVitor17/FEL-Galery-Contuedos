import mongoose from 'mongoose';

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/admin");

let db = mongoose.connection;

export default db