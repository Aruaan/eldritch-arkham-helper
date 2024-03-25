import { IsEnum, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator'
import { Game } from '/Users/aleksa/Desktop/Projects/arkham-eldritch-horror/eldritch-arkham-helper/src/game.enum'

export class CreateInvestigatorDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  health: number

  @IsNumber()
  @IsNotEmpty()
  sanity: number

  @IsNumber()
  @IsNotEmpty()
  lore: number

  @IsNumber()
  @IsNotEmpty()
  influence: number

  @IsNumber()
  @IsNotEmpty()
  observation: number

  @IsNumber()
  @IsNotEmpty()
  strength: number

  @IsNumber()
  @IsNotEmpty()
  will: number

  @IsEnum(Game)
  @IsNotEmpty()
  game: string
}
