import { CreateInvestigatorDto } from './create-investigator-dto'
import { PartialType } from '@nestjs/mapped-types'

export class UpdateInvestigatorDto extends PartialType(CreateInvestigatorDto) {}
