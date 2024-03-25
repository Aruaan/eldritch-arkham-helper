import { Document } from 'mongoose'
import { Game } from '/Users/aleksa/Desktop/Projects/arkham-eldritch-horror/eldritch-arkham-helper/src/game.enum'

export interface Investigator extends Document {
  name: string
  health: number
  sanity: number
  lore: number
  influence: number
  observation: number
  strength: number
  will: number
  game: Game
}
