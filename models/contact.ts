import mongoose, { Schema, Document } from 'mongoose'

interface IContact extends Document {
  name: string
  email: string
  age: number
}

const contactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
})

const Contact = mongoose.model<IContact>('Contact', contactSchema)

export { Contact }
