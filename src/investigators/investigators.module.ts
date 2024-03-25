/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { InvestigatorsController } from './investigators.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { InvestigatorSchema } from '/Users/aleksa/Desktop/Projects/arkham-eldritch-horror/eldritch-arkham-helper/src/schemas/investigatorSchema'
import { InvestigatorsService } from './investigators.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Investigator', schema: InvestigatorSchema }])],
  controllers: [InvestigatorsController],
  providers: [InvestigatorsService],
})
export class InvestigatorsModule {}
