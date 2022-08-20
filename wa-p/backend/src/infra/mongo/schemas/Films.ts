import { Schema, model } from "mongoose";
import { Films } from './interfaces/Films'

const FilmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
},{
    timestamps:  true
})

export default model<Films>('Film', FilmSchema)