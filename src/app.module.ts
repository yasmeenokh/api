import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from './database.config';
import { WorkspaceModule } from './workspace/workspace.module';
@Module({
  imports: [MongooseModule.forRoot(databaseConfig.uri), WorkspaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
