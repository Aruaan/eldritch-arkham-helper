/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateInvestigatorDto } from 'src/dto/create-investigator-dto'
import { UpdateInvestigatorDto } from '/Users/aleksa/Desktop/Projects/arkham-eldritch-horror/eldritch-arkham-helper/src/dto/update-investigator.dto'
import { Investigator } from 'src/interface/investigators.interface'

@Injectable()
export class InvestigatorsService {
  constructor(
    @InjectModel('Investigator')
    private readonly investigatorModel: Model<Investigator>
  ) {}

  async getInvestigators(game?: string): Promise<Investigator[]> {
    let query = {}
    if (game) {
      query = { game }
    }

    return this.investigatorModel.find(query).exec()
  }

  async getInvestigatorById(id: string): Promise<Investigator> {
    return this.investigatorModel.findById(id).exec()
  }

  async createInvestigator(createInvestigatorDto: CreateInvestigatorDto) {
    const newInvestigator = new this.investigatorModel(createInvestigatorDto)
    return newInvestigator.save()
  }

  async updateInvestigator(
    id: string,
    updateInvestigatorDto: UpdateInvestigatorDto
  ): Promise<Investigator> {
    return this.investigatorModel.findByIdAndUpdate(id, updateInvestigatorDto)
  }

  async deleteInvestigator(id: string): Promise<void> {
    return this.investigatorModel.findByIdAndDelete(id)
  }
}
