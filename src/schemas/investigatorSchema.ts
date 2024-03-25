/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose'
import { Game } from '/Users/aleksa/Desktop/Projects/arkham-eldritch-horror/eldritch-arkham-helper/src/game.enum'
export const InvestigatorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    health: { type: Number, required: true },
    sanity: { type: Number, required: true },
    lore: { type: Number, required: true },
    influence: { type: Number, required: true },
    observation: { type: Number, required: true },
    strength: { type: Number, required: true },
    will: { type: Number, required: true },
    game: {
      type: String,
      required: true,
      enum: Object.values(Game),
    },
  },
  {
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id.toString()
        delete ret._id
      },
    },
  }
)
