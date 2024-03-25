/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { InvestigatorsService } from './investigators.service'
import { Investigator } from 'src/interface/investigators.interface'
import { CreateInvestigatorDto } from '/Users/aleksa/Desktop/Projects/arkham-eldritch-horror/eldritch-arkham-helper/src/dto/create-investigator-dto'
import { UpdateInvestigatorDto } from '/Users/aleksa/Desktop/Projects/arkham-eldritch-horror/eldritch-arkham-helper/src/dto/update-investigator.dto'

@Controller('investigators')
export class InvestigatorsController {
  constructor(private readonly investigatorsService: InvestigatorsService) {}

  @Get()
  async getInvestigators(@Query('game') game?: string): Promise<Investigator[]> {
    return this.investigatorsService.getInvestigators(game)
  }

  @Get(':id')
  async getInvestigatorById(@Param('id') id: string): Promise<Investigator> {
    return this.investigatorsService.getInvestigatorById(id)
  }

  @Post()
  async createInvestigator(
    @Body() createInvestigatorDto: CreateInvestigatorDto
  ): Promise<Investigator> {
    return this.investigatorsService.createInvestigator(createInvestigatorDto)
  }

  @Put(':id')
  async updateInvestigator(
    @Param('id') id: string,
    @Body() updateInvestigatorDto: UpdateInvestigatorDto
  ): Promise<Investigator> {
    return this.investigatorsService.updateInvestigator(id, updateInvestigatorDto)
  }

  @Delete(':id')
  async deleteInvestigator(@Param('id') id: string): Promise<void> {
    return this.investigatorsService.deleteInvestigator(id)
  }
}
