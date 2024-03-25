/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { InvestigatorsModule } from './investigators/investigators.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/investigators'), InvestigatorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
