import mongoose from "mongoose";

export async function connectDatabase() {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("mongoDB connected");
	} catch (error) {
		console.error('MongoDB connection failed:', error);
		process.exit(1);
	}
}
