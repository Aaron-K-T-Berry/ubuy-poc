import dotenv from "dotenv";
dotenv.config();

export default {
	SECRET: process.env.SECRET as string,
	APP_PORT: process.env.APP_PORT as string,
	MONGO_URL: process.env.MONGO_URL as string,
	MONGO_DB: process.env.MONGO_DB as string,
	TOKEN_SECRET: process.env.TOKEN_SECRET as string
};
