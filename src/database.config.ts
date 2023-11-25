import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
  uri: 'mongodb+srv://yasmeenokh:1282680.y@cluster0.qz7j5pw.mongodb.net/workspace?retryWrites=true&w=majority', // Replace with your MongoDB connection URI
};
